var myStepDefinitionsWrapper = function () {

  this.Given(/^I go to the AirBnb Login Page$/, function () {
    browser.url('https://www.airbnb.co.in/');
      browser.windowHandleMaximize();
      expect(browser.getTitle()).toEqual("Vacation Rentals, Homes, Experiences & Places - Airbnb");
  });
  this.Then(/^I see for search text$/, function () {
    expect(browser.waitForExist('span=Search', 3000)).toBe(true);
  });
};
module.exports = myStepDefinitionsWrapper;
