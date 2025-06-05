# About Project
This is a simple Java web application using Maven that serves static content

## Features:

- **Pure Static Content**: Serves HTML, CSS, and JavaScript files
- **Responsive Design**: Works on all devices
- **Interactive Elements**: Buttons, forms, and navigation
- **Professional Styling**: Modern, clean appearance
- **Easy Deployment**: Single JAR file deployment

## To get started
- Run mvn spring-boot:run to start the application
- Visit http://localhost:8080 to see your static website

## Compile it using maven docker container
```bash

docker run --rm -v "$(pwd)":/usr/src/app -v ~/.m2:/root/.m2 -w /usr/src/app -p 8080:8080 maven:3-openjdk-17 bash -c "mvn clean compile && mvn spring-boot:run"
```

## Package the application

```bash
docker run --rm -v "$(pwd)":/usr/src/app -v ~/.m2:/root/.m2 -w /usr/src/app -p 8080:8080 maven:3-openjdk-17 bash -c "mvn clean compile && mvn spring-boot:run"
```

### Run the application 
```bash 
docker run --rm -v "$(pwd)":/usr/src/app -v ~/.m2:/root/.m2 -w /usr/src/app -p 8080:8080 maven:3-openjdk-17 mvn spring-boot:run
```

### Build a Docker Image

```bash
docker build . -t springbootapp

```
### Run Docker Image
```bash
docker run -dp 8080:8080 springbootapp:latest
```
```
```

### Run Using Docker Compose
```bash
# Start the application
docker-compose up

# Stop the application
docker-compose down
```
```



