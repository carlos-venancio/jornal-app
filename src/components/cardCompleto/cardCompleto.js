import { View, Text, Image, StyleSheet } from "react-native"

// representa o tipo de formatação deseja: true para normal e false para large
// o padrão é normal
const form = true;

function CardCompleto(props){

    // pega o tipo de formatação desejada na formação do card
    form = props.formatação

    return (
        <View style={styles.card-row-cc}> 
            <View>
                <Image source={props.image} alt={props.title} style={styles.image}/>   
            </View>
            <View style={styles.card-dialog}>
                {/* colocar link */}
                <Text styles={styles.title-cc}>{props.title}</Text>
            </View>
            <View style={styles.card-font}>
                <Text>{props.font}</Text>
                <Text>{new Date(props.date).toLocaleDateString()}</Text>
            </View>
        </View>
    )
}

// estilo normal - aninhados em linha
const stylesNormal = StyleSheet.create({

})

// estilo large - aninhados em coluna
const stylesLarge = StyleSheet.create({
    
})

// caso 
const styles = form ? stylesNormal : stylesLarge

export default CardCompleto