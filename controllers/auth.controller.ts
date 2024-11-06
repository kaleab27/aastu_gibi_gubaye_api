import  jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'gebigubye-web-api'

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (studentId: string): string => {
    return jwt.sign({ studentId }, JWT_SECRET, { expiresIn: '1h' });
  };

  export const verifyToken = (token: string): any => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return null;
    }
  };