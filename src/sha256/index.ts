import crypto from 'crypto';

export const computeHash = (data: string) => {
  return crypto.createHash('sha256').update(data).digest('hex');
}