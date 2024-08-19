function Button({ type, event, data }) {
	return (
		<button
			type="button"
			disabled={data}
			className={`select-none w-10 h-10 flex items-center justify-center font-bold text-white text-2xl ${
				!data
					? "bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
					: "bg-gray-200 "
			} rounded-full  transition-all duration-200 ease-in-out`}
			onClick={event}
		>
			{type}
		</button>
	);
}

export default Button;
