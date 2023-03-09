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

    removeItemBtn(){
        return cy.get('span[class="mr-4 cursor-pointer pl-3 text-right text-xs text-gray-700 underline underline-offset-2 hover:text-blue-500 md:block lg:pl-0"]')
    }
   
    plusBtn(){
        return cy.get('img[alt="plusBlack"]')
    }

    minusBtn(){
        return cy.get('img[alt="minus"]')
    }


    

}

export default CartPage