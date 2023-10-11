import { StyleSheet, View, FlatList } from 'react-native'
import { Avatar, Card, IconButton, Paragraph } from 'react-native-paper'
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
    <View style={{ backgroundColor: 'gray'}}>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          < Card
            mode='elevated'
            style={styles.card}
          >
            <Card.Title
              title={item.firstName + ' ' + item.lastName}
              titleStyle={{ fontWeight: 'bold' }}
              subtitle={'Usuário: ' + item.username}
              left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
            />
            <Card.Content>
              <Paragraph>{'Telefone: ' + item.phone}</Paragraph>
              <Paragraph>{'Email: ' + item.email}</Paragraph>
              <Paragraph>{'Idade: ' + item.age}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10
  }
});
