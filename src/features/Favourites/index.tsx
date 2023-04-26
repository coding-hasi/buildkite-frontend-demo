import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../configs/constants/APP_ROUTES'

const Favourites = () => {
  return (
    <div>
      <h2>Favourites</h2>
      <Link to={APP_ROUTES.HOME}>Home</Link>
    </div>
  )
}

export default Favourites
