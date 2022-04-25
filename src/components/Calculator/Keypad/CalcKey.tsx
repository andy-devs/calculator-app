import classes from './CalcKey.module.css';
import { CalcContext } from '../../../store/calc-context';
import { useContext } from 'react';

interface Props {
	value: string;
}

const CalcKey = ({ value }: Props) => {
	const calcCtx = useContext(CalcContext);

	const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const clickHandler = () => {
		if (nums.includes(value)) {
			calcCtx.addScreen(value);
		} else if (value === '.') {
			calcCtx.addScreen(value);
		} else if (value === 'DEL') {
			calcCtx.delete();
		} else if (value === 'RESET') {
			calcCtx.reset();
		} else if (value === '+') {
			calcCtx.setPrevValue(calcCtx.screen);
			calcCtx.setOperation('+');
			calcCtx.reset();
		} else if (value === '-') {
			calcCtx.setPrevValue(calcCtx.screen);
			calcCtx.setOperation('-');
			calcCtx.reset();
		} else if (value === 'x') {
			calcCtx.setPrevValue(calcCtx.screen);
			calcCtx.setOperation('*');
			calcCtx.reset();
		} else if (value === '/') {
			calcCtx.setPrevValue(calcCtx.screen);
			calcCtx.setOperation('/');
			calcCtx.reset();
		} else if (value === '=') {
			calcCtx.equal();
		}
	};

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

	return (
		<button onClick={clickHandler} className={keyClasses}>
			{value}
		</button>
	);
};

export default CalcKey;
