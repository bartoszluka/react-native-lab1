import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles/styles';

const CountryListItem = ({ item, onPress }) => (
	<TouchableOpacity onPress={onPress} style={styles.item}>
		<Text style={styles.title}>{item.name}</Text>
		<Image
			style={styles.flag}
			source={{
				uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
			}}
		/>
	</TouchableOpacity>
);
export default CountryListItem;
