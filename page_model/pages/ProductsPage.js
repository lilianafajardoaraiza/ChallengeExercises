import {Selector} from 'testcafe'

class ProductsPage{
    constructor(){
        this.pageTitle= Selector('div[class="product_label"]')
        this.menuButton = Selector('button[id="react-burger-menu-btn"]')
        this.logOutButton  = Selector('#logout_sidebar_link ')
        this.addToCartButtons = Selector('.btn_primary.btn_inventory')

        this.shoppingCartButton = Selector('svg-inline--fa fa-shopping-cart fa-w-18 fa-3x')
    }
}
export default new ProductsPage()