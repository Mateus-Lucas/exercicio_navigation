import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../services/Api';

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    Api.get('/users')
      .then(response => {
        setUsuarios(response.data.users);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error);
      });
  }, []);
  console.log(usuarios)

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => {
          return (
            <View style={{ padding: 7 }}>
              <Text style={{ fontWeight: 'bold', color: '#fff' }}>{item.firstName}</Text>
              <Text>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  }
});
