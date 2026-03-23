import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import type { Plant } from '../types'
import '../styles/Layout.css'

function HomePage({ addToCart }: { addToCart: (plant: Plant) => void }) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 