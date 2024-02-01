import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'X-RapidAPI-Key': '5c00cf8edamshdbbe0336cc70f36p15310ajsn2938f5df1288',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            }
        });
        return data;
    } catch (error) {
        // Handle errors here
        console.error('Error in fetchApi:', error);
        throw error; // Rethrow the error if needed
    }
};
