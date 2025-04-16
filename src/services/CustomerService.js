const API_URL = 'http://localhost:8080/api/customers';
// Sua URL do backendexport 
const getAllCategories = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return await response.json();
};

export const createCustomer = async (customer) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
    });
    if (!response.ok) {
        throw new Error('Failed to create customer');
    }
    return await response.json();
};

// Adicione funções para getById, update, delete