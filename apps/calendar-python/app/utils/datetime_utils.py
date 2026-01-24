from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

JST = ZoneInfo("Asia/Tokyo")
UTC = ZoneInfo("UTC")


def is_all_day_event(date_str: str) -> bool:
    """日付文字列が終日イベントかどうかを判定する（8文字以下なら終日）"""
    return len(date_str) <= 8


def parse_datetime(date_str: str) -> datetime:
    """日付文字列をdatetimeに変換する（JST）"""
    if is_all_day_event(date_str):
        return datetime.strptime(date_str, "%Y%m%d").replace(tzinfo=JST)
    return datetime.strptime(date_str, "%Y%m%d%H%M").replace(tzinfo=JST)


def to_utc(dt: datetime) -> datetime:
    """datetimeをUTCに変換する"""
    return dt.astimezone(UTC)


def get_event_end(start: datetime, hours: int = 3) -> datetime:
    """イベント終了時刻を取得する（デフォルト3時間後）"""
    return start + timedelta(hours=hours)
