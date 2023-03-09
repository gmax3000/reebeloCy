
import { waitFor } from "wd/lib/commands";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";


describe ("tasks", () => {
    beforeEach(() => {
        cy.visit('https://reebelo.com.au/')

        
    })

  const mainPage = new MainPage()
  const loginPage = new LoginPage()

  it ("log in", function() {

    mainPage.australia()
    .should('be.visible')
    .click()

    // cy.contains('Australian Capital Territory')
    // .should('be.visible')

    cy.contains('Sign in')
    .click({force: true})
  
    const VALID_EMAIL = 't@gmail.com'
    const VALID_PASS = '123456789'

  
    // cy.get("input[placeholder='Email']")
    loginPage.emailField()
    .should('be.visible')
    .type(VALID_EMAIL)
    
    loginPage.passwordField()
    .should('be.visible')
    .type(VALID_PASS)
    

    loginPage.loginBtn()
    .click( {force: true})
    
    cy.wait(500)

    mainPage.account()
    .invoke('show')
    .should('be.visible')
 
 
  })

 
 

});