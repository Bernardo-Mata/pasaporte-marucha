import jwt, {SignOptions} from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

export const generateToken = (
    payload: object,
    expiresIn: SignOptions['expiresIn'] = '1d'): string => {
  return jwt.sign(payload, SECRET, { expiresIn });
};

export const verifyToken = <T>(token: string): T => {
  return jwt.verify(token, SECRET) as T;
};