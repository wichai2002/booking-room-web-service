import { UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../user/entities/user.entity'

const JWT_SECRET = process.env.JWT_SECRET ?? "cri3LIQxxkLmil05";

const jwt = require('jsonwebtoken');

// Function to generate JWT token
export async function generateJwtToken(user: UserEntity) {
  const playload = {
    id: user.id,
    username: user.username,
    isStaff: user.isStaff,
    isAdmin: user.isAdmin,
    staffCode: user.staffCode ?? null
  };

  // Token expiration time
  return await jwt.sign(playload, JWT_SECRET, { expiresIn: '2h' });
}

// Function to verify JWT token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {

    if (error.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token expired');
    }
    else if (error.name === 'JsonWebTokenError') {
      throw new UnauthorizedException('Invalid token');
    } else {
      throw new UnauthorizedException('Authentication failed');
    }

  }
};

