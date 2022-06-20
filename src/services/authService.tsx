import { AuthData } from "../contexts/Auth";

async function signIn(email: string, password: string): Promise<AuthData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === '123456') {
                resolve({
                    token: 'fake-token',
                    email,
                    name: 'Thomas Costa',
                });
            } else {
                reject(new Error('credenciais inválidas'));
            }
        }, 500);
    });
}

export const authService = { signIn };