import {  View,Text, Link, Image, StyleSheet } from "react-native/types";
import voltar from '../../assets/voltar.png'

function sideBar(){
    return (
        <View>

            <View style={styles.header}>
                <Image source={voltar} alt="Voltar" style={styles.voltar}/>
                <Text style={styles.titulo}> Matérias </Text>
            </View>

            <View style={styles.menu}>

                <Link to='/categorias/negocios'>
                    <Text style={styles.text}> Negócios </Text>
                </Link>

                <Link to='/categorias/politica'>
                    <Text style={styles.text}> Política </Text>
                </Link>

                <Link to='/categorias/esporte'>
                    <Text style={styles.text}> Esporte </Text>
                </Link>

                <Link to='/categorias/tecnologia'>
                    <Text style={styles.text}> Tecnologia </Text>
                </Link>
    
                <Link to='/categorias/entretenimento'>
                    <Text style={styles.text}> Entretenimento </Text>
                </Link>

                <Link to='/categorias/ciencia'>
                    <Text style={styles.text}> Ciência </Text>
                </Link>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        
    },
    titulo: {

    },
    text: {

    },
    voltar: {

    }
})

export default sideBar