import CocktailCard from '../../components/CocktailCard'
import { Button, Col, Row, Input, Spin } from 'antd'
import { HeartOutlined, PlusOutlined, ReloadOutlined } from '@ant-design/icons'
import { useHomeReducer } from './reducer'
import styles from './index.module.css'

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
      <Row justify={'space-evenly'} gutter={[16, 16]} wrap>
        {state.isCocktailFetching || state.cocktailsRefetching ? (
          <div className={styles.loading_container}>
            <Spin />
          </div>
        ) : (
          state?.cocktails?.map(cocktail => (
            <Col key={cocktail.image}>
              <CocktailCard
                key={cocktail.image}
                image={cocktail.image}
                name={cocktail.title}
                category={cocktail.category}
                actions={[
                  <Button type={'text'} icon={<PlusOutlined />}>
                    Add to <HeartOutlined />
                  </Button>,
                ]}
              />
            </Col>
          ))
        )}
      </Row>
      {notificationContextHolder}
    </div>
  )
}

export default Home
