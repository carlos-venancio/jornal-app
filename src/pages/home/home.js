import { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import api from '../../services/index'
import CardCompleto from '../../components/cardCompleto/cardCompleto'

// renderiza duas categorias consultadas juntas
function Home(){

    // guarda TODOS os artigos, independente da categoria
    const [artigos,setArtigos] = useState([])
    const [loading,setLoading] = useState(true)
    

    async function consultarArtigos(categoria){
        // evita que o site faça consultas repetidas
        if (artigos.length === 0){
            // consulta dois artigos
            const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1&category=${categoria}`)
            setArtigos(resposta.data.results)
        }

        setLoading(false)
    } 


    useEffect(() => {
        consultarArtigos('business,politics') 
    },[])
    
    if (loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.active}/>
            </View>
        )
    }

    const politics = artigos.filter((item) => {
        item.category.some(categoria => categoria === "politics") 
    })

    const business = artigos.filter((item) => {
        if (item.category.some((categoria) => categoria === "business") === true) return item
    })

    return (
        <View style={styles.container}>

            {/* sessão politica */}
            <Text style={styles.titulo}> Politica: {politics.length} </Text>
            {/* renderiza os artigos de determinada categoria  */}
            
                <FlatList data={artigos}
                        renderItem={({item}) => ( 
                                <CardCompleto data={item} />
                            )}

                        keyExtractor={item => item.article_id}
                    />
            

            {/* sessão negocios
            <Text style={styles.titulo}> Business </Text>
            <FlatList data={business}
                      renderItem={(item) => {
                          <CardCompleto 
                            id={item.article_id}
                            font={item.source_id}
                            title={item.title}
                            image={item.image_url}
                            date={item.pubDate}
                            category={categoria}
                          />
                        }}
                       keyExtractor={item.article_id}
            /> */}
            
        </View>
    );
}

// objeto de estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet',
        padding: 10,
        paddingTop: 100
    },
    active: {
        size: 'large',
        color: '#5297FF'
    },
    titulo: {
        backgroundColor:'blue'
    }
})

export default Home