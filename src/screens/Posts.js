import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../services/Api';

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Api.get('/posts')
            .then(response => {
                setPosts(response.data.posts);
            })
            .catch(error => {
                console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error);
            });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => {
                    return (
                        <View style={{ padding: 7 }}>
                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>{item.title}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'red'
    }
})