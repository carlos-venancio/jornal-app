import { useState, useEffect, useContext } from 'react'
import { View, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import api from '../../services/index'
import CardGrande from '../../components/cardGrande/cardGrande'
import CardCompleto from '../../components/cardCompleto/cardCompleto'
import Artigos from '../../artigosContext'

// renderiza duas categorias consultadas juntas
function Home({ navigation }){

    // guarda os artigos em um contexto global
    const [artigos,setArtigos] = useContext(Artigos)
    const [loading,setLoading] = useState(true)
    
    async function consultarArtigos(categoria){

        console.log(artigos)

        // evita que o site faça consultas repetidas
        if (artigos.length === 0){
            // consulta dois artigos
            const resposta = await api.get(`api/1/news?apikey=pub_291299d118ab7284974c4d4015ef2dcea8f92&country=br&image=1&full_content=1&category=${categoria}`)
            // incrementa ao conteudo já existente    
            // setArtigos([...artigos,resposta.data.results])
            setArtigos(resposta.data.results)
        }

        setLoading(false)
    } 


    useEffect(() => {
        consultarArtigos('business,politics') 
    },[loading])
    

    // espera terminar a consulta dos dados
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
        item.category.some((categoria) => categoria === "business")
    })

    return (
        <View style={styles.container}>
            
            <CardGrande data={artigos[0]}/>
            <Text style={styles.title}> Politica: {politics.length} </Text>
            {/* renderiza os artigos de determinada categoria  */}
            
                <FlatList data={artigos}
                        renderItem={({item}) => ( 
                                <CardCompleto data={item} nav={() => navigation.navigate('Artigo',{
                                        id: String.toString(item.article_id)
                                    })
                                }/>
                            )}

                        keyExtractor={item => item.article_id}
                    />
            
        </View>
    );
}

// objeto de estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
    },
    active: {
        size: 'large',
        color: '#5297FF'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        color: '#5297FF'
    }
})

export default Home