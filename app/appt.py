from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    print("Rendering index.html")
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5002, debug=True)