
import { Request, Response } from 'express';
import { isValidateObjectRequest } from '../helpers/validate';
import { loadUsuarios, saveUsuarios } from '../helpers/load-data';

export class UserController {

	// retorna somente status 200 e a mensagem de Api running (api rodando)
  public index(req: Request, res: Response) {
    res.status(200).json({ message: 'Api running....' });
  }

  public list(req: Request, res: Response) {
    const usuarios = loadUsuarios();
    res.status(200).json(usuarios);
}
public create(req: Request, res: Response) {
  let ok = true;
    let mensagem = "Usuario salvo com sucesso!";

    const inputs = [
        {
            name: "nome",
            message: "A propriedade [nome] não deve estar em indefinida/vazio!"
        },
        {
            name: "email",
            message: "A propriedade [email] não deve estar em indefinida/vazio!"
        },
        {
          name: "nome_de_usuario",
          message: "A propriedade [nome de usuario] não deve estar em indefinida/vazio!"
        }
    ];

    const checkValidate = isValidateObjectRequest(req, inputs);

    if (Array.isArray(checkValidate)) {
        ok = false;

        mensagem = checkValidate.join(', ');
    }

    if (ok) {
        saveUsuarios(req.body);
    }

  res.status(201).json({
    success: ok,
    message: mensagem
  }); 
}
public update(req: Request, res: Response) {
  res.status(200).json({ message: 'function update' });
}
public destroy(req: Request, res: Response) {
  res.status(200).json({ message: 'function destroy....' });
}
}

