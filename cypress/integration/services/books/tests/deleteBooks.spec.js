import * as deleteBooks from '../requests/deleteBooks.request'
import * as postBooks from '../requests/postBooks.request'
import * as getBooks from '../requests/getBooks.request';

describe('DELETE Books',()=>{
    it('Deletar o primeiro livro da lista',()=>{
        getBooks.allBooks().then((resAllBooks) => {
            deleteBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook)=>{
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    })
    it('Criar e deletar livro',()=>{
        postBooks.addBook().then((resAddBook)=>{
            deleteBooks.deleteBook(resAddBook.body.id).should((resDeleteBook)=>{
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    })

})