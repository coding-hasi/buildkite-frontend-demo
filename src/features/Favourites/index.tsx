import { useFavouriteReducer } from './reducer'
import CocktailList from '../../components/CocktailList'
import { DeleteOutlined } from '@ant-design/icons'
import styles from './index.module.css'

const Favourites = () => {
  const { state, actions, notificationContextHolder } = useFavouriteReducer()

  return (
    <div className={styles.favourites_container}>
      <CocktailList
        loading={state.isLoading}
        cocktails={state.favouriteCocktails || []}
        cardAction={{
          action: cocktail => actions.removeFromFavourites(cocktail.id),
          label: 'Remove from',
          icon: <DeleteOutlined />,
        }}
      />
      {notificationContextHolder}
    </div>
  )
}

export default Favourites
