let webdriver = require('selenium-webdriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
const {By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai')
driver.manage().setTimeouts({ implicit: 100000 });

describe('google cloud test', () => {
    it('should open calc page', async () => {
        await driver.get('https://cloud.google.com/');
        const searchButton = await driver.findElement(By.xpath('//div[@class="devsite-searchbox"]'))
        await searchButton.click();
        const searchTextInput = await driver.findElement(By.xpath('//input[@name="q"]'))
        await searchTextInput.sendKeys('Google Cloud Pricing Calculator');
        await searchTextInput.sendKeys(Key.ENTER);

        await driver.wait(until.elementLocated(By.xpath('//a[@class="gs-title"][1]')));
        const calculatorSearchResult = await driver.findElement(By.xpath('//a[@class="gs-title"][1]'))
        await calculatorSearchResult.click();
        await driver.wait(until.elementLocated(By.xpath('/html/body/section/section/main/devsite-content/article/div[2]/article/devsite-iframe/iframe')))
        await driver.switchTo().frame(0);
        await driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div/iframe')));
        await driver.switchTo().frame(0);

        await driver.wait(until.elementLocated(By.xpath('//*[@id="input_86"]')));
        const instances = await driver.findElement(By.xpath('//*[@id="input_86"]'));
        await instances.click();
        await instances.sendKeys(4);

        const seriesList = await driver.findElement(By.xpath('//*[@id="select_value_label_81"]/span[2]'));
        await seriesList.click();
        const seriesNeeded = await driver.findElement(By.xpath('//*[@id="select_option_196"]/div'));
        await seriesNeeded.click();
        const machineTypeList = await driver.findElement(By.xpath('//*[@id="select_value_label_82"]/span[1]/div'))
        await machineTypeList.click();
        const machineTypeNeeded = await driver.findElement(By.xpath('//*[@id="select_option_419"]/div'))
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
        const locationList = await driver.findElement(By.xpath('//*[@id="select_value_label_84"]/span[1]/div'));
        await locationList.click();
        const locationNeeded = await driver.findElement(By.xpath('//*[@id="select_option_222"]/div'));
        await locationNeeded.click();
        const commitedUsageList = await driver.findElement(By.xpath('//*[@id="select_value_label_85"]'));
        await commitedUsageList.click();
        const commitedUsageNeeded = await driver.findElement(By.xpath('//*[@id="select_option_124"]/div'));
        await commitedUsageNeeded.click();

        const addToEstimateButton = await driver.findElement(By.xpath('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[20]/button'));
        await addToEstimateButton.click();

        const extimateCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[1]/div/div[1]/div/span/span')).getText();
        await expect(extimateCheck).to.include('4 x');
        const regionCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[1]/md-list-item[1]/div')).getText();
        await expect(regionCheck).to.include('Frankfurt');
        const totalCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[1]/md-list-item[2]/div')).getText();
        await expect(totalCheck).to.include('2,920 total hours per month');
        const commitedUsageCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list/md-list-item[3]/div')).getText();
        await expect(commitedUsageCheck).to.include('1 Year');
        const inctansesTypeCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list/md-list-item[5]/div[1]')).getText();
        await expect(inctansesTypeCheck).to.include('n1-standard-8')
        const operatingSystemCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[1]/md-list-item[6]/div')).getText();
        await expect(operatingSystemCheck).to.include('Software: Free');
        const GPUCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[2]/md-list-item[7]/div[1]')).getText();
        await expect(GPUCheck).to.include('1 NVIDIA TESLA P100');
        const localSSDCheck = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[2]/md-list-item[8]/div[1]')).getText();
        await expect(localSSDCheck).to.include('2x375 GiB');
        const costPerMonth = await driver.findElement(By.xpath('//*[@id="compute"]/md-list[2]/md-list-item[9]/div/b')).getText();
        await expect(costPerMonth).to.include('4,024.56');

    });
})
