import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';

// context
import AuthContext from "../../../src/context/auth";

// api
import { apiGit } from '../../services/api';
import { apiRest } from '../../services/apiRest';

// components
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';

// image
import GithubImg from '../../../assets/github.png';

// style
import { styles } from './styles';

export function Login(props?: any) {

  const { signed, user } = useContext(AuthContext);

  // console.log('signed', signed);

  const [data, setData] = useState('');
  const [newLogin, setNewLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    if (props.route.params != undefined) {
      setNewLogin(false)
    }
    setIsLoading(false);
  }, [props]);
 
 
  async function saveUsers(users: any, star: any) {
    let isRendered = true;
    const data = {
      idUser: users.id,
      avatar: users.avatar_url,
      name: users.name,
      user: users.login,
      company: users.company,
      location: users.location,
      star: star.length
    }

    await apiRest.post(`/users`, data)
    .then(response => {
      if (isRendered) {
      }
    }).catch(e => {
      console.log(e)
    });
    return () => { isRendered = false }

  };

  async function saveStarred(star: any, users: any) {
    let isRendered = true;
    for (let i = 0; i < star.length; i++) {
        
      await apiRest.post(`/starred`, {
        user_id: users.id,
        star_id: star[i].id,
        name: star[i].name,
        description: star[i].description,
        url_repo: star[i].html_url,
        language: star[i].language,
        repositories: star[i].stargazers_count,
        qtde_star: star.length,
        dias: 2,
        suggestion_tag: star[i].language
      })
      .then(response => {
        if (isRendered) {
          navigation.navigate('Users');
          setIsLoading(false);
        }
      }).catch(e => {
        console.log(e)
      });
      return () => { isRendered = false }
   }
  }

  async function loadData() {
    try {
      setIsLoading(true);
      const response = await apiGit.get(`/users/${data}`);
      await response.data;
      const res = response.data;

      const starred = await apiGit.get(`/users/${data}/starred`);
      await starred.data;
      const star = starred.data;

      saveUsers(res, star);
      saveStarred(star, res);

    } catch (err) {
        console.warn('Erro');
  }
  }

  function handleUsers() {
    navigation.navigate('Users');
  } 

  if (isLoading) {
    return <Background><Text>Aguarde, carregando ...</Text></Background>     
  }

  return (
    <Background>
      { newLogin
      ? null
      : <View style={styles.arrow}>
          <AntDesign name="arrowleft" size={30} color="black" onPress={handleUsers}/>
        </View> }
      
      <View style={styles.imageView} >
      <Image 
          source={GithubImg} 
          style={styles.image} 
          resizeMode="stretch"
        />
      </View> 

      <Text style={styles.largeText}>Buscar usuário</Text>

      { newLogin
      ? <Text style={styles.smallText}>Crie sua conta através do seu usuário do GitHub</Text>
      : <Text style={styles.smallText}>Adicione seus novos usuários do GitHub</Text> }

        <View style={styles.input}>
          <View style={styles.userCircle}>
            <FontAwesome name="user-circle" 
              size={24} 
              color="#E5E5E5" />
            </View>
            
            <View style={styles.containerInput}>
              <TextInput
                placeholder="@username"
                placeholderTextColor='#7E7E7E'
                value={data}
                onChangeText={setData}
              />
          </View>
        </View>

      <View>
        <Button title={'Cadastrar'} onPress={loadData}/>
      </View>

      <View style={styles.termsText}>
        <Text >Termos de política e privacidade</Text>
      </View>
    </Background>
  );  
// }

 
}