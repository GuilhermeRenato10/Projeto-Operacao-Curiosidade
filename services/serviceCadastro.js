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
    console.log(`${API_URL}/${Id}`);
    try {
        const response = await fetch(`${API_URL}/${Id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('Erro:', error)
    }
}

export async function adicionarCuriosidade(usuarioId, curiosidadeDados) {
    console.log(`${API_URL}/${usuarioId}`);
    try {
        const response = await fetch(`${API_URL}?usuarioId=${usuarioId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(curiosidadeDados) // envia os dados da curiosidade como JSON
        });
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        const data = await response.json();
        console.log("Curiosidade cadastrada com sucesso!", data);
        return data;
    } catch (error) {
        console.error('Erro ao adicionar curiosidade:', error);
    }
}

const curiosidadeDados = {
    Interesses: [
        { Value: "Comprar um rancho" }
    ],
    Sentimentos: [
        { Value: "Persistencia" }
    ],
    Valores: [
        { Value: "Lealdade" }
    ]
}

export async function removerCuriosidade(Id) {
    try {
        const response = await fetch(`${API_URL}/${Id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log("Curiosidade deletada com sucesso", data);
    } catch (error) {
        console.log('Erro:', error)
    }
}

export async function removerInteresse(Id, tipo, itemId) {
    try {
        const response = await fetch(`${API_URL}/${Id}/remove?tipo=${tipo}&itemId=${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log("Curiosidade deletada com sucesso", data);
        return data;
    } catch (error) {
        console.log('Erro:', error)
    }
}

export async function removerSentimento(Id, tipo, itemId) {
    try {
        const response = await fetch(`${API_URL}/${Id}/remove?tipo=${tipo}&itemId=${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log("Curiosidade deletada com sucesso", data);
        return data;
    } catch (error) {
        console.log('Erro:', error)
    }
}

export async function removerValor(Id, tipo, itemId) {
    try {
        const response = await fetch(`${API_URL}/${Id}/remove?tipo=${tipo}&itemId=${itemId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log("Curiosidade deletada com sucesso", data);
        return data;
    } catch (error) {
        console.log('Erro:', error)
    }
}