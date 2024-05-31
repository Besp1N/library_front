export class LibraryView {
    constructor(mainContainerId) {
        this.mainContainer = document.getElementById(mainContainerId);
    }

    renderLibraryList(libraries) {
        let libraryComponent = '';
        libraryComponent = `<div class="library-container">`;

        libraries.forEach(library => {
            let libraryHTML = `
                <div class="library">
                
                    <h2>${library.name}</h2>
            `;

            if (library.books && library.books.length > 0) {
                libraryHTML += '<ul class="book-list-ul">';
                library.books.forEach(book => {
                    libraryHTML += `<li class="book-list">${book.title} by ${book.author}</li>`;
                });
                libraryHTML += '</ul>';
            } else {
                libraryHTML += '<p>No books available.</p>';
            }

            libraryHTML += '</div>';
            libraryComponent += libraryHTML;
        });

        libraryComponent += `</div>`;

        this.mainContainer.innerHTML = libraryComponent;
    }
}
