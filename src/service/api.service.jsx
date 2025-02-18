import axios from "axios";

export async function getPosts() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data;
    } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
    }
}
