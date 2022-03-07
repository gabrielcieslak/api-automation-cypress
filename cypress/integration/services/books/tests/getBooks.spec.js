import * as getBooks from '../requests/getBooks.request';

describe('GET Books', () => {
    it('Listar todos os livros', () => {
        getBooks.allBooks().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null       
        })
    })
    it('Buscar id valido',()=>{
        getBooks.idBooks(1).should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body.id).to.eq(1)   
        })
    })
    it('Buscar id invalido',()=>{
        getBooks.idBooks(555).should((response)=>{
            expect(response.status).to.eq(404)      
        })
    })
})