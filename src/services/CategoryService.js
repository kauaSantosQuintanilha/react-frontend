const API_URL = 'http://localhost:8080/api/categories';
// Sua URL do backendexport 
const getAllCategories = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return await response.json();
};

export const createCategory = async (category) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category),
    });
    if (!response.ok) {
        throw new Error('Failed to create category');
    }
    return await response.json();
};

// Adicione funções para getById, update, delete