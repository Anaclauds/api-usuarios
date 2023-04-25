// Arquivo: base.controller.ts

import { Request, Response } from 'express';

export class BaseController {

	// retorna somente status 200 e a mensagem de Api running (api rodando)
  public index(req: Request, res: Response) {
    res.status(200).json({ message: 'Api running....' });
  }

  // retorna informações sobre a api
  public info(req: Request, res: Response) {
    res.status(200).json({
      name: 'API REST - Finan360',
      mode: 'development',
      version: '1.0.0',
    });
  }

  //exercicio 1
  public about(req: Request, res: Response) {
    res.status(200).json({
      nome: 'Ana',
      email: 'a.claudia@estudante.ifro.edu.br',
      github: 'https://github.com/Anaclauds',
    });
  }
}