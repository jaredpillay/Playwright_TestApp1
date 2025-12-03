import { test, expect } from '@playwright/test';

test('test', { tag: '@inspect' },async ({ page }) => {
  await page.goto('https://jaredpillay.netlify.app/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Skills' }).click();
  await page.getByRole('link', { name: 'Work' }).click();
  await page.getByRole('link', { name: 'Education' }).click();
  await page.getByText('Home About Skills Work').dblclick();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByTitle('Toggle Dark/Light Mode').click();
  await page.getByText('Software Quality Engineer – Level 1 Senior Games Global – Enhance / Atlas').click();
  await page.getByRole('link', { name: 'Get in Touch' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' LinkedIn' }).click();
  const page1 = await page1Promise;
});