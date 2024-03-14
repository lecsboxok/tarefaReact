import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { ModalTokens } from '../components/modal';

export function Home() {

    const [qtde, defineQtde] = useState(6)
    const [telaModal, configTelaModal]=useState(false)
    function gerarToken() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text style={ESTILO.caracteres}>
                {qtde} de março
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={1}
                    maximumValue={31}
                    minimumTrackTintColor="#72B1F2"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#8472F2"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))}
                />
            </View>
            <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                <Text style={ESTILO.buttonText}>
                    Gerar Frase
                </Text>
            </TouchableOpacity>
            <Modal visible={telaModal} animationType="fade" transparent={true}>
                <ModalTokens handleClose={()=> configTelaModal(false)} />
            </Modal>
        </View>

    )
};

const ESTILO = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f3f3ff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60,
        width: 250,
        height: 250
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#F2D272",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#000"
    },
    caracteres: {
        fontSize: 30,
        fontWeight: "bold"
    }

})