import Calculator from './components/Calculator/Calculator';
import CalcProvider from './store/calc-context';

function App() {
	return (
		<CalcProvider>
			<main className='main'>
				<Calculator />
			</main>
		</CalcProvider>
	);
}

export default App;
