import * as bcrypt from 'bcryptjs';

// Function to hash password
export async function hashPassword(password: string){
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to compare password with hashed password
export async function comparePassword(password: string, hashedPassword: string){
  return bcrypt.compare(password, hashedPassword);
};

