import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
// import Product from "./components/Product";
import Product from "./components/Product";
// import Modal from "./components/Modal"
import "./fonts/fonts.css"
import  "./styles/App.css"
// import stylesList from "./styles/List.module.scss"

import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
// import ProductCart from "./components/ProductCart";
// import ProductFavorites from "./components/ProductFavorites";


function App() {

	const [products, setProducts] = useState([])
	

	useEffect(() => {

		const url = "./products.json"
        fetch(url).then(resp => resp.json()).then(data => setProducts(data.products))

	}, [])


	
	return (

		<div className="main">

			<Header
				// cartsCount={cartsCount}
				// favoritesCount={favoritesCount}
			/>

			<Routes>
				
				<Route path="/" element={ <MainPage /> } />
				<Route path="product/:id" element={	<Product />	} />

			</Routes>

        </div>
	)
}

export default App;
