import { expect, test } from '@playwright/test'

test('homepage renders with styles', async ({ page }) => {
  await page.goto('/')
  const heading = page.locator('h1')
  await expect(heading).toHaveText('Hello, world')
  await expect(heading).toHaveCSS('font-weight', '700')
})
