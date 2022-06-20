import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { MyButton } from '../components/MyButtons';
import { styles } from './styles';

export function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Essa tela só pode ser vista por usuários autenticados
                </Text>
            </View>
            <MyButton 
            title='Ir para Configurações'
            onPress={() =>navigation.navigate('Settings')}
            />
            <View>
                <Text>
                    by <Text style={styles.coffText}>CoffeePub</Text>
                </Text>
            </View>
        </View>
    )
}