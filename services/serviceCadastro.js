const API_URL = 'http://localhost:5273/api/Curiosidade';

export async function buscarCuriosidade() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição:' + response.statusText);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Erro:', error)
    }
}

export async function buscarCuriosidadePorId(Id) {
    try {
        const response = await fetch(`${API_URL}/${Id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Erro:', error)
    }
}


export async function removerCuriosidade(Id) {
    try {
        const response = await fetch(`${API_URL}/${Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log("Curiosidade deletada com sucesso", data);
    } catch (error) {
        console.log('Erro:', error)
    }
}