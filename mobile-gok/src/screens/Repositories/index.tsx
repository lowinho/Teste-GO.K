import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons'; 
import UserAvatar from 'react-native-user-avatar';

// api
import { apiRest } from '../../services/apiRest';

// components
import { List } from '../../components/List';
import { Background } from '../../components/Background';

// style
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Repositories(props: any) {
  const {idUser} = props.route.params;
  const {update} = props.route.params;
  const {avatar} = props.route.params;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredName, setFilteredName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isRendered = true;
    async function loadRepositories() {
      
      await apiRest.get(`/starred/${idUser}`).then(response => {
          if (isRendered) {
            treatDate(response.data);
            setIsLoading(false);
          }
        }).catch(e => {
          console.log('erro =>', e)
        })
    }
    loadRepositories();
    return () => { isRendered = false }
    
  }, [update]);


  async function treatDate(data: any) {
    let array = [] as any;
    for (let i = 0; i < data.length; i++) { 
      await array.push(data[i]);
    };
    setData(array);
    setFilteredName(array);
  }

  async function searchFilter(text: string) {
    if (text) {
      const newData = await data.filter((item: any) => {
        const itemData = item.name.toString().toLowerCase() ? 
        item.name.toString().toLowerCase() : ''
        const textData = text.toString().toLowerCase();
        return itemData.indexOf(textData) > -1
      })
      setFilteredName(newData);
      setSearch(text);
    } else {
      setFilteredName(data);
      setSearch(text);
    }
  }

  function handleUsers() {
    navigation.navigate('Users');
  } 

  function handleListTags() {
    navigation.navigate('ListTags', { userId : idUser, avatar: avatar } );
  } 

  if (isLoading) {
    return <Background><Text>Aguarde, carregando ...</Text></Background>     
  }
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxTop}>
          <AntDesign name="arrowleft" 
          size={32} 
          color={theme.colors.primary}
          onPress={handleUsers} 
          style={styles.arrow}/>
        
          <UserAvatar 
          size={32} 
          name="Avatar" 
          src={avatar} 
          style={styles.image}/>
        </View> 

        <View style={styles.input}>
          <View style={styles.glass}>
            <View style={styles.magnifyingGlass}>
              <Entypo name="magnifying-glass" 
              size={24} 
              color={theme.colors.secondaryGray2} /> 
            </View>
          
          <TextInput
            placeholder="Buscar um repositório..."
            placeholderTextColor={theme.colors.secondaryGray2}
            style={styles.containerInput}
            value={search}
            onChangeText={text => { searchFilter(text) }}
          />
          </View>
          <View style={styles.filter}>
            <MaterialIcons name="filter-list" 
            size={24} 
            color={theme.colors.secondaryGray2} 
            onPress={handleListTags}/>
          </View>
        </View>

        {filteredName.map((data: any) => (
          <View style={styles.list} key={data.id}>
            <List data={data} props={props}/>
          </View>
        ))}  
    </View>
  </ScrollView>
  );  
}