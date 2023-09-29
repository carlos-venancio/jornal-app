import { View, Text, Image, StyleSheet } from "react-native"

function cardGrande({data}){
    return (
        <View style={styles.container}> 
     
            <Image  source={{uri: data.image_url}} 
                    alt={data.title} 
                    style={styles.image}/>   
      
            <Text styles={styles.title}>{data.title}</Text>

            <View style={styles.card_font}>
                <Text>{data.source_id}</Text>
                <Text>{new Date(data.pubDate).toLocaleDateString()}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        width: '100%'
    },
    card_font: {

    }
})

export default cardGrande