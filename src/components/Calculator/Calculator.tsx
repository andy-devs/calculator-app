import classes from './Calculator.module.css';

import CalcHeader from './Header/CalcHeader';

const Calculator = () => {
	return (
		<div className={classes.calc}>
			<CalcHeader />
		</div>
	);
};

export default Calculator;
