/// <reference types="cypress"/>

function allBooks() {    
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false //evitar falso negativo quando status code !=200
    })
}
function idBooks(id){
    return cy.request({
        method: 'GET',
        url: `Books/${id}`,
        failOnStatusCode: false 
    })
}

export { allBooks, idBooks };