const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('alawrence@realdecoy.com', 'Andy@8050440')
       // await expect(SecurePage.flashAlert).toBeExisting()
       // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!')
    })
})


