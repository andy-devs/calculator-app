import classes from './CalcThemeChanger.module.css';

import { Slider } from '@mantine/core';
import changeTheme from '../../../helpers/changeTheme';

const MARKS = [
	{ value: 0, label: '1' },
	{ value: 50, label: '2' },
	{ value: 100, label: '3' },
];

const themeChangeHandler = (value: number) => {
	if (value === 0) {
		changeTheme(0);
	} else if (value === 50) {
		changeTheme(1);
	} else if (value === 100) {
		changeTheme(2);
	}
};

const CalcThemeChanger = () => {
	return (
		<div className={classes.theme}>
			<p className={classes.theme__text}>THEME</p>
			<Slider
				classNames={{
					root: classes['theme__slider-root'],
					track: classes['theme__slider-track'],
					bar: classes['theme__slider-bar'],
					thumb: classes['theme__slider-thumb'],
					mark: classes['theme__slider-mark'],
					markLabel: classes['theme__slider-mark-label'],
				}}
				showLabelOnHover={false}
				label={null}
				defaultValue={0}
				step={50}
				marks={MARKS}
				onChangeEnd={themeChangeHandler}
			/>
		</div>
	);
};

export default CalcThemeChanger;
