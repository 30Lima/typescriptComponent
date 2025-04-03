import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface ImagemProps {
    source: string | number; // Aceita URL (string) ou require()
}

export const Imagem: React.FC<ImagemProps> = ({ source }) => {
    return (
        <View style={styles.container}>

            <Image source={typeof source === "string" ? { uri: source } : source}
                style={styles.image}
                resizeMode="contain" />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default Imagem;
