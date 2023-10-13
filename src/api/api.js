export const getCep = async (cep) => {
    try {
        let url = "https://brasilapi.com.br/api/cep/v1/";
        const response = await fetch(url + cep)
        return response.json();
    } catch (error) {
        console.log(error)
    }
}