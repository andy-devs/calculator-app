import classes from './CalcKeypad.module.css';

import CalcKey from './CalcKey';

const keys = [
	'7',
	'8',
	'9',
	'DEL',
	'4',
	'5',
	'6',
	'+',
	'1',
	'2',
	'3',
	'-',
	'.',
	'0',
	'/',
	'x',
	'RESET',
	'=',
];

const CalcKeypad = () => {
	return (
		<div className={classes.calc__keypad}>
			{keys.map((key) => (
				<CalcKey value={key} />
			))}
		</div>
	);
};

export default CalcKeypad;
