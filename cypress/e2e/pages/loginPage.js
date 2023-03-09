class LoginPage{

    emailField(){
        return cy.get('input[placeholder="Email"]')
    }

    passwordField(){
        return cy.get('input[placeholder="Password"]')
    }

    loginBtn(){
        return cy.get('button[class="my-1 w-full p-3 md:py-4 font-bold p-0 h-11 xxs:h-auto text-sm xxs:text-base xxs:p-3 my-1 rounded-md duration-200 ease-in-out hover:opacity-90 disabled:opacity-70 hover:shadow-lg text-white bg-gray-700"]')
    }

    createAcc(){
        return cy.get('a[id="e2e-login-modal-create-account"]')
    }

    recoverPass(){
        return cy.get('a[id="e2e-login-modal-recover-account"]')
    }


    loggedIn(){

        const VALID_EMAIL = 't@gmail.com'
        const VALID_PASS = '123456789'

        cy.visit('https://reebelo.com.au/')

        cy.get("a[href='https://reebelo.com.au']")
        .should('be.visible')
        .click()

        cy.contains('Sign in')
        .click({force: true})

        cy.get("input[placeholder='Email']")
        .should('be.visible')
        .type(VALID_EMAIL)
        
        cy.get("input[placeholder='Password']")
        .should('be.visible')
        .type(VALID_PASS)
        
        cy.get("button[class='my-1 w-full p-3 md:py-4 font-bold p-0 h-11 xxs:h-auto text-sm xxs:text-base xxs:p-3 my-1 rounded-md duration-200 ease-in-out hover:opacity-90 disabled:opacity-70 hover:shadow-lg text-white bg-gray-700']")
        .should('be.visible')
        .click({force: true})

        cy.wait(500)

        cy.get("button[class='lg:hidden decoration-none relative flex w-8 flex-col items-center text-sm sm:w-10  lg:w-12']")
        .should('be.visible')
        

    }

   

}

export default LoginPage