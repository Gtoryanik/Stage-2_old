const paste = 'git config --global user.name  \"New Sheriff in Town\"\ngit reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")\ngit push origin master --force';
const pasteInput = $('#postform-text');
const pasteName = 'how to gain dominance among developer';
const pasteNameInput = $('#postform-name');
const arrowSyntax = $('#select2-postform-format-container');
const syntaxList = await $('#select2-postform-format-results');
const syntaxOption = await syntaxList.$$('li')[2];
const arrowExpiration = await $('#select2-postform-expiration-container');
const expirationList = await $('#select2-postform-expiration-results');
const ExpirationOption = await expirationList.$$('li')[2];
const createBtn = $('div.form-group.form-btn-container > button');
const pasteNameRes = $('div.info-top > h1');
const pasteRes = $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.source');
const syntaxRes = $('body > div.wrap > div.container > div.content > div.post-view.js-post-view > div.highlighted-code > div.top-buttons > div.left > a');

describe ('Bring It On', ()=>{
    it ('should work', async ()=>{
        
        await browser.url ('https://pastebin.com/');
        await pasteInput.addValue(paste);
        await pasteNameInput.addValue(pasteName);

        await arrowSyntax.isClickable();
        await arrowSyntax.click();
        await syntaxOption.click();
    
        await arrowExpiration.click ();        
        await ExpirationOption.click();        
        await createBtn.click();
        await expect(pasteNameRes).toHaveTextContaining(pasteName);
        await expect(pasteRes).toHaveTextContaining(paste);
        await expect(syntaxRes).toHaveTextContaining('Bash');

        await browser.pause(3000);
    });
})
