const API_URL = 'http://localhost:5273/api/Usuario';

export async function buscarUsuarios() {
    try {
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
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const usuario = await response.json();
        console.log(usuario); //Mostrando os dados do usuário no console
    } catch (error) {
        console.error('Erro:', error);
    }
}

export async function criarUsuario(novoUsuario) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoUsuario)
        });
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log('Usuário criado com sucesso', data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

const novoUsuario = {
    Fatos: {
        Nome: 'João Silva',
        Idade: 30,
        Email: 'joao.silva@example.com',
        NomeUsuario: 'joaosilva',
        DataNascimento: '1994-01-01', 
        EstadoCivil: 'Solteiro',
        Telefone: '1234567890',
        Endereco: 'Rua Exemplo, 123',
        Profissao: 'Desenvolvedor',
        Cargo: 'Junior',
        FormacaoAcademica: 'Ciência da Computação'
    },
    Senha: 'suaSenha',
    Codigo: 'seuCodigo',
    Ativo: true,
    Type: true,
    DataCadastro: new Date().toISOString() 
};

// console.log(JSON.stringify(novoUsuario));  está criando os dados normalmente

export async function updateUsuario(id, usuarioAtualizado) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioAtualizado)
        });
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        const data = await response.json();
        console.log('Usuário atualizado com sucesso:', data);
    } catch(error) {
        console.error('Erro:', error);
    }
}

const usuarioAtualizado = {
    Fatos: {
        Nome: 'João Silva',
        Idade: 25,
        Email: 'joao.silva@example.com',
        NomeUsuario: 'joaotestandoupdate',
        DataNascimento: '1994-01-01', 
        EstadoCivil: 'Solteiro',
        Telefone: '1234567890',
        Endereco: 'Rua Exemplo, 123',
        Profissao: 'Desenvolvedor',
        Cargo: 'Junior',
        FormacaoAcademica: 'Ciência da Computação'
    },
    Senha: 'suaSenha',
    Codigo: 'seuCodigo',
    Ativo: true,
    Type: true,
    DataCadastro: new Date().toISOString() 
};

export async function deletarUsuario(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) throw new Error('Erro na requisição: ' + response.statusText);
        console.log('Usuário excluído com sucesso');
    } catch (error) {
        console.log('Erro:', error);
    }
}
