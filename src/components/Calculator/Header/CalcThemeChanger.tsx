import classes from './CalcThemeChanger.module.css';

import { Slider } from '@mantine/core';

const MARKS = [
	{ value: 0, label: '1' },
	{ value: 50, label: '2' },
	{ value: 100, label: '3' },
];

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
					// dragging: 'your-dragging-class',
					label: classes['theme__slider-dragging'],
					markWrapper: classes['theme__slider-mark-wrapper'],
					mark: classes['theme__slider-mark'],
					// markFilled: 'your-markFilled-class',
					markLabel: classes['theme__slider-mark-label'],
				}}
				showLabelOnHover={false}
				label={null}
				defaultValue={0}
				step={50}
				marks={MARKS}
			/>
		</div>
	);
};

export default CalcThemeChanger;
