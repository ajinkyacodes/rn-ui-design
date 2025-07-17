import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import TopTabs from '../components/TopTabs';
import MeditationCard from '../components/MeditationCard';
import { dummyData } from '../data/data';

const MeditationScreen = () => {
	return (
		<View style={{ paddingTop: vs(50), paddingHorizontal: s(20) }}>
			<Text
				style={{
					color: '#1D150F',
					fontSize: s(20),
					fontWeight: 'semibold',
					marginBottom: vs(6),
				}}
			>
				Meditations
			</Text>
			<Text style={{ color: '#2C2016', fontSize: s(14), marginBottom: vs(16) }}>
				Lorem ipsum dolor sit amet.
			</Text>
			<TopTabs />
			<FlatList
				data={dummyData}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between'
        }}
				renderItem={({ item }) => <MeditationCard />}
			/>
		</View>
	);
};

export default MeditationScreen;

const styles = StyleSheet.create({});
