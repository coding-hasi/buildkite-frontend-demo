import CocktailCard from '../../components/CocktailCard'
import { Button, Col, Row, Input, Spin, notification } from 'antd'
import { HeartOutlined, PlusOutlined } from '@ant-design/icons'
import { useHomeReducer } from './reducer'
import styles from './index.module.css'
import { useEffect } from 'react'

const Home = () => {
  const { state } = useHomeReducer()

  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (state.cocktailFetchingError)
      api.info({
        message: 'Failed to fetch cocktails',
        placement: 'topRight',
      })
  }, [state.cocktailFetchingError, api])

  return (
    <div>
      {contextHolder}
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Input.Search
            placeholder="Search cocktails"
            onSearch={value => console.log('value', value)}
            style={{ width: 200 }}
          />
        </Col>
        <Col span={6} offset={12}>
          <h2>refresh</h2>
        </Col>
      </Row>
      <Row justify={'space-evenly'} gutter={[16, 16]} wrap>
        {state.isCocktailFetching ? (
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
    </div>
  )
}

export default Home
