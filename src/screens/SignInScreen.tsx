import React, { useState } from 'react';
import { View, Image } from 'react-native';

import imageCoffee from '../assets/coffee.png';
import { MyTextInput } from '../components/MyTextInput';
import { MyButton } from '../components/MyButtons';
import { styles } from './styles';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <Image
                style={{ width: 100, height: 100 }}
                source={imageCoffee}
                resizeMode="contain"
            />
            <MyTextInput
                placeholder='e-mail'
                value={email}
                onChangeText={setEmail}
            />
            <MyTextInput
                placeholder='senha'
                value={password}
                onChangeText={setPassword}
            />
            <MyButton title="Entrar no App" />
        </View>
    )
}