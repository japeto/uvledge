# pull official base image
FROM python:3.9
# Set lang
ENV LANG C.UTF-8
# Copy local code to the container image.
COPY . /opt/app
# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apt-get update \
    && apt-get -y install libpq-dev gcc \
    && pip install psycopg2
# Create and change to the app directory.
WORKDIR /opt/app
# Install production dependencies
# instalando nuestras dependencias 
RUN pip install -r requirements.txt
COPY . /opt/app/

# Expose port
EXPOSE 8000
# run application
# CMD gunicorn -b :8000 backend.wsgi.application
CMD [ "python", "./manage.py", "runserver", "0.0.0.0:8000",  "--settings=backend.settings"]