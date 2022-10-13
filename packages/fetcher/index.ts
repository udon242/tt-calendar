import { Schedule } from '@tt-calendar/schema';
import { getBrowser, getPage } from './libs/browser';
import {
  convertTemaName,
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

      const date = extractDate(await tableRow.nth(0).innerText());
      const startTime = extractStartTime(await tableRow.nth(1).innerText());
      const start = `${date}${startTime}`;

      const homeTeam = convertTemaName(
        (await tableRow.nth(3).innerText()).trim()
      );
      const awayTeam = convertTemaName(
        (await tableRow.nth(5).innerText()).trim()
      );
      const location = (await tableRow.nth(6).innerText()).trim();

      const homeScore = extractHomeScore(await tableRow.nth(4).innerText());
      const awayScore = extractAwayScore(await tableRow.nth(4).innerText());

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
    writeFile(EXPORT_FILE_PATH, schedules);
  } catch (err) {
    throw err;
  } finally {
    browser.close();
  }
})();
