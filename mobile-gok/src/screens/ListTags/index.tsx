import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, ScrollView, Text } from 'react-native';
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

export function ListTags(props: any) {
  const {userId} = props.route.params;
  const {avatar} = props.route.params;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [ tags, setTags ] = useState([]);
  const [filteredTags, setFilteredTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isRendered = true;
    async function loadTags() {
      
      await apiRest.get(`/tags`).then(response => {
        if (isRendered) {
          treatDateTags(response.data);
        }
      }).catch(e => {
        console.log('erro =>', e)
      })
    }
    loadTags();


    async function loadRepositories() {
      
      await apiRest.get(`/starred?idUser=${userId}`).then(response => {
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
    
  }, [props]);


  async function treatDate(data: any) {
    let array = [] as any;
    for (let i = 0; i < data.length; i++) { 
      await array.push(data[i]);
    };
    setData(array);
    setFilteredTags(array);
  }

  function treatDateTags(data: any) {
    let array = [] as any;
    for (let i = 0; i < data.length; i++) { 
      array.push(data[i]);
    };
    setTags(array);
  }

  async function searchFilter(text: string) {
    let arrayNew = [] as any;
    if (text != '') {
      const newData: any = await tags.filter((item: any)  => {
        const itemData = item.tag.toString().toLowerCase() ? 
        item.tag.toString().toLowerCase() : ''
        const textData = text.toString().toLowerCase();
        return itemData.indexOf(textData) > -1;
      }) 

      for (let i = 0; i < newData.length; i++) { 
        arrayNew.push(newData[i].star_id);
      }
      setFilteredTags(arrayNew);
      setSearch(text);
    } else {
      setFilteredTags(data);
      setSearch(text);
    }
  }

  function handleRepositories() {
    navigation.navigate('Repositories');
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
          onPress={handleRepositories} 
          style={styles.arrow}
          />
        
        <UserAvatar 
        size={32} 
        name="Avatar" 
        src={avatar} 
        style={styles.image}/>
        </View> 

        <View style={styles.input}>
        <View style={styles.magnifyingGlass}>
            <Entypo name="magnifying-glass" 
            size={24} 
            color={theme.colors.secondaryGray2} /> 
          </View>
          <View style={styles.glass}>
            <View style={styles.filter}>
            <MaterialIcons name="filter-list" 
            size={24} 
            color={theme.colors.secondaryGray2} />
            </View>
          
            <TextInput
            placeholder="Buscar por tag..."
            placeholderTextColor={theme.colors.secondaryGray2}
            style={styles.containerInput}
            value={search}
            onChangeText={text => { searchFilter(text) }}
          />
          </View>
        </View>

        {filteredTags.map((data: any) => (
          <View style={styles.list} key={data.id}>
            <List data={data} props={props}/>
          </View>
        ))} 
    </View>
  </ScrollView>
  );  
}