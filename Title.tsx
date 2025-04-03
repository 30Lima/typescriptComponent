import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface TarefaProps {
    titulo: string,
    corTexto?: string;
}

export const Tarefa: React.FC<TarefaProps> = ({ titulo, corTexto = "black" }) => {
    return (
        <View>
            <Text style={{ fontSize: 15, color: corTexto }}>
                {titulo}
            </Text>
        </View>
    )
}

export default Tarefa