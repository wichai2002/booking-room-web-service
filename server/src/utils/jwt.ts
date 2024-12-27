const jwt = require('jsonwebtoken');

import { UserEntity } from '../user/entities/user.entity'

const JWT_SECRET = process.env.JWT_SECRET ?? "cri3LIQxxkLmil05"

// Function to generate JWT token
export async function generateJwtToken(user: UserEntity){
    const playload = {
        id: user.id,
        username: user.username,
        isStaff: user.isStaff,
        isAdmin: user.isAdmin,
        staffCode: user.staffCode ?? null
    };

    // Token expiration time
    return await jwt.sign(playload, JWT_SECRET, {expiresIn: '2h'}); 
}

// Function to verify JWT token
export function verifyToken(token: string){
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null; // If token is invalid or expired, return null
    }
  };

