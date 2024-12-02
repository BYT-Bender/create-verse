import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
api_key = os.getenv("GENAI_API_KEY")

if not api_key:
    raise ValueError("API key not found. Please set the GENAI_API_KEY environment variable.")

genai.configure(api_key = api_key)

def generate_content(prompt, model_name = "gemini-1.5-flash", file_path = None):
    model = genai.GenerativeModel(model_name)

    if file_path:
        sample_file = genai.upload_file(file_path)
        response = model.generate_content([prompt, sample_file])
    else:
        response = model.generate_content(prompt)

    return response.text
