import { NotFoundException } from '@nestjs/common';


// Handle Prisma error when resource not found
export function handleNotFoundError(error: any, resource: string, id: number | string): never {
  if (error.code === 'P2025') {
    throw new NotFoundException(`${resource} with id ${id} not found`);
  }
  throw error;
}