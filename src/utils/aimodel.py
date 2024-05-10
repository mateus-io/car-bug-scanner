import google.generativeai as genai
import os

genai.configure(api_key=os.getenv('GEMINI_API_KEY'))

generation_config = {
    "candidate_count": 1,
    "temperature": 0.5
}

safety_settings = {
    "HARASSMENT": "BLOCK_NONE",
    "HATE": "BLOCK_NONE",
    "SEXUAL": "BLOCK_NONE",
    "DANGEROUS": "BLOCK_NONE",
}

model = genai.GenerativeModel(
    model_name='gemini-pro-vision',
    generation_config=generation_config,
    safety_settings=safety_settings)

