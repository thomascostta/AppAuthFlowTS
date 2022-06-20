import React from 'react';
import { Text, View } from 'react-native';
import { MyButton } from '../components/MyButtons';

import { styles } from './styles';

export function SettingScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
            <MyButton style={{ backgroundColor: 'red' }} title='Sair do App' />
        </View>
    );
}