const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex justify-center items-center h-full">
			<h1 className="text-4xl text-yellow-200 animate-bounce hover:text hover:text-lime-500 ">
				Ai
			</h1>
			{children}
			<h3 className="text-xl text-sky-400/100 animate-bounce hover:text-red-400 ">
				By Dev...
			</h3>
		</div>
	);
};

export default AuthLayout;
