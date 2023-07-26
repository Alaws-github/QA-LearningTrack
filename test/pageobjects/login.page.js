

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#i0116');
    }

    get inputPassword () {
        return $('#i0118');
    }
    get btnSubmit () {
     
        return $('input[type="submit"]');
    }

    get selectVerificationCOde () {
        return $('.row:nth-child(1) .text-left > div');
    }

    get inputOTP () {
        return $('#idTxtBx_SAOTCC_OTC');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
        await browser.pause(3000)
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(3000)
        await this.selectVerificationCOde.click();
        await browser.pause(15000)
        
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
