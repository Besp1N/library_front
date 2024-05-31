import { LibraryController } from './Controller/LibraryController.js';
import { LibraryView } from './View/LibraryView.js';
import { AddLibraryView } from "./View/AddLibraryView.js";

class App {
    constructor(libraryController, libraryView, addLibraryView) {
        this.libraryController = libraryController;
        this.libraryView = libraryView;
        this.addLibraryView = addLibraryView;
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const showAllLibrariesLink = document.querySelector('.links a:nth-child(1)');
            showAllLibrariesLink.addEventListener('click', async (event) => {
                event.preventDefault();
                try {
                    const libraries = await this.libraryController.getAllLibraries();
                    this.libraryView.renderLibraryList(libraries);
                } catch (error) {
                    console.error('Error rendering libraries:', error);
                }
            });

            const addLibraryLink = document.querySelector('.links a:nth-child(2)');
            addLibraryLink.addEventListener('click', () => {
                this.addLibraryView.renderForm();
            });
        });
    }
}

const apiBaseUrl = 'http://127.0.0.1:8000';
const libraryController = new LibraryController(apiBaseUrl);
const libraryView = new LibraryView('main');
const addLibraryView = new AddLibraryView('main', libraryController);
const app = new App(libraryController, libraryView, addLibraryView);

app.init();
