import {Selector} from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.pageTitle= Selector('div[class="product_label"]')
        this.contunueShoppingButton  = Selector('a[class="btn_secondary"]')
        this.checkoutButton  = Selector('a[class="btn_action checkout_button"]')
    }
}
export default new ShoppingCartPage()