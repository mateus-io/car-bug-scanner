FROM python:3.9.16-bullseye

WORKDIR /home/python/app

COPY . ./

RUN pip install -r requirements.txt

CMD gunicorn --timeout 200 --reload -b 0.0.0.0:8000 "wsgi:app" --access-logfile -