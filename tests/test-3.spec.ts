import { test, expect } from '@playwright/test';

//https://playwright.dev/docs/emulation#ismobile
test.use({ viewport: { width: 200, height: 1200 } });
test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=PLAYWRITE&oq=PLAYWRITE&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTEyNjA1ajBqMqgCALACAA&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('MOBILE');
  await page.getByPlaceholder('Search docs').press('Enter');
  await page.getByText('import { test, expect } from \'@playwright/test\';test.use({ viewport: { width:').click();
  await page.getByText('import { test, expect } from \'@playwright/test\';test.use({ viewport: { width:').click();
  await page.locator('pre').filter({ hasText: 'import { test, expect } from \'@playwright/test\';test.use({ viewport: { width:' }).press('ControlOrMeta+c');
});

import { defineConfig, devices } from '@playwright/test'; // import devices

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 13'],
      },
    },
  ],
});