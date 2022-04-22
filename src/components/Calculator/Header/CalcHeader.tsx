import classes from './CalcHeader.module.css';
import CalcThemeChanger from './CalcThemeChanger';

const CalcHeader = () => {
	return (
		<header className={classes.calc__header}>
			<h1 className={classes['calc__header-title']}>calc</h1>
			<CalcThemeChanger />
		</header>
	);
};

export default CalcHeader;
