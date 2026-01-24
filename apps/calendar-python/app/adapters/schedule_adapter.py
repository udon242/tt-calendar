from typing import Optional

from icalendar import Event

from app.models.schedule import Schedule, TEAM_NAME_MAP
from app.utils.datetime_utils import (
    is_all_day_event,
    parse_datetime,
    to_utc,
    get_event_end,
)


def create_score(score: Optional[int]) -> str:
    """スコアを文字列に変換する（0はそのまま、Noneは空文字）"""
    if score is None:
        return ""
    return str(score)


def create_title(schedule: Schedule) -> str:
    """試合タイトルを生成する"""
    home = TEAM_NAME_MAP.get(schedule.home_team, "未定")
    away = TEAM_NAME_MAP.get(schedule.away_team, "未定")
    home_score = create_score(schedule.home_score)
    away_score = create_score(schedule.away_score)
    return f"{home} {home_score}-{away_score} {away}"


def schedule_to_event(schedule: Schedule) -> Event:
    """Schedule を iCalendar Event に変換する"""
    event = Event()
    event.add("summary", create_title(schedule))
    event.add("location", schedule.location)

    start_dt = parse_datetime(schedule.start)
    if is_all_day_event(schedule.start):
        event.add("dtstart", start_dt.date())
        event.add("dtend", start_dt.date())
    else:
        event.add("dtstart", to_utc(start_dt))
        event.add("dtend", to_utc(get_event_end(start_dt)))

    return event
