from fastapi import FastAPI
from fastapi.responses import Response

from app.services.calendar_service import generate_calendar

app = FastAPI(title="T.League Calendar API")

CONTENT_TYPE = "text/calendar; charset=utf-8"


@app.get("/all")
def get_all_schedule():
    """全チームの日程"""
    ical = generate_calendar("Tリーグ 日程")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/ttsaitama")
def get_ttsaitama_schedule():
    """T.T彩たまの日程"""
    ical = generate_calendar("T.T彩たま 日程", "tt-saitama")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/kmtokyo")
def get_kmtokyo_schedule():
    """木下マイスター東京の日程"""
    ical = generate_calendar("木下マイスター東京 日程", "km-tokyo")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/okayama")
def get_okayama_schedule():
    """岡山リベッツの日程"""
    ical = generate_calendar("岡山リベッツ 日程", "okayama")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/ryukyu")
def get_ryukyu_schedule():
    """琉球アスティーダの日程"""
    ical = generate_calendar("琉球アスティーダ 日程", "ryukyu")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/kakanagawa")
def get_kakanagawa_schedule():
    """木下アビエル神奈川の日程"""
    ical = generate_calendar("木下アビエル神奈川 日程", "ka-kanagawa")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/topnagoya")
def get_topnagoya_schedule():
    """トップおとめピンポンズ名古屋の日程"""
    ical = generate_calendar("トップおとめピンポンズ名古屋 日程", "top-nagoya")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/kyoto")
def get_kyoto_schedule():
    """京都カグヤライズの日程"""
    ical = generate_calendar("京都カグヤライズ 日程", "kyoto")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/redelf")
def get_redelf_schedule():
    """日本生命レッドエルフの日程"""
    ical = generate_calendar("日本生命レッドエルフ 日程", "red-elf")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/npmallets")
def get_npmallets_schedule():
    """日本ペイントマレッツの日程"""
    ical = generate_calendar("日本ペイントマレッツ 日程", "np-mallets")
    return Response(content=ical, media_type=CONTENT_TYPE)


@app.get("/kyushu")
def get_kyushu_schedule():
    """九州アスティーダの日程"""
    ical = generate_calendar("九州アスティーダ 日程", "kyusyu")
    return Response(content=ical, media_type=CONTENT_TYPE)
