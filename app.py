import os
import tempfile
from flask import Flask, render_template, request
from api_modules.gemini import generate_content
import markdown

app = Flask(__name__)

MODEL_API_1 = "gemini-1.5-flash"
MODEL_API_2 = "gemini-1.5-flash-8b"

@app.route('/image')
def image():
    model = request.args.get('model', '')
    return render_template('image.html', model=model)

@app.route('/')
def slider():
    return render_template('slider.html')

@app.route('/index', methods=['GET', 'POST'])
def index():
    response_text = ""
    if request.method == 'POST':
        user_input = request.form.get('user_input')
        payload = request.form.get('payload')
        selected_api = request.form.get('api_selection')
        uploaded_file = request.files.get('file_upload')

        if not user_input:
            response_text = "Please provide input text."
        else:
            user_input = f"{payload}{user_input}"

            model_map = {
                'api_1': MODEL_API_1,
                'api_2': MODEL_API_2
            }
            model_name = model_map.get(selected_api)

            if model_name and uploaded_file:
                try:
                    temp_dir = tempfile.gettempdir()
                    file_path = os.path.join(temp_dir, uploaded_file.filename)
                    uploaded_file.save(file_path)
                    
                    response_text = generate_content(prompt=user_input, model_name=model_name, file_path=file_path)
                except Exception as e:
                    response_text = f"An error occurred while processing the file: {str(e)}"
            elif model_name:
                try:
                    response_text = generate_content(prompt=user_input, model_name=model_name)
                except Exception as e:
                    response_text = f"An error occurred while generating content: {str(e)}"
            else:
                response_text = "Invalid API selection."

    response_html = markdown.markdown(response_text)
    return render_template('index.html', response_html=response_html)

if __name__ == '__main__':
    app.run(debug=True)
