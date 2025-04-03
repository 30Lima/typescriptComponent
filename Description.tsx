import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface TarefaProps {
    descricao: string,
    corTexto?: string;
}

export const Description: React.FC<TarefaProps> = ({ descricao, corTexto = "black" }) => {
    return (
        <View>
            <Text style={{ fontSize: 15, color: corTexto }}>
                {descricao}
            </Text>
        </View>
    )
}

export default Description;