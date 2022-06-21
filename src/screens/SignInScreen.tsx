import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { useAuth } from '../contexts/Auth';

import { MyTextInput } from '../components/MyTextInput';
import { MyButton } from '../components/MyButtons';
import { styles } from './styles';
import logo from '../assets/coffee.png';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <Image
                resizeMode="contain"
                source={logo}
                style={{ width: 100, height: 100 }}
            />
            <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
            <MyTextInput
                placeholder="senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <MyButton onPress={() => signIn(email, password)} title="Entrar no App" />
        </View>
    );
}
