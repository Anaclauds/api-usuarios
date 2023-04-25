// Arquivo: base.routes.ts

import { Router } from 'express';
import { UserController } from './user.controller';

export class UserRoutes {
  private router: Router = Router();

  private readonly controller: UserController;

  constructor() {
    this.controller = new UserController();
    this.init();
  }

  private init(): void {
    this.router.get('/usuarios', this.controller.list);
    this.router.post('/usuarios', this.controller.create);
    this.router.put('/usuarios', this.controller.update);
    this.router.delete('/usuarios', this.controller.destroy);
  }

  public routes(): Router {
    return this.router;
  }
}