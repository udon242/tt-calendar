import { Schedule } from '@tt-calendar/schema';
import { getBrowser, getPage } from './libs/browser';
import {
  convertTeamName,
  extractAwayScore,
  extractDate,
  extractHomeScore,
  extractStartTime,
} from './libs/adapter';
import { writeFile } from './libs/file';

const EXPORT_FILE_PATH = '../data/data.json';

(async () => {
  const browser = await getBrowser();
  try {
    const schedules: Schedule[] = [];

    const page = await getPage(browser);
    await page.goto('https://tleague.jp/schedule/');

    const tableRows = page.locator('.table > tbody > tr');
    const count = await tableRows.count();
    for (let i = 0; i < count; i++) {
      const tableRow = tableRows.nth(i).locator('td');

      const start = extractDate(await tableRow.nth(0).innerText());

      const homeTeam = convertTeamName(
        (await tableRow.nth(2).innerText()).trim()
      );
      const awayTeam = convertTeamName(
        (await tableRow.nth(4).innerText()).trim()
      );
      const location = (await tableRow.nth(5).innerText()).trim();

      const homeScore = extractHomeScore(await tableRow.nth(3).innerText());
      const awayScore = extractAwayScore(await tableRow.nth(3).innerText());

      schedules.push(
        Schedule.parse({
          start,
          homeTeam,
          awayTeam,
          location,
          homeScore,
          awayScore,
        })
      );
    }
    await writeFile(EXPORT_FILE_PATH, schedules);
  } catch (err) {
    console.error('fetch error...');
    throw err;
  } finally {
    await browser.close();
  }
})();
