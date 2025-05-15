const Clicker = require('../pageobjects/clicker');

describe("checkout 1 item at buggy website", () => {
  it("tests checkout", async () => {
    await browser.setWindowSize(1314, 928)
    await browser.url("https://recruitment-staging-queenbee.paradev.io/home")
    await expect(browser).toHaveUrl("https://recruitment-staging-queenbee.paradev.io/home")
    await browser.$("//*[@id=\"add-to-cart-recomendation\"]/p").click()
    await browser.$("//*[@id=\"sticky\"]/div[2]/div[1]/div/div/div[2]/div/div/ul/li[3]/div/div[1]/svg/path[1]").click()
    await browser.$("aria/Beli sekarang").click()
    await browser.$("//*[@id=\"__next\"]/div/div/div[3]/div/div[1]/div[2]/div/div[2]").click()
    await browser.$("//*[@id=\"chakra-modal--body-22\"]/div[2]/label/div/div/p[1]").click()
    await browser.$("//*[@id=\"chakra-modal--body-1\"]/div[1]/label/div/div/div/p[2]").click()
    await browser.$("//*[@id=\"__next\"]/div/div/div[3]/div/div[2]/div/div[1]/div/div/div").click()
    await browser.$("aria/Masukkan kode promo").click()
    await browser.$("aria/Masukkan kode promo").setValue("QRP-TEST-123")
    await browser.$("aria/Cari").click()
    await browser.$("aria/Close button").click()
    await browser.$("aria/Pilih Pembayaran").click()
  });
});

  