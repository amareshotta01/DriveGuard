# from flask import Flask, jsonify, request
# import pandas as pd
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.feature_extraction.text import CountVectorizer
# from flask_cors import CORS
# import smtplib
# from email.mime.text import MIMEText

# app = Flask(__name__)
# CORS(app)

# vectorizer = CountVectorizer(stop_words='english')
# rf_classifier = RandomForestClassifier()


# @app.route('/predict', methods=['POST'])
# def predict():
#     # Read accelerometer and gyroscope data
#     accelerometer_data = pd.read_csv('Accelerometer.csv', delimiter=',')
#     gyroscope_data = pd.read_csv('Gyroscope.csv', delimiter=',')

#     # Merge based on timestamp and milliseconds
#     merged_data = pd.merge(accelerometer_data, gyroscope_data, on=['Timestamp', 'Milliseconds'])

#     # Calculate the magnitude of the acceleration vector
#     merged_data['accel_magnitude'] = (merged_data['X_accel'] ** 2 + merged_data['Y_accel'] ** 2 + merged_data['Z_accel'] ** 2) ** 0.5

#     # Threshold values for each behavior
#     aggressive_threshold = 10.0
#     risky_threshold = 15.0

#     # Assign labels based on the magnitude
#     merged_data.loc[merged_data['accel_magnitude'] < aggressive_threshold, 'label'] = 'Normal'
#     merged_data.loc[(merged_data['accel_magnitude'] >= aggressive_threshold) & (merged_data['accel_magnitude'] < risky_threshold), 'label'] = 'Aggressive'
#     merged_data.loc[merged_data['accel_magnitude'] >= risky_threshold, 'label'] = 'Risky'

#     # Split into training and testing sets
#     X = merged_data[['X_accel', 'Y_accel', 'Z_accel', 'X_gyro', 'Y_gyro', 'Z_gyro']]
#     y = merged_data['label']
#     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

#     # Random Forest Classifier
#     rf_classifier = RandomForestClassifier()

#     # Train the model
#     rf_classifier.fit(X_train, y_train)

#     # Get the input values from the request
#     data = request.get_json()
#     x_accel = float(data['x_accel'])
#     y_accel = float(data['y_accel'])
#     z_accel = float(data['z_accel'])
#     x_gyro = float(data['x_gyro'])
#     y_gyro = float(data['y_gyro'])
#     z_gyro = float(data['z_gyro'])

#     # Create a new data point for prediction
#     new_data = pd.DataFrame({'X_accel': [x_accel], 'Y_accel': [y_accel], 'Z_accel': [z_accel], 'X_gyro': [x_gyro], 'Y_gyro': [y_gyro], 'Z_gyro': [z_gyro]})

#     # Use the trained model to predict the category of the new data point
#     predicted_category = rf_classifier.predict(new_data)

#     response = {'prediction': predicted_category[0]}
#     return jsonify(response)


# @app.route('/predict_behavior', methods=['POST'])
# def predict_behavior():
#     data = request.get_json()
#     transcript = data['transcript']

#     # Vectorize the transcript
#     transcript_vectorized = vectorizer.transform([transcript])

#     # Predict category for the transcript
#     predicted_category = rf_classifier.predict(transcript_vectorized)[0]

#     if predicted_category in ['Risky', 'Aggressive']:
#         send_email(predicted_category)

#     return jsonify({'predicted_category': predicted_category})

# def send_email(category):
#     # Email configuration
#     smtp_server = 'smtp.gmail.com'
#     smtp_port = 587
#     smtp_username = 'addedyou098@gmail.com'
#     smtp_password = ''
#     sender_email = 'addedyou098@gmail.com'
#     recipient_email = 'showyamato97@gmail.com'

#     # Email content
#     subject = 'Prediction: Risky Behavior Detected'
#     body = f'The predicted behavior is {category}. Please take appropriate action.'

#     # Create the email message
#     message = MIMEText(body)
#     message['Subject'] = subject
#     message['From'] = sender_email
#     message['To'] = recipient_email

#     try:
#         # Connect to the SMTP server and send the email
#         server = smtplib.SMTP(smtp_server, smtp_port)
#         server.starttls()
#         server.login(smtp_username, smtp_password)
#         server.sendmail(sender_email, recipient_email, message.as_string())
#         server.quit()
#         print('Email sent successfully.')
#     except Exception as e:
#         print('Failed to send email:', str(e))

# if __name__ == '__main__':
#     # Load and preprocess the data
#     data = pd.DataFrame({
#         'Conversation': [
#             "Customer: How's your day going? Driver: It's been great so far. How about yours?",
#             "Customer: Can you please drive a bit more carefully? Driver: Sure, I'll be more cautious.",
#             "Customer: Thank you for the ride. Driver: You're welcome! Have a nice day!",
#             "Customer: Do you always drive at this speed? Driver: I apologize. I'll slow down.",
#             "Customer: How long have you been driving? Driver: I've been driving for 5 years now.",
#             "Customer: That was a reckless maneuver! Driver: I'm sorry, it won't happen again.",
#             "Customer: Please stop talking on the phone while driving. Driver: My apologies, I'll hang up.",
#             "Customer: You're driving too fast! Driver: I'll try to maintain a safer speed.",
#             "Customer: I appreciate your safe and calm driving. Driver: Thank you, I prioritize safety.",
#             "Customer: Watch out! You almost hit that car. Driver: I apologize, I didn't see it."
#         ],
#         'Label': ['Normal', 'Risky', 'Normal', 'Aggressive', 'Normal', 'Aggressive', 'Risky', 'Aggressive', 'Normal', 'Risky']
#     })

#     X_vectorized = vectorizer.fit_transform(data['Conversation'])

#     rf_classifier.fit(X_vectorized, data['Label'])

    
#     app.run(debug=True)


from flask import Flask, jsonify, request
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS, cross_origin
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
vectorizer = CountVectorizer(stop_words='english')
rf_classifier = RandomForestClassifier()

@app.route("/")
@cross_origin()
def helloWorld():
    return "Hello, cross-origin-world!"

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    # Read accelerometer and gyroscope data
    accelerometer_data = pd.read_csv('Accelerometer.csv', delimiter=',')
    gyroscope_data = pd.read_csv('Gyroscope.csv', delimiter=',')

    # Merge based on timestamp and milliseconds
    merged_data = pd.merge(accelerometer_data, gyroscope_data, on=['Timestamp', 'Milliseconds'])

    # Calculate the magnitude of the acceleration vector
    merged_data['accel_magnitude'] = (merged_data['X_accel'] ** 2 + merged_data['Y_accel'] ** 2 + merged_data['Z_accel'] ** 2) ** 0.5

    # Threshold values for each behavior
    aggressive_threshold = 10.0
    risky_threshold = 15.0

    # Assign labels based on the magnitude
    merged_data.loc[merged_data['accel_magnitude'] < aggressive_threshold, 'label'] = 'Normal'
    merged_data.loc[(merged_data['accel_magnitude'] >= aggressive_threshold) & (merged_data['accel_magnitude'] < risky_threshold), 'label'] = 'Aggressive'
    merged_data.loc[merged_data['accel_magnitude'] >= risky_threshold, 'label'] = 'Risky'

    # Split into training and testing sets
    X = merged_data[['X_accel', 'Y_accel', 'Z_accel', 'X_gyro', 'Y_gyro', 'Z_gyro']]
    y = merged_data['label']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train the model
    rf_classifier.fit(X_train, y_train)

    # Get the input values from the request
    data = request.get_json()
    x_accel = float(data['x_accel'])
    y_accel = float(data['y_accel'])
    z_accel = float(data['z_accel'])
    x_gyro = float(data['x_gyro'])
    y_gyro = float(data['y_gyro'])
    z_gyro = float(data['z_gyro'])

    # Create a new data point for prediction
    new_data = pd.DataFrame({'X_accel': [x_accel], 'Y_accel': [y_accel], 'Z_accel': [z_accel], 'X_gyro': [x_gyro], 'Y_gyro': [y_gyro], 'Z_gyro': [z_gyro]})

    # Use the trained model to predict the category of the new data point
    predicted_category = rf_classifier.predict(new_data)

    response = {'prediction': predicted_category[0]}
    return jsonify(response)

@app.route('/predict_behavior', methods=['POST'])
@cross_origin()
def predict_behavior():
    data = request.get_json()
    transcript = data['transcript']

    # Vectorize the transcript
    transcript_vectorized = vectorizer.transform([transcript])

    # Check if the vectorizer has a fitted vocabulary
    if not vectorizer.vocabulary_:
        # Load and preprocess the data
        data = pd.DataFrame({
            'Conversation': [
                "Customer: How's your day going? Driver: It's been great so far. How about yours?",
                "Customer: Can you please drive a bit more carefully? Driver: Sure, I'll be more cautious.",
                "Customer: Thank you for the ride. Driver: You're welcome! Have a nice day!",
                "Customer: Do you always drive at this speed? Driver: I apologize. I'll slow down.",
                "Customer: How long have you been driving? Driver: I've been driving for 5 years now.",
                "Customer: That was a reckless maneuver! Driver: I'm sorry, it won't happen again.",
                "Customer: Please stop talking on the phone while driving. Driver: My apologies, I'll hang up.",
                "Customer: You're driving too fast! Driver: I'll try to maintain a safer speed.",
                "Customer: I appreciate your safe and calm driving. Driver: Thank you, I prioritize safety.",
                "Customer: Watch out! You almost hit that car. Driver: I apologize, I didn't see it."
            ],
            'Label': ['Normal', 'Risky', 'Normal', 'Aggressive', 'Normal', 'Aggressive', 'Risky', 'Aggressive', 'Normal', 'Risky']
        })

        X_vectorized = vectorizer.fit_transform(data['Conversation'])

    # Predict category for the transcript
    predicted_category = rf_classifier.predict(transcript_vectorized)[0]

    return jsonify({'predicted_category': predicted_category})
    app.run(debug=True)