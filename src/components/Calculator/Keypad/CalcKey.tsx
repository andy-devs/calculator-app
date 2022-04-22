import classes from './CalcKey.module.css';

interface Props {
	value: string;
}

const CalcKey = ({ value }: Props) => {
	let keyClasses = classes.calc__key;

	if (value === 'DEL') {
		keyClasses += ' ' + classes['del-key'];
	}
	if (value === 'RESET') {
		keyClasses += ' ' + classes['reset-key'];
	}
	if (value === '=') {
		keyClasses += ' ' + classes['equal-key'];
	}

	return <button className={keyClasses}>{value}</button>;
};

export default CalcKey;
