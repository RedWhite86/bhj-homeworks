const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');


for (let item of fontSize) {

    item.addEventListener('click', (event) => {
        event.preventDefault();
        book.querySelector('.font-size_active').classList.remove('font-size_active');
        item.classList.add('font-size_active');

        if (item.classList.contains('font-size_small')) {
            book.className = 'book book_fs-small';
        } else if (item.classList.contains('font-size_big')) {
            book.className = 'book book_fs-big';
        } else {
            book.className = 'book';
        }
    });

};