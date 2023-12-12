import { useEffect, useState } from "react";
import Product from "./components/Product";
import Modal from "./components/Modal"
import "./fonts/fonts.css"
import  "./styles/App.css"
import stylesList from "./styles/List.module.scss"
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom'
// import ProductCart from "./components/ProductCart";
// import ProductFavorites from "./components/ProductFavorites";


function App() {

	const [products, setProducts] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(false);

	const [firstModalOpen, setFirstModalOpen] = useState(false);
	
	const openFirstModal = (product) => {
		setFirstModalOpen(true);
		setSelectedProduct(product);
	};
	
	const closeFirstModal = () => {
		setFirstModalOpen(false);
		setSelectedProduct(false);
	};
	
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const openDeleteModal = (product) => {
		setDeleteModalOpen(true);
		setSelectedProduct(product);
	};
	
	const closeDeleteModal = () => {
		setDeleteModalOpen(false);
		setSelectedProduct(false);
    };

	useEffect(() => {

		const url = "./products.json"
        fetch(url).then(resp => resp.json()).then(data => setProducts(data.products))

	}, [])


	const [cartItems, setCartItems] = useState([]);
    
    const addToCart = () => {
        setCartItems(prevCartItems => [...prevCartItems, selectedProduct]);
	};

	const deleteFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
		setCartItems(updatedCartItems);
		localStorage.setItem("cart", JSON.stringify(updatedCartItems));
	};

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);
	

    const [cartsCount, setCartsCount] = useState()
	
	useEffect(() => {
        const carts = JSON.parse(localStorage.getItem("cart")|| []);
        setCartsCount(carts.length);
	}, [cartItems]);
	

    

	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (product) => {
		const updatedProduct = { ...product, isFavorite: !product.isFavorite };

		setFavorites(prevFavorites => {
			const existingProductIndex = prevFavorites.findIndex(item => item.id === updatedProduct.id);

			if (existingProductIndex !== -1) {
				prevFavorites.splice(existingProductIndex, 1);

			} else {
				prevFavorites.push(updatedProduct);
			}

			return [...prevFavorites];
		});
	};

	useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favorites);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

		

	
	const [favoritesCount, setFavoritesCount] = useState();

	useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")|| []);
        setFavoritesCount(favorites.length);
	}, [favorites]);
	
	

	return (

		<div className="main">

			<Header
				cartsCount={cartsCount}
				favoritesCount={favoritesCount}
			/>

			<Routes>
				<Route path="/" element={ 
					<ul className={stylesList.list}>
						{products.map(product =>
							<Product
								title={product.title}
								price={product.price}
								number={product.number}
								id={product.id}
								key={product.id}
								image={product.image}
								openModal={() => openFirstModal(product)}
								addToFavorites={() => addToFavorites(product)}
							/>
						)}
					</ul>
				} />

				{/* <Route path="cart" element={
					<ul className={stylesList.list}>
						{cartItems.map(product =>
							<ProductCart
								title={product.title}
								price={product.price}
								number={product.number}
								id={product.id}
								key={product.id}
								image={product.image}
								openModal={() => openDeleteModal(product)}
								
							/>
						)}
					</ul>
				} /> */}

				{/* <Route path="favorites" element={ 
					<ul className={stylesList.list}>
						{favorites.map(product =>
							<ProductFavorites
								title={product.title}
								price={product.price}
								number={product.number}
								id={product.id}
								key={product.id}
								image={product.image}
								openModal={() => openFirstModal(product)}
								addToFavorites={() => addToFavorites(product)}
							/>
						)}
					</ul>
				} /> */}

			</Routes>

            			
			<Modal
                header="Додати цей товар у кошик?"
                isOpen={firstModalOpen}
                isClose={closeFirstModal}
                text={selectedProduct.title}
                actions={[
                    {
                        label: 'Ok',
						onClick: () => {
							addToCart()
							closeFirstModal()
						},						
						backgroundColor: 'green'
                    },
                    {
                        label: 'Cancel',
						onClick: () => closeFirstModal(),
						backgroundColor: 'gray'
                    }
                ]}
			/>
			
			<Modal
                header="Видалити цей товар з кошика?"
                isOpen={deleteModalOpen}
                isClose={closeDeleteModal}
                text={selectedProduct.title}
                actions={[
                    {
                        label: 'Ok',
						onClick: () => {
							deleteFromCart(selectedProduct.id)
							closeDeleteModal()
						},						
						backgroundColor: 'red'
                    },
                    {
                        label: 'Cancel',
						onClick: () => closeDeleteModal(),
						backgroundColor: 'gray'
                    }
                ]}
            />
        </div>
	)
}

export default App;
