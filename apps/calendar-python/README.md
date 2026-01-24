# T.League Calendar API (Python)

Tリーグの試合日程をiCalendar形式で配信するAPIです。

## 技術スタック

- **フレームワーク**: FastAPI
- **サーバー**: Uvicorn
- **iCal生成**: icalendar
- **データ検証**: Pydantic v2

## セットアップ

### 依存関係のインストール

```bash
pip install fastapi uvicorn pydantic icalendar
```

### ローカル起動

```bash
cd apps/calendar-python
uvicorn app.main:app --reload --port 8080
```

## エンドポイント

| パス | 説明 |
|------|------|
| `/all` | 全チームの日程 |
| `/ttsaitama` | T.T彩たまの日程 |
| `/kmtokyo` | 木下マイスター東京の日程 |
| `/okayama` | 岡山リベッツの日程 |
| `/ryukyu` | 琉球アスティーダの日程 |
| `/kakanagawa` | 木下アビエル神奈川の日程 |
| `/topnagoya` | トップおとめピンポンズ名古屋の日程 |
| `/kyoto` | 京都カグヤライズの日程 |
| `/redelf` | 日本生命レッドエルフの日程 |
| `/npmallets` | 日本ペイントマレッツの日程 |
| `/kyushu` | 九州アスティーダの日程 |

## ディレクトリ構成

```
apps/calendar-python/
├── app/
│   ├── main.py                 # FastAPIアプリ
│   ├── models/
│   │   └── schedule.py         # Pydanticモデル
│   ├── services/
│   │   ├── calendar_service.py # iCal生成
│   │   └── data_service.py     # データ読み込み
│   ├── adapters/
│   │   └── schedule_adapter.py # Schedule→Event変換
│   └── utils/
│       └── datetime_utils.py   # 日時変換
├── data/                       # シンボリックリンク
├── Dockerfile
├── fly.toml
└── pyproject.toml
```

## デプロイ

### Fly.io

```bash
cd apps/calendar-python
fly deploy
```
