const BookList = () => import('./components/book-list')
const BookDetail = () => import('./components/book-detail')

const routes = [
    {
        path: '/books',
        name: 'book-list',
        component: BookList
    },
    {
        path: '/books/:id',
        name: 'book-detail',
        component: BookDetail
    }
]

export default routes