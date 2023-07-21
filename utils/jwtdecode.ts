import jwt from 'jsonwebtoken';

export const decodeJwt = (token: string): string | jwt.JwtPayload | null => {
    const decodedData: string | jwt.JwtPayload | null = jwt.decode(token);
    return decodedData;
}