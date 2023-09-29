import { View, Text, Image, StyleSheet } from "react-native";
import Artigos from "../../artigosContext";
import { useContext } from "react";

// informações do artigo
function Artigo({ route, navigation }){

    console.log(id)
    const { id } = route.params
    const data = useContext(Artigos).filter(item => item.article.id === id)


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

export default Artigo