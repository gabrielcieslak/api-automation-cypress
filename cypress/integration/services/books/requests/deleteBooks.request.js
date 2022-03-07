function deleteBook(id){
    return cy.request({
        method: 'DELETE',
        url: `Books/${id}`,
        failOnStatusCode: false
    })
}

export {deleteBook}