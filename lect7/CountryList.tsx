import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	TouchableOpacity,
} from 'react-native';

const CountryList = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);

	const renderListItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Details', {item});
			}}
			style={styles.item}
		>
			<Text style={styles.title}>{item.name}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/>
		</TouchableOpacity>
	);

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<View>
					<Text>Found {countries.length} countries</Text>
					<FlatList
						data={countries.slice(0, countries.length)}
						renderItem={renderListItem}
						keyExtractor={(item) => item.name}
					/>
				</View>
			)}
		</SafeAreaView>
	);
};

export default CountryList;
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
		width: 64,
	},
});
