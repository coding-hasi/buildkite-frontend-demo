import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../configs/constants/APP_ROUTES'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to={APP_ROUTES.FAVOURITES}>Favourites</Link>
    </div>
  )
}

export default Home
