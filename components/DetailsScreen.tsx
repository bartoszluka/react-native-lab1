import React, { useEffect, useRef } from 'react';

import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import styles from '../styles/styles';

const CountryDetails = ({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) => {
	const rotation = useRef(new Animated.Value(0)).current;

	const spin = rotation.interpolate({
		inputRange: [0, 1],
		outputRange: ['270deg', '360deg'],
	});

	const rotateIn = () => {
		Animated.timing(rotation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};
	const rotateOut = () => {
		Animated.timing(rotation, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	};
	useEffect(() => {
		console.log('details rendering');
		rotateIn();
		return () => {
			// rotateOut;
		};
	}, []);
	const { item } = route.params;
	// navigation.setOptions({ title: `${item.name} details` });
	return (
		<Animated.View
			style={{
				transform: [{ rotateY: spin }],
			}}
		>
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
		</Animated.View>
	);
};
export default CountryDetails;
