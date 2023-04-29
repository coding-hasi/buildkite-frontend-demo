import { Button, Col, Row, Input } from 'antd'
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { useHomeReducer } from './reducer'
import styles from './index.module.css'
import CocktailList from '../../components/CocktailList'

const Home = () => {
  const { state, actions, notificationContextHolder } = useHomeReducer()

  return (
    <div>
      <Row gutter={[16, 16]} className={styles.action_container} wrap>
        <Col>
          <div className={styles.search}>
            <Input.Search
              placeholder="Search cocktails"
              onSearch={value => actions.setSearchString(value)}
              style={{ width: 200 }}
              allowClear
            />
          </div>
        </Col>
        <Col>
          <div className={styles.refresh}>
            <Button
              type={'primary'}
              icon={<ReloadOutlined />}
              onClick={() => actions.refetchCocktails()}
              loading={state.isCocktailFetching || state.cocktailsRefetching}
            >
              Refresh
            </Button>
          </div>
        </Col>
      </Row>
      <CocktailList
        loading={state.isCocktailFetching || state.cocktailsRefetching}
        cocktails={state.cocktails || []}
        cardAction={{
          action: cocktail => actions.addToFavourites(cocktail.id),
          label: 'Add to',
          icon: <PlusOutlined />,
        }}
      />
      {notificationContextHolder}
    </div>
  )
}

export default Home
