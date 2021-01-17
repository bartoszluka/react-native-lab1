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
	TextInput,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from 'react-native';
import styles from '../styles/styles';
import CountryListItem from './CountryListItem';

function CountryList({ navigation }) {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [searchString, setSearchString] = useState('');
	const defaultFetchUrl = 'https://restcountries.eu/rest/v2/all';
	const [fetchUrl, setFetchUrl] = useState(defaultFetchUrl);

	const fetchData = () => {
		console.log('fetching');
		setLoading(true);
		fetch(fetchUrl)
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	};
	useEffect(() => {
		console.log('rerendered');
		fetchData();
	}, [fetchUrl]);

	const renderItem = ({ item }) => {
		return (
			<CountryListItem
				item={item}
				onPress={() => navigation.navigate('Details', { item })}
			/>
		);
	};

	function handleSearch(text: string): void {
		setSearchString(text);
		console.log(searchString);
		if (text.length >= 3) {
			setFetchUrl(`https://restcountries.eu/rest/v2/name/${text}`);
		}
	}

	const handleRefresh = () => {
		console.log('refreshing');
		fetchData();
	};
	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				placeholder='search'
				value={searchString}
				onChangeText={handleSearch}
			/>
			{isLoading ? (
				<Text>Loading...</Text>
			) : (
				<View>
					<Text>
						found {countries.length ? `${countries.length}` : '0'}{' '}
						countr{countries.length === 1 ? 'y' : 'ies'}
					</Text>
					<FlatList
						// data={countries.slice(0, countries.length)}
						data={countries}
						renderItem={renderItem}
						keyExtractor={(item) => item.name}
						onRefresh={handleRefresh}
						refreshing={isLoading}
					/>
				</View>
			)}
		</SafeAreaView>
	);
}

export default CountryList;
