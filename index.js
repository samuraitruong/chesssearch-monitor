const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://chesssearch.vercel.app/");

  await page.waitForSelector("[data-testid='game-hit-card']");

  await page.screenshot({ path: "screenshot.png" });

  await browser.close();

  console.log("Aaa")
})();
