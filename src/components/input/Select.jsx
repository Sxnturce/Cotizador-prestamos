function Select({ handle }) {
	return (
		<select
			name="month"
			id="month"
			onChange={handle}
			className="w-full p-2 bg-white border boder-gray-400 rounded-lg text-center text-xl font-bold text-gray-500"
		>
			<option value="6">6 Meses</option>
			<option value="12">12 Meses</option>
			<option value="24">24 Meses</option>
		</select>
	);
}

export default Select;
