import { Request, Response, NextFunction} from 'express';

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
    //Verificar se o usuário é administrador
    const admin = true;

    if(admin){
        return next(); //Continua o fluxo
    }

    return response.status(401).json({ //Status 401 - Unauthorized
        error: "Unauthorized access!",
    });



}