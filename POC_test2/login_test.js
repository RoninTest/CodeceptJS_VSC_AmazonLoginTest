Feature('login');

Scenario('@testcase1 *invalid* test login username', ({ I }) => {
    I.amOnPage('https://www.amazon.com.tr');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.waitForElement('//input[@id="ap_email"]');
    I.fillField('//input[@id="ap_email"]','loginname');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'Bu e-posta adresiyle bir hesap bulamıyoruz')]");
});


Scenario('@testcase2 *valid* test login username positif test case', ({ I }) => {
    I.amOnPage('https://www.amazon.com.tr');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','alierendasdemir@gmail.com');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.seeElement('//div[@class="a-row a-spacing-base"]');
});

Scenario('@testcase3 *invalid* login-positif test case user/password', ({ I }) => {
    I.amOnPage('https://www.amazon.com.tr');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','alierendasdemir@gmail.com');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.fillField('//input[@id="ap_password"]','1234');  
    I.waitForElement('//input[@id="signInSubmit"]');
    I.click('//input[@id="signInSubmit"]'); 
    I.seeElement("//*[contains(text(),'Şifreniz yanlış')]");
    
});


