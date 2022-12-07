FROM python:3.8

ARG WORKDIR=/app

COPY requirements /requirements
COPY requirements.txt /requirements.txt

RUN ["pip3", "install", "-r", "requirements.txt"]

COPY . /app

WORKDIR ${WORKDIR}
CMD ["sh", "startup.sh"]