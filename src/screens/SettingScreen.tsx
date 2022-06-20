import React from 'react';
import { Text, View } from 'react-native';
import { MyButton } from '../components/MyButtons';
import { useAuth } from '../contexts/Auth';

import { styles } from './styles';

export function SettingScreen() {
    const { signOut } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
            <MyButton
                onPress={signOut}
                style={{ backgroundColor: 'red' }}
                title='Sair do App' />
        </View>
    );
}