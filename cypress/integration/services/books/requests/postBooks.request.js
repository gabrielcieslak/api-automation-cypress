const payloadAddBook = require('../payloads/addBook.json')
function addBook(){
    return cy.request({
        method: 'POST',
        url:'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}
function addError(){
    return cy.request({
        method: 'POST',
        url:'Books',
        failOnStatusCode: false,
        body: {
            "id": null,
            "title": "um conto sobre alguma coisa"
        }
    })
}
export { addBook, addError }