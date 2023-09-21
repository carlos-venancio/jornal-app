import { View, Text, Image, StyleSheet } from "react-native";

// informações do artigo
function Artigo({data}){

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{data.title}</Text>
            
            <View style={styles.fonts}>
                <Text style={styles.font}>{data.source_id}</Text>
                <Text style={styles.font}>{data.pubDate}</Text>
            </View>

            <Image source={data.image_url} alt={data.title} style={styles.image}/>
            <Text style={styles.desc}>{data.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    fonts: {

    },
    titulo: {

    },
    image: {

    },
    desc: {

    },
    container: {

    },
    font: {
        
    }
})