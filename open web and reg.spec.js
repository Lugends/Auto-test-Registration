/// <reference types= "cypress" />

it ( 'should open web site', ()=>{
cy.visit ('https://atha.yoga/');
cy.wait (2000);
cy.get ('[href="/sign-up/').click();
})