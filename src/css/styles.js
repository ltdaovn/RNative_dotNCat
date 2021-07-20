import { StyleSheet } from 'react-native'

const TEXT = {color: '#f8f7ff', fontWeight: "700", textAlign: 'center'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69a297",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  text_h1: {
    ...TEXT,
    fontSize: 30
  },
  text_h2: {
    ...TEXT,
    fontSize: 20
  },
  text_p: {
    ...TEXT,
    fontSize: 15
  },
  imgSplash:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      position: 'absolute'
  },
  imgLogo: {
    width: 150,
    height: 150,
  },
  btn_1: {
    backgroundColor: '#50808e',
    padding: 10,
    borderRadius: 10,
    margin: 20
  },
  btn_1_txt: {
    color: 'white',
    fontSize: 20
  },
  btn_2: {
    backgroundColor: '#ed1b24',
    padding: 10,
    borderRadius: 10,
    marginTop: 20
  },
  text_result: {
    ...TEXT,
    margin: 100,
    fontSize: 20
  }
});

export default styles