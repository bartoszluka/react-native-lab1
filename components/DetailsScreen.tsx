import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

const CountryDetails = ({ route, navigation }) => {
	// const { item } = route.params;
	// navigation.setOptions({ title: `${item.name} details` });
	return (
		<View>
			<Text>I am Details</Text>
			{/* <Text>{item.name}</Text>
			<Text>{item.capital}</Text>
			<Text>{item.region}</Text>
			<Text>{item.nativeName}</Text>
			<Text>{item.numericCode}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/> */}
		</View>
	);
};
export default CountryDetails;

const styles = StyleSheet.create({
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
		height: 300,
		width: 300,
	},
});
