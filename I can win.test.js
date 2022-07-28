describe ('I can win', ()=>{
    it ('should work', async ()=>{
        await browser.url ('https://pastebin.com/');
        const paste = 'Hello from WebDriver';
        const pasteName = 'helloweb';
        const pasteinput = $('#postform-text')
        const pasteNameInput = $('#postform-name')
        const button = $('div.form-group.form-btn-container > button');
        await pasteinput.addValue(paste);
        await pasteNameInput.addValue(pasteName); 

        const arrow = await $('#select2-postform-expiration-container');
        await arrow.isClickable();
        await arrow.click ();
        const list = await $('#select2-postform-expiration-results');
        const option = await list.$$('li')[2];
        await option.isClickable();
        await option.click();
        await button.click();

        const pasteNameResult = $('div.info-top > h1');
        const pasteResult = $('div.source > ol > li > div');
        const pasteExpirationResult = $('div.expire');
        await expect(pasteNameResult).toHaveTextContaining('helloweb');
        await expect(pasteResult).toHaveTextContaining('Hello from WebDriver');
        await expect(pasteExpirationResult).toHaveTextContaining('10 MIN');
        });
})
