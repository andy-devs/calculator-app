import classes from './CalcScreen.module.css';
import { CalcContext } from '../../../store/calc-context';
import { useContext } from 'react';

const CalcScreen = () => {
	const calcCtx = useContext(CalcContext);

	return <div className={classes.calc__screen}>{calcCtx.screen}</div>;
};

export default CalcScreen;
