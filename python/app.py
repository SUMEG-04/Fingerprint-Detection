import cv2
import os
import numpy as np
from flask import Flask, request, jsonify
import base64

app = Flask(__name__)

@app.route('/match-fingerprint', methods=['POST'])
def match_fingerprint():
    try:
        # Check if image file was sent in request
        if 'fingerprint' not in request.files:
            return jsonify({'error': 'No fingerprint image uploaded'}), 400
            
        file = request.files['fingerprint']
        
        # Save uploaded file temporarily
        temp_path = "temp_fingerprint.jpg"
        file.save(temp_path)
        
        # Read the uploaded fingerprint image
        sample = cv2.imread(temp_path)
        
        best_score = 0
        filename = None
        matched_image = None
        best_kp1, best_kp2, best_matches = None, None, None

        # Compare with database of fingerprints
        for file in [file for file in os.listdir("SOCOFing/Real")]:
            fingerprint_image = cv2.imread("SOCOFing/Real/"+file)
            sift = cv2.SIFT_create()

            keypoints_1, descriptor_1 = sift.detectAndCompute(sample, None)
            keypoints_2, descriptor_2 = sift.detectAndCompute(fingerprint_image, None)

            matches = cv2.FlannBasedMatcher({'algorithm':1,'trees':10},{}).knnMatch(descriptor_1, descriptor_2, k=2)
            match_points = []

            for p, q in matches:
                if p.distance < 0.1*q.distance:
                    match_points.append(p)

            keypoints = min(len(keypoints_1), len(keypoints_2))

            score = len(match_points)/keypoints*100
            if score > best_score:
                best_score = score
                filename = file
                matched_image = fingerprint_image
                best_kp1 = keypoints_1
                best_kp2 = keypoints_2
                best_matches = match_points
                
        # Clean up temporary file
        os.remove(temp_path)

        # Create match visualization
        result = cv2.drawMatches(sample, best_kp1, matched_image, best_kp2, best_matches, None)
        result = cv2.resize(result, None, fx=4, fy=4)
        
        # Convert result image to base64 string
        _, buffer = cv2.imencode('.jpg', result)
        result_base64 = base64.b64encode(buffer).decode('utf-8')
        # Encode matched fingerprint image to base64
        _, matched_buffer = cv2.imencode('.jpg', matched_image)
        matched_image_base64 = base64.b64encode(matched_buffer).decode('utf-8')

        
        # Return match results
        return jsonify({
            'result': result_base64,              # visualization with lines
            'match': filename,                    # matched file name
            'matched_image': matched_image_base64, # the matched fingerprint itself
            'score': best_score,
            'matched': best_score > 80
        })


    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,port=5000)
