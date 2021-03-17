/*********************************************************************************************
 *  Chg Date                Name                  Description
 *  ========        ==================    =========================
 * March 15 2021    Liliana Fajardo A       first challenge, front end
 *
 **********************************************************************************************/


import LoginPage from '../pages/LoginPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import {CREDENTIALS} from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import { Selector, ClientFunction } from 'testcafe'
import {Role} from 'testcafe'
import CheckoutPage from '../pages/CheckoutPage'


fixture `first Challenge`
    .page `https://www.saucedemo.com/'`;

const login = Role('https://www.saucedemo.com/', async t => {
 await t
    .typeText(LoginPage.usernameFields, CREDENTIALS.VALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASS)
    .click(LoginPage.loginButton)

     //expected Product page displayed
    .expect(ShoppingCartPage.pageTitle.exists).ok()
});




test('Users can login using valid credentials', async t =>{
    
    await t
    .useRole(login)
})
test('Users can not login using invalid credentials', async t =>{

    await t
        //.click(WelcomePage.loginButton)
        .typeText(LoginPage.usernameFields, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASS)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()
})

test('Logout user', async t =>{
    await t   
    .useRole(login)

    .click(ProductsPage.menuButton)
    .click(ProductsPage.logOutButton)
    await t.expect(LoginPage.logoMessage.exists).ok()
})

test('Valid user can Navigate to the Shopping Cart', async t =>{
    await t   
   .useRole(login)

    .click(ShoppingCartPage.shoppingCartButton)

     //expected ShoppingCart page displayed
    .expect(ShoppingCartPage.pageTitle)
    

})
test('Valid user add a Item to the shopping cart', async t =>{
    await t   
    .useRole(login)
     
    .click(ProductsPage.addToCartButtons)

})

test('Valid user add multiple Items to the shopping cart', async t =>{
    await t   
    .useRole(login)
    .click(ProductsPage.addToCartButtons)

})

test.only('fill users information', async t =>{
    await t   
    .useRole(login)
    .click(ProductsPage.addToCartButtons)

    .click(ProductsPage.shoppingCartButton)

     //expected ShoppingCart page displayed
     .expect(ShoppingCartPage.pageTitle).ok()

     .click(CheckoutPage.firstName)
     .click(CheckoutPage.lastName)
     .click(CheckoutPage.pastalCode)
     .click(CheckoutPage.continueButton)



})
test('complete a purchase', async t =>{
    await t   
    .useRole(login)
    .click(ProductsPage.addToCartButtons)

    .click(ProductsPage.shoppingCartButton)
     //expected ShoppingCart page displayed
     .expect(ShoppingCartPage.pageTitle).ok()

     .click(CheckoutPage.firstName)
     .click(CheckoutPage.lastName)
     .click(CheckoutPage.pastalCode)
     .click(CheckoutPage.continueButton)

     .click(CheckoutPage.finishButton)

})
