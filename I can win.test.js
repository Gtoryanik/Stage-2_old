describe ('I can win', ()=>{
    it ('should work',async ()=>{
        await browser.url ('https://pastebin.com/');
        const paste = 'Hello from WebDriver';
        const pasteInput = $('//textarea[@name="PostForm[text]"]');
        const btn = $('#w0 > div.post-form__bottom > div.post-form__left > div.form-group.form-btn-container > button');
        const pasteName = 'helloweb';
        const pasteNameInput = $('#postform-name');
        const finalPaste = $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.source > ol > li > div')
        const finPasteName = $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.details > div.info-bar > div.info-top > h1')
        await pasteInput.addValue(paste);
        await pasteNameInput.addValue(pasteName);
        await expect(btn).toBeClickable();
        await btn.click ();
        await expect(finalPaste).toHaveText(paste);
        await expect(finPasteName).toHaveText(pasteName);
        await browser.pause(3000);
    });
})
