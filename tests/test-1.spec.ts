import { test, expect } from '@playwright/test';

test('test name somthing ', async ({ page }) => {
  // Recording...
  await page.goto('https://il-drivers.gett.com/il/login?returnUrl=%2Findex');
  await page.locator('div').filter({ hasText: 'הזן מספר טלפוןהמשך' }).nth(2).click({
      button: 'right'
    });
  await page.getByPlaceholder('מספר טלפון').click();
  await page.getByPlaceholder('מספר טלפון').click();
  await page.getByRole('button', { name: 'המשך' }).click();
  await page.getByRole('button', { name: 'המשך' }).click();
  await page.getByRole('button', { name: 'המשך' }).click({
      button: 'right'
    });
  await expect(page.getByRole('button')).toContainText('המשך');
  await expect(page.getByRole('button', { name: 'המשך' })).toBeVisible();
  await page.getByPlaceholder('מספר טלפון').click();
  await page.getByPlaceholder('מספר טלפון').fill('052272727272');
  await expect(page.locator('form')).toContainText('יש להזין מספר טלפון תקין');

});

test("twara", async({page})=>{
  
});