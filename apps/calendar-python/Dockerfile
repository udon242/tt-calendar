FROM python:3.12-slim

WORKDIR /app

# 依存関係のインストール
COPY pyproject.toml ./
RUN pip install --no-cache-dir .

# アプリケーションコードのコピー
COPY app/ ./app/

# データファイルのコピー（シンボリックリンクの実体をコピー）
COPY data/ ./data/

EXPOSE 8080

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
