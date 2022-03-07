import * as getBooks from '../requests/getBooks.request';
import * as postBooks from '../requests/postBooks.request'
import * as putBooks from '../requests/putBooks.request'

describe('PUT books',()=>{
    it('Alterar livro existente',()=>{
        getBooks.allBooks().then((resAllBooks)=>{
            putBooks.alterBook(resAllBooks.body[0].id).should((respAlterBooks)=>{
                expect(respAlterBooks.status).to.eq(200)
                expect(respAlterBooks.body.title).to.eq('um conto sobre alguma coisa que não é tão coisa')
            })
        })
    })
    it('Criar e alterar um livro',()=>{
        postBooks.addBook().then((resAddBook)=>{
            putBooks.alterBook(resAddBook.body.id).should((respAlterBooks)=>{
                expect(respAlterBooks.status).to.eq(200)
                expect(respAlterBooks.body.title).to.eq('um conto sobre alguma coisa que não é tão coisa')
            })
        })

    })
    it('Alterar livro de id null',()=>{
        putBooks.alterBook(null).should((respAlterBooks)=>{
            expect(respAlterBooks.status).to.eq(400)
            
        })

    })
})