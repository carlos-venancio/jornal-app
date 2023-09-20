import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";

export default function Categoria({dados}){

    const [artigos,setArtigos] = useState(dados)
    const [loading,setLoading] = useState(true)

    useEffect(() => {

    })

   if (loading){
        <View style={styles.container}>
            <ActivityIndicator style={styles.active}/>
        </View>
    }

    return (
        <View>

        </View>
    )

}

const styles = StyleSheet.create({

})