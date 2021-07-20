import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Loading from '../components/LoadingComponents/Loading';
import axios from 'axios';

import styles from '../css/styles';

export default Main = () =>{
  const [image, setImage] = useState(null);

  const [imageForm, setImageForm] = useState({
    uri: '',
    name: '',
    type: ''
  })

  const [stateUpload, setStateUpload] = useState({
    isChoose: false
  })

  const [stateLoading, setStateLoading] = useState({
    isLoading: false
  })


  const [predicted, setPredicted] = useState({
    category: ''
  })


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const getFilename = (uri) => {
    const temp = uri.split("/");
    return temp[temp.length - 1];
  }


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const filename = getFilename(result.uri);

      setImage(result.uri);

      setImageForm({
        uri: result.uri,
        name: filename,
        type: result.type
      })

      setStateUpload({
        isChoose: true
      })
    }


  };



  const upload  = async () => {
        const formData = new FormData();
        formData.append('file', { uri: imageForm.uri, name: imageForm.name, type: 'image/jpeg'});

        setStateLoading({
          isLoading: true
        })


        await axios({
          method: "POST",
          url: "http://class-catdog.herokuapp.com/image",
          data: formData,
          headers: {
            Accept: 'multipart/form-data',
            'content-type': 'multipart/form-data'
          }
        })
        .then((response) => {
            
          setStateLoading({
            isLoading: false
          })

          console.log(response.data);
          
          const result = processResult(response.data['categories'])
          
          setPredicted({
            category: result
          })

        })
        .catch(function(error){
          console.log('There has been a problem with your fetch operation: ' + error.message);
        })

  };

  const processResult = (array)=>{

    const categories = []
    const accuracy = []

    for (let i = 0; i < 10; i++){
      if(i == 0 || i%2 == 0){
        categories.push(array[i].split(": ")[1])
      }
      else {
        accuracy.push(parseFloat(array[i].split(": ")[1]))
      }
    }

    let max = Math.max(...accuracy);

    let index = accuracy.indexOf(max);

    let fixedNum = (max * 100).toFixed(2);

    let result = categories[index] + " with " + fixedNum.toString() + "%"

    return result
  }


  return (
    <View style={styles.container}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.btn_1}
          onPress={ pickImage }
        >
          <Text style={styles.btn_1_txt}>Choose an Awesome Picture</Text>
        </TouchableOpacity>


        {image && <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />}

        { stateUpload.isChoose ?
          <TouchableOpacity
            style={styles.btn_2}
            onPress={ upload }
          >
            <Text style={styles.btn_1_txt}>Prediction</Text>
          </TouchableOpacity> 
          : null
        }

        { stateLoading.isLoading ? <Loading /> : null }

        { predicted && 
        
          <Text style={ styles.text_result }>
            { predicted.category }          
          </Text> 
        
        }

  {/* 
        { imageDetected && <Image key={imageDetected.reload} source={ {uri: imageDetected.uri || null, cache: 'reload'} } style={{ width: 400, height: 300 }} /> } */}
      </View>
    </View>
 
  );
}