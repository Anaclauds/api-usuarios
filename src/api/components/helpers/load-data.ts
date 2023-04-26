// Arquivo: src/helpers/load-data.ts

import fs from 'fs';

const ARQUIVO = `${__dirname}/../storage/usuarios.json`;

let usuarios = Array();

function loadUsuarios() {

    console.log(ARQUIVO)

    // Verifica se o arquivo existe, caso não exista ele cria
    if (!fs.existsSync(ARQUIVO))
        fs.writeFileSync(ARQUIVO, JSON.stringify([]));

    // Lê o arquivo e adiciona o conteúdo na variável `data`
    const data = fs.readFileSync(ARQUIVO);

    // Converte o conteúdo do arquivo para JSON
    usuarios = JSON.parse(data.toString());

    return usuarios;
}

function saveUsuarios(data: any) {
    id++;
    usuarios.push({id: usuarios.length + 1,
        ...data,situacao: "ativo"
    });

    fs.writeFileSync(ARQUIVO, JSON.stringify(usuarios));

}
export { loadUsuarios, saveUsuarios};