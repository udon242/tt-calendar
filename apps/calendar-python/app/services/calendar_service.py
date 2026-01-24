from typing import Optional

from icalendar import Calendar

from app.adapters.schedule_adapter import schedule_to_event
from app.services.data_service import get_schedules


def generate_calendar(calendar_name: str, team: Optional[str] = None) -> bytes:
    """iCalendar を生成する"""
    cal = Calendar()
    cal.add("prodid", "-//T.League Calendar//tt-calendar//JP")
    cal.add("version", "2.0")
    cal.add("x-wr-calname", calendar_name)

    schedules = get_schedules(team)
    for schedule in schedules:
        event = schedule_to_event(schedule)
        cal.add_component(event)

    return cal.to_ical()
