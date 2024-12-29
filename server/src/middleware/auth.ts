import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// uitls
import { verifyToken } from 'src/utils/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        // Extract the token
        const token = authHeader.split(' ')[1];

        const userPlayload = verifyToken(token);
        req['userPlayload'] = userPlayload;
        next();

    }
}