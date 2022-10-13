import { Browser, chromium } from '@playwright/test';

export const getBrowser = async () => {
  return chromium.launch({
    headless: true,
  });
};

export const getPage = async (browser: Browser) => {
  const context = await browser.newContext();
  return context.newPage();
};
