
import { waitFor } from "wd/lib/commands";
import CartPage from "../pages/cartPage";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/mainPage";


describe ("cart", () => {
    beforeEach(() => {
        loginPage.loggedIn() 
    })

  const mainPage = new MainPage()
  const loginPage = new LoginPage()
  const cartPage = new CartPage()

  it ("cart is empty", function() {

    mainPage.cart().click()
    cy.contains('Your cart is empty')
   
  })

  it ("add 1 ittem with goShoppingBtn to the cart and remove this item", function() {


    mainPage.cart().click()

    cartPage.goShoppingBtn()
    .click()

    cy.wait(5000)
    cy.contains('Filters')

    cy.get('a[class="flex h-full w-full flex-col items-center justify-start text-gray-700"]')
    .first()
    .click({force: true})

    cy.get('button[id="e2e-add-to-cart"]')
    .click({force: true})

    cy.contains('1 items')
    .should('be.visible')

    cartPage.itemCounter()
    .click()

    cy.get('span[class="mr-4 cursor-pointer pl-3 text-right text-xs text-gray-700 underline underline-offset-2 hover:text-blue-500 md:block lg:pl-0"]')
    .click()

    cartPage.goShoppingBtn()
    .should('be.visible')

   
  })

  it ("add 1 additional simular item to already added item", function() {


    mainPage.cart().click()

    cartPage.goShoppingBtn()
    .click()

    cy.wait(5000)
    cy.contains('Filters')

    cy.get('a[class="flex h-full w-full flex-col items-center justify-start text-gray-700"]')
    .first()
    .click({force: true})

    cy.get('button[id="e2e-add-to-cart"]')
    .click({force: true})

    cy.contains('1 items')
    .should('be.visible')

    cartPage.itemCounter()
    .click()

    cy.get('img[alt="plusBlack"]')
    .click()

    cy.contains('2 items')
    .should('be.visible')

   
  })


});