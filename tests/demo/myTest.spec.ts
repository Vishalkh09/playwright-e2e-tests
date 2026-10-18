import { test, expect } from "@playwright/test";

test("Should load homepage with correct title", async({page}) => {
    // 1. Go to homepage
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // 2. Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // 3. Assert header text
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");

});

test("Should do something", { tag: "@smoke"}, async({page}, testInfo) => {
    // Steps...
    await page.locator("//h1").click()
});

test.only("Demo Locators", async({page}) => {
    // `page.getBy*() and page.locator()` returns the locator object.
    // The above methods not be awaited
    // The type of locator is an object
    // Locators are lazy until an action is fired on them.

    await expect(page.getByRole('heading', { name: 'We Care About Your Health' })).toBeVisible();

});