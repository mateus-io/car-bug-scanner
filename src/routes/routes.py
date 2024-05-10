from flask import request
from ..utils.aimodel import model
import requests

def setup_routes(app):
    @app.route('/gemini', methods=["GET", "POST"])
    def handle_gemini():
        if request.method == "POST":
            file = request.files.get("file")
            contents = [
                {
                    "parts": [
                        {
                            "text": "Avalie as condições deste veículo"
                        },
                        {"text": "Imagem: "},
                        {
                            "image": {
                                "image_url": "https://devbty-content.s3.amazonaws.com/interior.jpg"
                            }
                        },
                        {
                            "text": "Lista de componentes: Painel - Muito danificado; Volante - Riscado, desgastado e descosturando; Forro de porta - Sujo, começando a soltar; Bancos - Sujos, rasgados; Tapetes e carpetes - Muito danificados; Maçanetas e travas - Quebradas; Cintos de segurança - Desfiando e descosturando; Pedais - Sujos, desalinhados;"
                        },
                        {"text": "Imagem: "},
                        {
                            "image": {
                                "image_content": file
                            }
                        },
                        {"text": "Lista de componentes: "},
                    ]
                }
            ]

            for content in contents:
                for n, part in enumerate(content['parts']):
                    if image:=part.get('image', None):
                        if image_url:=image.get('image_url', None):
                            response = requests.get(image_url)
                            data = response.content
                            mime_type = response.headers['content-type']
                        elif image_content:=image.get('image_content', None):
                            data = image_content.stream.read()
                        else:
                            raise ValueError('Either image_content or image_url must be provided.')

                        if mime_type is None:
                            # Guess!
                            mime_type = 'image/jpg'

                        blob = {'data': data, 'mime_type': mime_type}
                        content['parts'][n] = {'inline_data': blob}

            response = model.generate_content(
                contents,
                stream=False
            )
            
            return {
                "result": str(response.text).split(';')
            }


