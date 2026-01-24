# プロジェクトルール

## 言語・コーディング規約

### Python

- Python 3.9 との互換性を維持する
  - `str | None` ではなく `Optional[str]` を使用
  - `list[T]` ではなく `List[T]` を使用（`typing` からインポート）
- 型ヒントを必ず付ける
- Pydantic v2 を使用する

### TypeScript

- 既存のコードスタイルに従う

## アーキテクチャ

### データ管理

- スケジュールデータは `packages/data/data.json` で一元管理
- 各アプリケーションはシンボリックリンクでデータを参照する
- アーカイブデータは `packages/data/archive/` に配置

### アプリケーション構成

- `apps/calendar/` - TypeScript版 iCal API（Hono）
- `apps/calendar-python/` - Python版 iCal API（FastAPI）

## デプロイ

- Fly.io を使用
- リージョン: nrt（成田）
- ポート: 8080
