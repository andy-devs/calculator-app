import classes from './CalcKey.module.css';

interface Props {
	value: string;
}

const CalcKey = ({ value }: Props) => {
	return <button>{value}</button>;
};

export default CalcKey;
