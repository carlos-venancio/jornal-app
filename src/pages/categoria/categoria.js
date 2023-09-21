import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
import CardCompleto from "../../components/cardCompleto/cardCompleto";

function Categoria(){

    // passar {dados,consultar} como parametro de rota 
    const [artigos,setArtigos] = useState(dados)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        // caso a categoria ainda não tiver sido consulta
        if (artigos.length === 0){
            // executa a função consultar para buscar os dados
        }
    })

    if (loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator style={styles.active}/>
            </View>
        )
    }

    return (
        <View>

        </View>
    )

}

const styles = StyleSheet.create({

})

export default Categoria