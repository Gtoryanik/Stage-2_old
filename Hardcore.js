let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
const {By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');
driver.manage().setTimeouts({ implicit: 100000 });

describe('google cloud test', () => {
    it('should open calc page, fill in the fields, send result on email and check the result', async () => {
        await driver.get('https://cloud.google.com/');
        const searchButton = await driver.findElement(By.xpath('//div[@class="devsite-searchbox"]'));
        await searchButton.click();
        const searchTextInput = await driver.findElement(By.xpath('//input[@name="q"]'));
        await searchTextInput.sendKeys('Google Cloud Pricing Calculator');
        await searchTextInput.sendKeys(Key.ENTER);

        await driver.wait(until.elementLocated(By.xpath('//a[@class="gs-title"][1]')));
        const calculatorSearchResult = await driver.findElement(By.xpath('//a[@class="gs-title"][1]'));
        await calculatorSearchResult.click();
        await driver.wait(until.elementLocated(By.xpath('/html/body/section/section/main/devsite-content/article/div[2]/article/devsite-iframe/iframe')));
        await driver.switchTo().frame(0);
        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/iframe')));
        await driver.switchTo().frame(0);

        await driver.wait(until.elementLocated(By.xpath('//*[@id="input_86"]')));
        const instances = await driver.findElement(By.xpath('//*[@id="input_86"]'));
        await instances.click();
        await instances.sendKeys(4);

        const seriesList = await driver.findElement(By.xpath('//md-select[@placeholder="Series"]//md-select-value//span//div'));
        await seriesList.click();
        const seriesNeeded = await driver.findElement(By.xpath('//md-option[@value="n1"]//div[@class="md-text ng-binding"]'));
        await seriesNeeded.click();
        const machineTypeList = await driver.findElement(By.xpath('//md-select[@placeholder="Instance type"]//md-select-value//span//div'));
        await machineTypeList.click();
        const machineTypeNeeded = await driver.findElement(By.xpath('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]'));
        await machineTypeNeeded.click();
        const addGPUButton = await driver.findElement(By.xpath('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[13]/div[1]/md-input-container/md-checkbox/div[2]'));
        await addGPUButton.click();
        const GPUTypeList = await driver.findElement(By.xpath('//*[@id="select_457"]'));
        await GPUTypeList.click();
        const GPUTypeNeeded = await driver.findElement(By.xpath('//*[@id="select_option_462"]/div[1]'));
        await GPUTypeNeeded.click();
        const numberOfGPUList = await driver.findElement(By.xpath('//*[@id="select_value_label_456"]/span[1]'));
        await numberOfGPUList.click();
        const numberOfGPUNeeded = await driver.findElement(By.xpath('//*[@id="select_option_468"]/div'));
        await numberOfGPUNeeded.click();

        const localSSDList = await driver.findElement(By.xpath('//*[@id="select_value_label_413"]'));
        await localSSDList.click();
        const localSSDNeeded = await driver.findElement(By.xpath('//*[@id="select_option_440"]/div'));
        await localSSDNeeded.click();
        const locationList = await driver.findElement(By.xpath('//*[@id="select_value_label_84"]'));
        await locationList.click();
        const locationNeeded = await driver.findElement(By.xpath('//*[@id="select_option_222"]'));
        await locationNeeded.click();
        const commitedUsageList = await driver.findElement(By.xpath('//*[@id="select_value_label_85"]'));
        await commitedUsageList.click();
        const commitedUsageNeeded = await driver.findElement(By.xpath('//*[@id="select_option_124"]/div'));
        await commitedUsageNeeded.click();
        
        await driver.switchTo().newWindow('tab');
        await driver.get('https://yopmail.com/ru/');
        const emailGenerateButton = await driver.findElement(By.xpath('//*[@id="listeliens"]/a[1]/div[2]/b'));
        await emailGenerateButton.click();
        const email = await driver.findElement(By.xpath('//*[@id="egen"]')).getText();
        
        const windows = await driver.getAllWindowHandles();
        await driver.switchTo().window(windows[0]);
        const addToEstimateButton = await driver.findElement(By.xpath('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button'));
        await addToEstimateButton.click();
        const sendEmailButton = await driver.findElement(By.xpath('//*[@id="email_quote"]'));
        await sendEmailButton.click();

        const emailInput = await driver.findElement(By.xpath('//*[@id="input_556"]'));
        await emailInput.sendKeys(email);
        const sendEmailFinalButton = await driver.findElement(By.xpath('//*[@id="dialogContent_562"]/form/md-dialog-actions/button[2]'));
        await sendEmailFinalButton.click();
        
        await driver.switchTo().window(windows[1]);
        const checkMailButton = await driver.findElement(By.xpath('/html/body/div/div[2]/main/div/div[2]/div/div/div[2]/button[2]/span'));
        await checkMailButton.click();
        const totalCost = await driver.findElement(By.xpath('//*[@id="mail"]/div/div/table/tbody/tr[2]/td/table/tbody/tr[3]/td[2]/h3')).getText();
        await expect(totalCost).to.include('5,105.77')
    });
})
