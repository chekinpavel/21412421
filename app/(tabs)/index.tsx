import React, { useState } from 'react'; 
import { FlatList, View, StyleSheet, SafeAreaView, RefreshControl } from 'react-native';   
import LanguageItem from '../../components/LanguageItem';    
const langs = [ 
  { 
    id: '1', 
    lang: 'JavaScript', 
    logo: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pubsuite_a2f831d7-a969-4c5e-a1b8-3ae8eab5150a_64da17e1d3af84703bc5d837/orig', 
    experience: 'Опыт: 2 года', 
  },
  { 
    id: '2', 
    lang: 'SQL', 
    logo: 'https://static.tildacdn.com/tild3437-3331-4061-b664-383833643138/e9356abf3bdeb4182916.jpg', 
    experience: 'Опыт: Нет', 
  }, 
  { 
    id: '3', 
    lang: 'Java', 
    logo: 'https://do3.pskgu.ru/pluginfile.php/790419/course/overviewfiles/JAVA.jpg', 
    experience: 'Опыт: 1 год ', 
  }, 
  { 
    id: '4', 
    lang: 'C++', 
    logo: 'https://repository-images.githubusercontent.com/201103019/f8f8f200-bf89-11e9-98f1-98e46486f1b6', 
    experience: 'Опыт: Нет', 
  }, 
  {
  id: '5', 
  lang: 'Python', 
  logo: 'https://cdn-edge.kwork.ru/pics/t3/18/20759355-1652725018.jpg', 
  experience: 'Опыт: 1 год', 
}, 
]; 
 
const App = () => { 
  const [refreshing, setRefreshing] = useState(false); 
 
  const onRefresh = () => { 
    setRefreshing(true); 
    setTimeout(() => { 
      setRefreshing(false); 
    }, 2000); 
  }; 
 
  return ( 
    <SafeAreaView style={styles.container}> 
      <FlatList 
        data={langs} 
        renderItem={({ item }) => ( 
          <LanguageItem 
            lang={item.lang} 
            logo={item.logo} 
            experience={item.experience} 
          /> 
        )} 
        keyExtractor={(item) => item.id} 
        refreshControl={ 
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> 
        } 
      /> 
    </SafeAreaView> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    padding: 10, 
  }, 
}); 
 
export default App;