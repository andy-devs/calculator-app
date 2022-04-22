import classes from './Calculator.module.css';

import CalcHeader from './Header/CalcHeader';
import CalcKeypad from './Keypad/CalcKeypad';
import CalcScreen from './Screen/CalcScreen';

const Calculator = () => {
	return (
		<div className={classes.calc}>
			<CalcHeader />
			<CalcScreen />
			<CalcKeypad />
		</div>
	);
};

export default Calculator;
