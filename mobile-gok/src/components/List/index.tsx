import React, { useEffect, useState } from 'react';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, SimpleLineIcons , MaterialIcons } from '@expo/vector-icons'; 
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// api
import { apiRest } from '../../services/apiRest';

// style
import { styles } from './styles';

// types
type Props =  {
  data: any,
  props: any
}

export function List({ data, props }: Props) {
  const [ tags, setTags ] = useState([])
  const navigation = useNavigation();

  console.log(data)

  useEffect(() => {
    async function loadTags() {
      let isRendered = true;
      await apiRest.get(`/tags/${data.id}`).then(response => {
        if (isRendered) {
          treatDate(response.data);
        }
      }).catch(e => {
        console.log('erro =>', e)
      })
      return () => { isRendered = false }
    }
    loadTags();
    
  }, [props]);

  function treatDate(data: any) {
    let array = [] as any;
    for (let i = 0; i < data.length; i++) { 
      array.push(data[i]);
    };
    setTags(array);
  }

  function handleAddTags() {
    navigation.navigate('AddTags', {idStar: data.star_id, id: data.id, action: 'add'});
  } 

  function handleEditTags() {
    navigation.navigate('AddTags', {idStar: data.star_id, id: data.id, action: 'update'});
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View> 
          <Text style={styles.titleCardTop}>{data.name}</Text>
          </View>

          <AntDesign name="right" 
          size={16} 
          color="black" 
          onPress={handleAddTags}
          />

          <View style={styles.star}>
            <AntDesign name="star" 
            size={16} 
            color="#FFC700"
            onPress={handleAddTags}
            />
          </View>
        </View>

        <View style={styles.cardMiddle1}>
          <View  > 
              <Text style={styles.textCardMiddle1}>{ data.description }</Text>
          </View>
        </View>

        <View style={styles.cardMiddle2}>
          {tags.map((tag: any) => (
            <View style={styles.tags} key={tag.id}> 
                <Text style={styles.textTags}>#{tag.tag}</Text>
            </View>
          ))}

          { tags.length ? <View style={styles.edit}>
            <MaterialIcons name="mode-edit" 
            size={12} 
            color="white" 
            onPress={handleEditTags}/>
          </View> : null}
          
        </View>

        <View style={styles.cardBottom}>
          <View style={styles.info}>
          <SimpleLineIcons name="globe" size={24} color="#E5E5E5" style={styles.icon} />
            <Text style={styles.textCardBottom}>{ data.language }</Text>
          </View>

          <View style={styles.info}>
            <AntDesign name="star" size={24} color="#E5E5E5" style={styles.icon}/>
            <Text style={styles.textCardBottom}>{ data.qtde_stars }</Text>
          </View>
          
          <View style={styles.info}>
          <FontAwesome5 name="user-friends" size={24} color="#E5E5E5" style={styles.icon}/>
            <Text style={styles.textCardBottom}>{ data.repositories }</Text>
          </View>

          <View style={styles.info}>
          <MaterialCommunityIcons name="clock-time-five-outline" size={24} color="#E5E5E5" style={styles.icon}/>
            <Text style={styles.textCardBottom}>{ data.day }</Text>
        </View>
      </View>
    </View>
  </View>
  );
}
