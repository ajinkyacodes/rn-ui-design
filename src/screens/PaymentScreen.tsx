import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton';
import { s, vs } from 'react-native-size-matters';
import PaymentList from '../components/PaymentList';
import BankCardBox from '../components/BankCardBox';
import AddButton from '../components/AddButton';
import TotalAmount from '../components/TotalAmount';
import ButtonText from '../components/ButtonText';

const PaymentScreen = () => {
	return (
		<View style={{ flex: 1, paddingTop: vs(50) }}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: vs(10),
					paddingHorizontal: s(16),
				}}
			>
				<BackButton />
				<Text
					style={{
						fontSize: s(17),
						color: '#181C2E',
						marginStart: s(18),
					}}
				>
					Payment
				</Text>
			</View>
			<PaymentList />
			<View style={{ paddingHorizontal: s(16) }}>
				<BankCardBox />
                <AddButton />
                <TotalAmount />
                <ButtonText text="PAY & CONFIRM" />
			</View>
		</View>
	);
};

export default PaymentScreen;

const styles = StyleSheet.create({});
