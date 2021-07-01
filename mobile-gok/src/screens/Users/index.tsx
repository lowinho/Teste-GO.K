import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

// api
import { apiRest } from '../../services/apiRest';

// components
import { Background } from '../../components/Background';
import { UserRepository } from '../../components/UserRepository';

// image
import GithubImg from '../../../assets/github.png';

// style
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Users(props: any) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

   useEffect(() => {
    async function loadRepositories() {
      let isRendered = true;
      await apiRest.get(`/users`).then(response => {
        if (isRendered) {
          treatDate(response.data);
          setIsLoading(false);
        }
      }).catch(e => {
        console.log('erro =>', e)
      })
      return () => { isRendered = false }
    }
    loadRepositories();
    
  }, []);

  function treatDate(data: any) {
    let array = [] as any;
    for (let i = 0; i < data.length; i++) { 
      array.push(data[i]);
    };
    setData(array);
  }

  function handleLogin() {
    navigation.navigate('Login', { loginGithub: true });
  } 

  if (isLoading) {
    return <Background><Text>Aguarde, carregando ...</Text></Background>     
  }
  
  return (
  <ScrollView style={styles.container}>
    <View style={styles.boxTop}>
      <Image 
        source={GithubImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <RectButton 
        style={styles.containerButton} 
        onPress={handleLogin}>
        <Text style={styles.titleButton}>
          Adicionar novo
        </Text>
      </RectButton>  
    </View> 

    {data.map((data: any, index) => (
      <View style={styles.list} key={data.id}>
        <UserRepository data={data} 
        />
      </View>
    ))}
  </ScrollView>
  );  
}