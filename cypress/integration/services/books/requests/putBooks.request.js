const payloadPutBook = require('../payloads/changeBook.json')

function alterBook(id) {    
    return cy.request({
        method: 'PUT',
        url: `Books/${id}`,
        failOnStatusCode: false,
        headers:{
            'Content-Type': 'application/json',
        },
        body: payloadPutBook
    })
}


export { alterBook  }