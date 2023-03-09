class CartPage{


    emptyTitle(){
        return cy.get('Your cart is empty')
    }
    
    goShoppingBtn(){
        return cy.get('button[href="/collections/smartphones"]')
    }
    
    checkoutBtn(){
        return cy.get('a[id="e2e-cart-checkout-btn"]')
    }

    continiuToShippingBtn(){
        return cy.get('a[id="continue_button"]')
    }
  
    itemCounter(){
        return cy.get('span[class="ml-auto justify-self-end text-sm"]')
    }
   

}

export default CartPage