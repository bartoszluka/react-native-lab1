import { StatusBar, StyleSheet } from 'react-native';

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
	fadingContainer: {
		opacity: 0,
	},
});
export default styles;
