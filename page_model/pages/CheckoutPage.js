import {Selector} from 'testcafe'

class CheckoutPage{
    constructor(){
        this.errorMessage= Selector('h3[data-test="error"]')
        this.firstName= Selector('input[id="first-name"]')
        this.lastName= Selector('input[id="last-name"]')
        this.pastalCode= Selector('input[id="postal-code"]').
        this.continueButton= Selector('.btn_primary')
        this.finishButton= Selector('.btn_action.cart_button') 
    }
}
export default new CheckoutPage()