import {Given,When,Then} from "@cucumber/cucumber"
import {chromium,Browser,Page,expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pagefixture"

When('User adds an item to the cart', async function () {
	await pageFixture.page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]').click();
  });

  When('User clicks on the cart button', async function () {
	await pageFixture.page.locator('//a[@class="shopping_cart_link"]').click();
  });

  Then('User should see the item added', async function () {
	await expect(pageFixture.page.locator('[data-test="inventory-item-name"]')).toBeVisible();	
  });


		