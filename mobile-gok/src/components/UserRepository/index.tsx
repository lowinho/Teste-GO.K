import React, { useState } from 'react';
import { AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons'; 
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserAvatar from 'react-native-user-avatar';

// api
import { apiRest } from '../../services/apiRest';

// style
import { styles } from './styles';

type Props =  {
  data: any
}

export function UserRepository({data}: Props) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const avatar  = `${data.avatar}.png`;

  function handleRepositories() {
    navigation.navigate('Repositories', {idUser: data.idUser, avatar: avatar} );
  } 

  async function onDeleteUser() {
    setIsLoading(true);
    await apiRest.delete(`/users/${data.idUser}`).then(response => {
      if (response) {
        alert(`Usuário ${data.name} Deletado`);
        navigation.navigate('Login', { loginGithub: true });
        setIsLoading(false);
      }
      }).catch(e => {
        console.log('erro =>', e)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View style={styles.image} > 
            <UserAvatar size={64} name="Avatar" src={avatar} />
          </View>

          <View style={styles.user} > 
            { data.name 
            ? <Text style={styles.name}>{data.name}</Text> 
            : <Text style={styles.name}>Não informado</Text>}

            { data.user 
            ? <Text style={styles.userGit}>{data.user}</Text> 
            : <Text style={styles.userGit}>Não informado</Text>}
          </View>

          {/* <View></View> */}
          <AntDesign name="right" size={24} color="black" onPress={handleRepositories}/>

          <View style={styles.trash}>
            <FontAwesome5 name="trash" size={16} color="black" onPress={onDeleteUser}/>
          </View>
        </View>

        <View style={styles.cardBottom}>
          <View style={styles.info}>
            <MaterialCommunityIcons name="office-building" size={24} color="#E5E5E5" style={styles.icon}/>
            { data.company 
              ? <Text style={styles.textCardBottom}>{data.company}</Text> 
              : <Text style={styles.textCardBottom}>Não informado</Text>}
          </View>

          <View style={styles.info}>
            <FontAwesome name="map-marker" size={24} color="#E5E5E5" style={styles.icon}/>
            { data.location 
              ? <Text style={styles.textCardBottom}>{data.location}</Text> 
              : <Text style={styles.textCardBottom}>Não informado</Text>}
          </View>

          <View style={styles.info}>
            <AntDesign name="star" size={24} color="#E5E5E5" style={styles.icon}/>
            { data.star 
              ? <Text style={styles.textCardBottom}>{data.star}</Text> 
              : <Text style={styles.textCardBottom}>0</Text>}
          </View>
        </View>
    </View>
  </View>
  );
}
