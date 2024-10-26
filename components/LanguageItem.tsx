import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native'; 
 
type LanguageItemProps = { 
  lang: string; 
  logo: string; 
  experience: string; 
}; 
 
const LanguageItem: React.FC<LanguageItemProps> = ({ lang, logo, experience }) => { 
  return ( 
    <View style={styles.container}> 
      <Image source={{ uri: logo }} style={styles.logo} /> 
      <View style={styles.textContainer}> 
        <Text style={styles.text}>{lang}</Text> 
        <Text style={styles.experienceText}>{experience}</Text> 
      </View> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20, 
  }, 
  logo: { 
    width: 40, 
    height: 40, 
    marginRight: 10, 
  }, 
  textContainer: { 
    flexDirection: 'column', 
  }, 
  text: { 
    fontSize: 20, 
  }, 
  experienceText: { 
    fontSize: 16, 
    color: 'gray',  
  }, 
}); 
 
export default LanguageItem;