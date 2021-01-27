import React, { useState, useEffect, useRef } from 'react';
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
	Animated,
} from 'react-native';
import styles from '../styles/styles';
import CountryListItem from './CountryListItem';

function CountryList({ navigation }) {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [searchString, setSearchString] = useState('');
	const defaultFetchUrl = 'https://restcountries.eu/rest/v2/all';
	const [fetchUrl, setFetchUrl] = useState(defaultFetchUrl);

	const fadeAnim = useRef(new Animated.Value(0)).current;
	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	};

	const rotation = useRef(new Animated.Value(0)).current;

	const rotateIn = rotation.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '90deg'],
	});

	const rotate = (item) => {
		Animated.timing(rotation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start(() => navigation.navigate('Details', { item }));
	};
	const fadeOut = () => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};

	const fetchData = () => {
		console.log('fetching');
		setLoading(true);
		fetch(fetchUrl)
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.then(() => fadeIn())

			.finally(() => {
				setLoading(false);
			});
	};
	useEffect(() => {
		console.log('rerendered');
		fetchData();
	}, [fetchUrl]);

	const renderItem = ({ item }) => {
		return (
			<CountryListItem
				item={item}
				// onPress={() => navigation.navigate('Details', { item })}
				onPress={() => rotate(item)}
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
				<Animated.View
					style={{
						opacity: fadeAnim,
						transform: [{ rotateY: rotateIn }],
					}}
				>
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
				</Animated.View>
			)}
		</SafeAreaView>
	);
}

export default CountryList;
