const API_URL = 'http://localhost:5273/api/Usuario';

export async function buscarUsuarios() {
    try {
        console.log(API_URL);
        const response = await fetch(API_URL, {
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
        console.error('Erro:', error);
    }
}

export async function buscarUsuarioById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const usuario = await response.json();
        console.log(usuario); //Mostrando os dados do usuário no console
        return usuario;
    } catch (error) {
        console.error('Erro:', error);
    }
}

export async function buscarUsuarioByEmail(email) {
    console.log(`${API_URL}/email/${email}`);
    try {
        const response = await fetch(`${API_URL}/email/${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const usuario = await response.json();
        console.log(usuario); 
        return usuario;
    } catch (error) {
        console.error('Erro:', error);
    }
}

export async function filtrarBusca(status, tipo, codigo, periodo) {
    const params = new URLSearchParams();
    if (status != null && status != undefined) {
        params.append('status', status);
    }
    if (tipo != null && tipo != undefined) {
        params.append('tipo', tipo);
    }
    if (codigo) {
        params.append('codigo', codigo);
    }
    if (periodo) {
        params.append('periodo', periodo);
    }

    const url = `${API_URL}/filtros?${params.toString()}`;
    console.log(url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const usuario = await response.json();
        console.log(usuario);
        return usuario;
    } catch (error) {
        console.error('Erro:', error);
    }
}

export async function criarUsuario(novoUsuario) {
    console.log(JSON.stringify(novoUsuario));
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUsuario)
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log('Usuário criado com sucesso', data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

// console.log(JSON.stringify(novoUsuario));  está criando os dados normalmente

export async function updateUsuario(id, usuarioAtualizado) {
    console.log(usuarioAtualizado);
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        console.log('Usuário atualizado com sucesso:');
    } catch (error) {
        console.error('Erro:', error);
    }
}

export async function deletarUsuario(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        console.log('Usuário excluído com sucesso');
    } catch (error) {
        console.log('Erro:', error);
    }
}
