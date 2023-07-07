from flask import Flask, render_template, request
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
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

    # Random Forest Classifier
    rf_classifier = RandomForestClassifier()

    # Train the model
    rf_classifier.fit(X_train, y_train)

    # Get the input values from the form
    x_accel = float(request.form['x_accel'])
    y_accel = float(request.form['y_accel'])
    z_accel = float(request.form['z_accel'])
    x_gyro = float(request.form['x_gyro'])
    y_gyro = float(request.form['y_gyro'])
    z_gyro = float(request.form['z_gyro'])

    # Create a new data point for prediction
    new_data = pd.DataFrame({'X_accel': [x_accel], 'Y_accel': [y_accel], 'Z_accel': [z_accel], 'X_gyro': [x_gyro], 'Y_gyro': [y_gyro], 'Z_gyro': [z_gyro]})

    # Use the trained model to predict the category of the new data point
    predicted_category = rf_classifier.predict(new_data)

    return render_template('index.html', prediction=predicted_category[0])

if __name__ == '__main__':
    app.run(debug=True)
 




