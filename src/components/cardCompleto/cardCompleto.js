import { View, Text, Image, StyleSheet } from "react-native"
import { Button } from "react-native-web"

function CardCompleto({ data, nav }){

    // estrutura do cardCommpleto: imagem, do lado um texto e embaixo desse texto a fonte e data
    return (
        <View style={styles.container}> 

            <View style={styles.side}>
                <Image  source={{uri: data.image_url}} 
                        alt={data.title} 
                        style={styles.image}/>   
            </View>

            <View style={styles.side}>
                {/* colocar link */}
                <Button title={data.title} styles={styles.title} onPress={nav} />

                <View style={styles.card_font}>
                    <Text>{data.source_id}</Text>
                    <Text>{new Date(data.pubDate).toLocaleDateString()}</Text>
                </View>
            </View>

        </View>
    )
}


// estilo 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    side: {
        flex: 1
    },
    card_font: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    image: {
        width: 150,
        height: 150  
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        overflow: 'hidden',
    }

})

export default CardCompleto