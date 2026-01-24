import json
from pathlib import Path
from typing import List, Optional

from app.models.schedule import Schedule, Team

# データファイルのパス
DATA_DIR = Path(__file__).parent.parent.parent / "data"
DATA_FILE = DATA_DIR / "data.json"
ARCHIVE_2022_FILE = DATA_DIR / "archive" / "2022.json"


def load_schedules() -> List[Schedule]:
    """全スケジュールを読み込む（アーカイブ + 現在のデータ）"""
    schedules: List[Schedule] = []

    # アーカイブデータ（2022年）
    if ARCHIVE_2022_FILE.exists():
        with open(ARCHIVE_2022_FILE, encoding="utf-8") as f:
            archive_data = json.load(f)
            schedules.extend(Schedule.model_validate(item) for item in archive_data)

    # 現在のデータ
    if DATA_FILE.exists():
        with open(DATA_FILE, encoding="utf-8") as f:
            current_data = json.load(f)
            schedules.extend(Schedule.model_validate(item) for item in current_data)

    return schedules


def filter_by_team(schedules: List[Schedule], team: Team) -> List[Schedule]:
    """チームでフィルタリングする（ホームまたはアウェイ）"""
    return [
        s for s in schedules if s.home_team == team or s.away_team == team
    ]


def get_schedules(team: Optional[str] = None) -> List[Schedule]:
    """スケジュールを取得する（チーム指定がある場合はフィルタリング）"""
    schedules = load_schedules()

    if team is None:
        return schedules

    try:
        team_enum = Team(team)
        return filter_by_team(schedules, team_enum)
    except ValueError:
        return []
