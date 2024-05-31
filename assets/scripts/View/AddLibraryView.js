export class AddLibraryView {
    constructor(mainContainerId, libraryController) {
        this.mainContainerId = mainContainerId;
        this.mainContainer = document.getElementById(mainContainerId);
        this.libraryController = libraryController; // Przekazanie referencji do libraryController
    }

    renderForm() {
        this.mainContainer.innerHTML = '';

        this.mainContainer.innerHTML = `
            <form id="add-library-form" class="form-container">
                <label for="library-name">Library Name:</label>
                <input type="text" id="library-name" name="library-name">
                <button id="add-library-btn">Add Library</button>
            </form>
        `;

        const addLibraryForm = document.getElementById('add-library-form');
        addLibraryForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const libraryNameInput = document.getElementById('library-name');
            const libraryName = libraryNameInput.value.trim();

            try {
                await this.libraryController.addLibrary(libraryName);

                libraryNameInput.value = '';
                console.log('Library added successfully!');
                alert("Library added successfully");
            } catch (error) {
                console.error('Error adding library:', error);
                alert('Failed to add library. Please try again.');
            }
        });
    }
}
