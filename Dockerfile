FROM python:3.11-slim-bullseye
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 8080
CMD [ "python3", "-m", "helloworld", "run", "--host=0.0.0.0" ]
