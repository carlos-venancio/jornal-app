import { StatusBar } from "expo-status-bar";
import { View, Image, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";

function Header(){

    const [ modal, setModal ] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.menu}>

                <View>
                    <TouchableOpacity  onProgress={() => {
                        setModal(true)
                        console.log(modal)
                        }}>
                    
                        <Image  source={require('../../assets/abrir_menu.png')}
                                alt="abrir menu"
                                style={styles.image}
                            />

                    </TouchableOpacity>
                </View>

                <Image  source={require('../../assets/logo.png')}
                        alt="abrir menu"
                        style={styles.logo}
                    />

                <Image  source={require('../../assets/lupa.png')}
                        alt="abrir menu"
                        style={styles.image}
                    />

                <Modal visible={modal} animationType='slide' style={styles.sideBarContainer}>
                    <View style={styles.sideBarContainer}>
                        <Text> Funcionou </Text>
                    </View>
                </Modal>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5297FF'
    },
    menu: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    image: {
        width: 25,
        height: 25
    },
    logo: {
        width: 40,
        height: 40
    },
    sideBarContainer: {
        width: '60%',
        backgroundColor: 'yellow',
    }
})

export default Header
