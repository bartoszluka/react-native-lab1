import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const CountryDetails = ({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) => {
	const { item } = route.params;
	navigation.setOptions({ title: `${item.name} details` });
	return (
		<View>
			<Text>{item.name}</Text>
			<Text>{item.capital}</Text>
			<Text>{item.region}</Text>
			<Text>{item.nativeName}</Text>
			<Text>{item.numericCode}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/>
		</View>
	);
};
export default CountryDetails;
