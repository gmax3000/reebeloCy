
import { waitFor } from "wd/lib/commands";
import CartPage from "../pages/cartPage";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";


describe ("tasks", () => {
    beforeEach(() => {
        loginPage.loggedIn() 
    })

  const mainPage = new MainPage()
  const loginPage = new LoginPage()


  it ("log out", function() {

    mainPage.account()
    .click()

    mainPage.logOut()
    .click()

    cy.contains('Sign in')
    .click({force: true})

    loginPage.emailField()
    .should('be.visible')
    


   
  })

 


});