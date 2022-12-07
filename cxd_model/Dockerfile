FROM python:3.8

ARG WORKDIR=/app

COPY . /app

WORKDIR ${WORKDIR}

CMD ["python3", "model_serving.py"]