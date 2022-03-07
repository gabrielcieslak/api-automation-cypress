import * as postBooks from '../requests/postBooks.request'

describe('POST Books',()=>{
    it('Inserir novo livro',()=>{
        postBooks.addBook().should((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('um conto sobre alguma coisa')
        })
    })
    it('Inserir novo livro com informações incompletas',()=>{
        postBooks.addError().should((response)=>{
            expect(response.status).to.eq(400)
        })
    })
})