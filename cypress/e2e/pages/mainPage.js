class MainPage{


    signIn(){
        return cy.get('Sign in')
    }
    
    account(){
        return cy.get('button[class="lg:hidden decoration-none relative flex w-8 flex-col items-center text-sm sm:w-10  lg:w-12"]')
    }

    cart(){
        return cy.get('a[id="e2e-header-cart"]')
    }

    sellDevice(){
        return cy.get('button[class="btn btn-xs btn-danger"]')
    }

    logOut(){
        return cy.get('button[id="e2e-account-logout"]')
    }

    australia(){
        return cy.get('a[href="https://reebelo.com.au"]')
    }

    closeBtn(){

        return cy.get('button[class="button"]')
    }

    cartCounterBage(){

        return cy.get('span[id="access-bar-count"]')
    }
   

}

export default MainPage