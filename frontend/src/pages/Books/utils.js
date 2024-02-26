import api from '../../services/api';

//numero de itens retornados a cada consulta
let limit = 12;

//função que lista os 12 primeiros registros na tela inicial
export async function startData(prop) {
    try {
        const response = await api.get('api/book/v1', {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            params: {
                page: 0,
                limit: limit
            }
        });

        if(response.data.page.totalPages > 1) {
            prop.setNextPage(1);
            prop.setTotalPages(response.data.page.totalPages);
            prop.setBooks(response.data._embedded.bookVOList);
        }
        else if(response.data.page.totalPages === 1) {
            prop.setBooks(response.data._embedded.bookVOList);
        }
    } catch (err) {
        alert('Failed to fetch books, please try again!')
    }
}

//função responsável por listar os 12 primeiros registros de um busca pelo nome do author.
export async function startDataSearch(prop) {
    try {
        const response = await api.get(`/api/book/v1/findBookByAuthor/${prop.author}`, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            params: {
                page: 0,
                limit: limit
            }
        });

        if(response.data.page.totalPages > 0) {
            prop.setNextPage(1);
            prop.setTotalPages(response.data.page.totalPages);
            prop.setBooks(response.data._embedded.bookVOList);
        }
    } catch(err) {
        alert('Failed to fetch books, please try again!')
    }
}

//função responsável por trazer os próximos 12 registros (paginação)
export async function nextPage(prop) {
    try {
        if (prop.nextpage < prop.totalPages && prop.totalPages > 1) {
            
            const response = await api.get('api/book/v1', {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                params: {
                    page: prop.nextpage,
                    limit: limit
                }
            });

            prop.setPage(response.data.page.number);
            prop.setNextPage(prop.nextpage + 1);
            prop.setPreviousPage(prop.nextpage - 1);
            prop.setBooks(response.data._embedded.bookVOList);
        }
    } catch(err) {
        alert('Failed to fetch books, please try again!')
    }
}

//função responsável por trazer os 12 registros anteriores (paginação)
export async function previousPage(prop) {
    try {
        if (prop.previouspage >= 0) {
            
            const response = await api.get('api/book/v1', {
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                params: {
                    page: prop.previouspage,
                    limit: limit
                }
            });

            prop.setPage(response.data.page.number);
            prop.setNextPage(prop.previouspage + 1);
            prop.setPreviousPage(prop.previouspage - 1);
            prop.setBooks(response.data._embedded.bookVOList);
        }
    } catch(err) {
        alert('Failed to fetch books, please try again!')
    }
}

//função executada após a atualização de um registro
export async function updateRefresh(prop) {
    try {
        const response = await api.get('api/book/v1', {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            params: {
                page: prop.page,
                limit: limit
            }
        });

        prop.setTotalPages(response.data.page.totalPages);
        prop.setBooks(response.data._embedded.bookVOList);
    } catch(err) {
        alert('Failed to fetch books, please try again!')
    }
}

//função reponsável por remover 1 registro
export async function deleteBooks(prop) {
    try {
        if (window.confirm('Do you want to remove this record?')) {
            await api.delete(`api/book/v1/${prop.book.id}`,  {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            });

            startData(prop);
        }
    } catch(err) {
        alert('Delete failed! Try again.');
    }
}