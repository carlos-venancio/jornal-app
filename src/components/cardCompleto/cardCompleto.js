import { View, Text, Image, StyleSheet } from "react-native"

// representa o tipo de formatação deseja: true para normal e false para large
// o padrão é normal
const form = true;

function CardCompleto({data}){

    // pega o tipo de formatação desejada na formação do card
    // form = data.formatação === undefined ? true : false

    return (
        <View style={styles.container}> 

            <View>
                <Image  source={{uri: data.image_url}} 
                        alt={data.title} 
                        style={styles.image}/>   
            </View>

            <View >
                <View style={styles.card_dialog}>
                    {/* colocar link */}
                    <Text styles={styles.title}>{data.title}</Text>
                </View>

                <View style={styles.card_font}>
                    <Text>{data.source_id}</Text>
                    <Text>{new Date(data.pubDate).toLocaleDateString()}</Text>
                </View>
            </View>
        </View>
    )
}



// estilo normal - aninhados em linha
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flexDirection: 'row'
    },
    
    card_font: {

    },
    image: {
        width: 100,
        height: 100  
    },
    card_dialog: {
        width: 100,
        overflow: 'hidden',
        backgroundColor: 'red'
    }

})

// estilo large - aninhados em coluna
const stylesLarge = StyleSheet.create({
    
})

// caso 
// const styles = form ? stylesNormal : stylesLarge

export default CardCompleto