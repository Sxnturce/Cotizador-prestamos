import Title from "./components/Title";
import Select from "./components/input/Select";
import Button from "./components/Buttons/Button";
import { formatMoney, calcTot, calcPayMonth } from "./utils/index.js";
import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(10000);
	const [month, setMonth] = useState(6);
	const [tot, setTot] = useState(0);
	const [pay, setPay] = useState(0);
	const min = 0;
	const max = 20000;
	const step = 100;

	useEffect(() => {
		setTot(calcTot(count, month));
	}, [count, month]);

	useEffect(() => {
		setPay(calcPayMonth(tot, month));
	}, [tot]);

	function handleChange(e) {
		setCount(+e.target.value);
	}

	function getOption(e) {
		setMonth(+e.target.value);
	}

	function add() {
		setCount(count + step);
	}

	function rest() {
		setCount(count - step);
	}

	return (
		<>
			<div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
				<Title />
				<div className="flex justify-between my-6">
					<Button
						type={"-"}
						event={rest}
						data={count === min ? true : false}
					/>
					<Button
						type={"+"}
						event={add}
						data={count === max ? true : false}
					/>
				</div>
				<input
					type="range"
					name="money"
					id="money"
					className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
					min={min}
					max={max}
					step={step}
					value={count}
					onChange={handleChange}
				/>
				<p className="text-center text-indigo-600 my-10 text-3xl font-bold">
					{formatMoney(count)}
				</p>

				<h2 className="text-2xl font-extrabold text-gray-500 text-center my-4">
					Elige un <span className="text-indigo-600">plazo</span> a pagar.
				</h2>
				<Select handle={getOption} />
				<div className="my-5 space-y-3 bg-gray-50 p-5">
					<h2 className="text-2xl font-extrabold text-gray-500 text-center my-4">
						Resumen <span className="text-indigo-600">de pagos</span>
					</h2>
					<p className="text-xl text-gray-500 text-center font-bold">
						{" "}
						{month} Meses
					</p>
					<p className="text-xl text-gray-500 text-center font-bold">
						{formatMoney(tot)} Total a pagar
					</p>
					<p className="text-xl text-gray-500 text-center font-bold">
						{formatMoney(pay)} Mensuales
					</p>
				</div>
			</div>
		</>
	);
}

export default App;
