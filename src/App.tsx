function App() {
	return (
		<div className="grid grid-cols-12 gap-24 bg-black h-screen">
			<div className="col-span-2">
				<img src="logo.png" alt="" className=" h-20 w-12" />
			</div>
			<nav className="col-start-3 col-end-10 mt-10 text-white">
				<ul className="flex justify-between">
					<li>
						<a href="#Home">Home</a>
					</li>
					<li>
						<a href="#News">News</a>
					</li>
					<li>
						<a href="#Become">Become a Distributor</a>
					</li>
					<li>
						<a href="#Contact">Contact Us</a>
					</li>
					<li>
						<a href="#About">About Us</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default App;
