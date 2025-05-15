const Clicker = require('../pageobjects/clicker');

describe("login", () => {
    it("tests login buggy website", async () => {
      await browser.setWindowSize(1314, 928)
      await browser.url("https://recruitment-staging-queenbee.paradev.io/")
      await expect(browser).toHaveUrl("https://recruitment-staging-queenbee.paradev.io/")
      await browser.$("aria/Masuk").click()
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("85")
      await browser.$("#page-login__tabs-email__input-password").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("Test123$")
      await browser.$("#page-login__button-login").click()
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("85607802274")
      await browser.$("//*[@id=\"__next\"]/div/div/div[1]/div[2]").click()
      await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{ type: 'keyDown', value: '' }]
      }])
      await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{ type: 'keyUp', value: '' }]
      }])
      await browser.$("#page-login__tabs-email__input-password").setValue("34565787")
      await browser.$("#page-login__button-login").click()
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("")
      await browser.$("#page-login__tabs-number__input-number").setValue("")
      await browser.$("//*[@id=\"__next\"]/div/div/div[1]/div[2]").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("")
      await browser.$("#page-login__button-login").click()
      await browser.$("#page-login__tabs-email__input-password").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("T")
      await browser.$("#page-login__tabs-email__input-password").setValue("Testy")
      await browser.$("#page-login__button-login").click()
      await browser.$("//*[@id=\"__next\"]/div/div/div[1]/div[2]").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("")
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("85607802274")
      await browser.$("#page-login__tabs-email__input-password").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("T")
      await browser.$("#page-login__tabs-email__input-password").setValue("Test%^&*")
      await browser.$("#page-login__button-login").click()
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("")
      await browser.$("//*[@id=\"__next\"]/div/div").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("%$^&*(*")
      await browser.$("#page-login__button-login").click()
      await browser.$("//*[@id=\"__next\"]/div/div").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("")
      await browser.$("#page-login__tabs-number__input-number").click()
      await browser.$("#page-login__tabs-number__input-number").setValue("85607802274")
      await browser.$("#page-login__tabs-email__input-password").click()
      await browser.$("#page-login__tabs-email__input-password").setValue("T")
      await browser.$("#page-login__tabs-email__input-password").setValue("Test123$")
      await browser.$("#page-login__button-login").click()
      await expect(browser).toHaveUrl("https://recruitment-staging-queenbee.paradev.io/home")
    });
  });
  