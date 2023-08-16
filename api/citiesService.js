import axios  from "axios";

const citiesRequest = axios.create({
    baseURL: "http://localhost:3000/api/cities"
})

export const getCities = async () => {
    try {
        const response = await citiesRequest.get('/');
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getCityById = async (id) => {
    try {
        const response = await citiesRequest.get(`/${id}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const updateCity = async (id, data) => {
    try {
        await citiesRequest.put(`/${id}`, data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteCity = async (id) => {
    try {
        await citiesRequest.delete(`/${id}`);
    } catch (error) {
        console.log(error);
    }
}