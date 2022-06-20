import React, { useContext } from 'react'
import { createContext, useState } from "react";
import { Alert } from 'react-native';
import { authService } from "../services/authService";

export interface AuthData {
    token: string;
    email: string;
    name: string;
}
interface AuthContextData {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();

    async function signIn(email: string, password: string): Promise<AuthData> {
        try {
            const auth = await authService.signIn(email, password);
            setAuthData(auth);

            return auth;

        } catch (error) {
            Alert.alert(error.message, 'Usuário e/ou senha inválidos. Tente novamente...')
        }
    }

    async function signOut(): Promise<void> {
        setAuthData(undefined);

        return;
    }

    return (
        <AuthContext.Provider
            value={{
                authData, signIn, signOut
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}