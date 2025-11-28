from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

# Load data from JSON files
def load_json(filename):
    with open(os.path.join('data', filename), 'r') as f:
        return json.load(f)

@app.route('/')
def home():
    personal_data = load_json('personal.json')
    projects_data = load_json('projects.json')
    featured_projects = [p for p in projects_data if p.get('featured', False)][:3]
    return render_template('home.html', mydata=personal_data, featured_projects=featured_projects)

@app.route('/projects')
def projects():
    personal_data = load_json('personal.json')
    projects_data = load_json('projects.json')
    return render_template('projects.html', mydata=personal_data, projects=projects_data)

@app.route('/user')
def about():
    personal_data = load_json('personal.json')
    return render_template('about.html', mydata=personal_data)

@app.route('/contact')
def contact():
    personal_data = load_json('personal.json')
    return render_template('contact.html', mydata=personal_data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)