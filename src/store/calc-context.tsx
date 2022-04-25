import React, { createContext, useState } from 'react';

const initialState = {
	screen: '0',
	prevValue: '',
	operation: '',
	setScreen: (num: string) => {},
	addScreen: (num: string) => {},
	setPrevValue: (num: string) => {},
	setOperation: (operation: string) => {},
	delete: () => {},
	reset: () => {},
	equal: () => {},
};

export const CalcContext = createContext(initialState);

const CalcProvider = ({ children }: { children: React.ReactNode }) => {
	const [screen, setScreen] = useState('0');
	const [prevValue, setPrevValue] = useState('');
	const [operation, setOperation] = useState('');

	const setScreenHandler = (num: string) => {
		setScreen(num);
	};
	const addScreenHandler = (num: string) => {
		if (screen.length >= 14) {
			alert('Input is too big');
			return;
		}
		if (screen === '0' && num !== '.') {
			setScreen(num);
		} else if (num === '.' && screen.includes('.')) {
			return;
		} else {
			setScreen((prev) => prev.concat(num));
		}
	};
	const setPrevValueHandler = (num: string) => {
		if (screen === '0' && operation !== '') {
			return;
		}
		setPrevValue(num);
	};
	const setOperationHandler = (operation: string) => {
		setOperation(operation);
	};
	const deleteHandler = () => {
		if (screen === '0') {
			return;
		} else if (screen.length === 1) {
			setScreen('0');
		} else if (screen[0] === '-' && screen.length === 2) {
			setScreen('0');
		} else {
			setScreen((prev) => prev.slice(0, -1));
		}
	};
	const resetHandler = () => {
		setScreen('0');
	};
	const equalHandler = () => {
		let result: number | string = 0;
		if (operation === '+') {
			result = +prevValue + +screen;
		} else if (operation === '-') {
			result = +prevValue - +screen;
		} else if (operation === '*') {
			result = +prevValue * +screen;
		} else if (operation === '/') {
			result = +prevValue / +screen;
		} else if (operation === '') {
			return;
		}
		if (!Number.isInteger(result)) {
			if (result.toFixed(2).length >= 15) {
				alert('Result is too big');
				return;
			}
		} else {
			if (result.toString().length >= 15) {
				alert('Result is too big');
				return;
			}
		}
		setPrevValue(screen);
		setOperation('');
		if (result === Infinity || result === -Infinity || Number.isNaN(result)) {
			result = 0;
		}
		if (!Number.isInteger(result)) {
			setScreen(result.toFixed(2));
		} else {
			setScreen(result.toString());
		}
	};

	const contextValue = {
		screen: screen,
		prevValue: prevValue,
		operation: operation,
		setScreen: setScreenHandler,
		addScreen: addScreenHandler,
		setPrevValue: setPrevValueHandler,
		setOperation: setOperationHandler,
		delete: deleteHandler,
		reset: resetHandler,
		equal: equalHandler,
	};

	return (
		<CalcContext.Provider value={contextValue}>{children}</CalcContext.Provider>
	);
};

export default CalcProvider;
