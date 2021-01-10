import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

  const renderListItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Image
        style={styles.flag}
        source={{
          uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
        }}
      />
    </View>
  );

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((json) => setCountries(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      { isLoading ? <Text>Loading...</Text> :
        <View>
          <Text>Found {countries.length} countries</Text>
          <FlatList
            data={countries.slice(0, countries.length)}
            renderItem={renderListItem}
            keyExtractor={item => item.name}
          />
        </View>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#00bfff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  flag: {
    height: 64,
    width: 64
  }
});

export default App;