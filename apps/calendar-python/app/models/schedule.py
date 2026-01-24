from enum import Enum
from typing import Optional

from pydantic import BaseModel, Field


class Team(str, Enum):
    TT_SAITAMA = "tt-saitama"
    KM_TOKYO = "km-tokyo"
    OKAYAMA = "okayama"
    RYUKYU = "ryukyu"
    SHIZUOKA = "shizuoka"
    KANAZAWA = "kanazawa"
    KA_KANAGAWA = "ka-kanagawa"
    TOP_NAGOYA = "top-nagoya"
    KYOTO = "kyoto"
    RED_ELF = "red-elf"
    NP_MALLETS = "np-mallets"
    KYUSYU = "kyusyu"
    UNDECIDED = "undecided"


TEAM_NAME_MAP: dict[Team, str] = {
    Team.TT_SAITAMA: "TT彩たま",
    Team.KM_TOKYO: "KM東京",
    Team.OKAYAMA: "岡山",
    Team.RYUKYU: "琉球",
    Team.SHIZUOKA: "静岡",
    Team.KANAZAWA: "金沢",
    Team.KA_KANAGAWA: "KA神奈川",
    Team.TOP_NAGOYA: "名古屋",
    Team.KYOTO: "京都",
    Team.RED_ELF: "日本生命",
    Team.NP_MALLETS: "ニッペM",
    Team.KYUSYU: "九州",
    Team.UNDECIDED: "未定",
}


class Schedule(BaseModel):
    start: str
    location: str
    home_team: Team = Field(alias="homeTeam")
    away_team: Team = Field(alias="awayTeam")
    home_score: Optional[int] = Field(default=None, alias="homeScore", ge=0, le=4)
    away_score: Optional[int] = Field(default=None, alias="awayScore", ge=0, le=4)

    model_config = {"populate_by_name": True}
