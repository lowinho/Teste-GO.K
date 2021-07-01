import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons'; 

// api
import { apiRest } from '../../services/apiRest';

// components
import { WhiteButton } from '../../components/WhiteButton';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

// style
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function AddTags(props: any) {
  const {idStar} = props.route.params;
  const {id} = props.route.params;
  const {action} = props.route.params;

  const [dataInput, setInputData] = useState('');
  const [tags, setTags] = useState([]);
  const [updateTag, setUpdateTag] = useState([]);
  const [reload, setReload] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    
    async function loadTags() {
      let isRendered = true;
      await apiRest.get(`/suggestion`).then(response => {
        if (isRendered) {
          treatDate(response.data, 'suggestion');
          setIsLoading(false);
        }
      }).catch(e => {
        console.log('erro =>', e)
      })
      return () => { isRendered = false }
    }
    loadTags();

    if (action == 'update') {
      let isRendered = true;
      async function loadEditTags() {
        await apiRest.get(`/tags/${id}`).then(response => {
          if (isRendered) {
            treatDate(response.data, 'update');
            setIsLoading(false);
          }
        }).catch(e => {
          console.log('erro =>', e)
        })
        return () => { isRendered = false }
      }
      loadEditTags();
      return () => { isRendered = false }
    }
    
  }, [reload]);

   
  function treatDate(data: any, actionFunction: string) {
    let array = [] as any;
    if (actionFunction == 'suggestion') {
      for (let i = 0; i < data.length; i++) { 
        array.push(data[i]);
      };
      setTags(array);

    } else {
      if (action == 'update') {
        for (let i = 0; i < data.length; i++) { 
          array.push(data[i]);
        };
        setUpdateTag(array);
      }
    }
  }

  async function addTags(data?: any) {
    if (!data && dataInput == '') {
      navigation.navigate('ListTags', { update: 'update'});
      return;
    } 
    await apiRest.post(`/tags`, {
      tag: data ? data.tag : dataInput,
      idStar: idStar,
      star_id: id,
      id_starred: idStar
    })
    .then(response => {
      if (response) {
        navigation.navigate('Repositories', {update: 'update'});
      }
    }).catch(e => {
      console.log(e)
    });
    return
  }

  async function deleteTags(data?: any) {
    await apiRest.delete(`/tags/${data.id}`)
    .then(response => {
      if (response) {
        setReload('reload');
      }
    }).catch(e => {
      console.log(e)
    });
    return
  }
  
  function handleRepositories() {
    navigation.navigate('Repositories');
  }

  if (isLoading) {
    return <Background><Text>Aguarde, carregando ...</Text></Background>     
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.align}>
          <Text style={styles.title}>Adicionar Tags</Text>
          <View style={styles.input}>
            <View style={styles.glass}>
              <View style={styles.magnifyingGlass}>
                <Entypo name="magnifying-glass" size={24} color={theme.colors.secondaryGray2} /> 
              </View>
            
            <TextInput
              placeholder="Digite..."
              placeholderTextColor={theme.colors.secondaryGray2}
              style={styles.containerInput}
              value={dataInput}
              onChangeText={setInputData}
            />
            </View>
          </View>

          <View style={styles.tagsAdd}>
          {updateTag.map((data: any, index) => (
              <View style={styles.tags} key={data.id}>
                <Text style={styles.titleTags}>{ data.tag }</Text>
                <View style={styles.plus}>
                  <RectButton onPress={() => deleteTags(data)}>
                    <AntDesign name="closecircle" size={16} color={theme.colors.primary} />
                  </RectButton>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.cardInside}>
            <Text style={styles.titleCardInside}>Sugestões</Text>
            <View style={styles.tagsAdd}>
              {tags.map((data: any, index) => (
              <View style={styles.tags} key={data.id}>
                <Text style={styles.titleTags}>{ data.tag }</Text>
                <View style={styles.plus}>
                  <AntDesign name="plus" size={16} color={theme.colors.primary} onPress={() => addTags(data)}/>
                </View>
              </View>
              ))}
            </View>
          </View> 

          <View>
              <Button title={'Salvar'} onPress={addTags}/>
          </View>

          <View>
              <WhiteButton title={'Cancelar'} onPress={handleRepositories}/>
          </View>

        </View> 
      </View>
    </View>
  );  
}