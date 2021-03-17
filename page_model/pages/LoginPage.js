import {Selector} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameFields= Selector('input[data-test="username"]')
        this.passwordField = Selector('input[data-test="password"]')
        this.loginButton = Selector('input[id="login-button"]')
        this.logoMessage = Selector('div[class="login_logo"]')
        this.errorMessage = Selector('h3[data-test]')
    }
}
export default new LoginPage()
//testcafe chrome './page_model/test/LoginTest.js'
///Users/liily/Desktop/TestCafe/page_model/test/LoginTest.js