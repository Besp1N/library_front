export class LibraryController {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    async getAllLibraries() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/library/get/all`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching libraries:', error);
            return [];
        }
    }

    async addLibrary(libraryName) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/library/add?name=${libraryName}`, {
                method: 'POST'
            });

            if (response.status !== 201) {
                throw new Error('Failed to add library');
            }

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
