import CocktailCard from '../../components/CocktailCard'
import { Button, Col, Row } from 'antd'
import { HeartOutlined, PlusOutlined } from '@ant-design/icons'
import { useHomeReducer } from './reducer'

const Home = () => {
  const { state } = useHomeReducer()

  return (
    <div>
      <Row justify={'space-evenly'} gutter={[16, 16]} wrap>
        {state?.cocktails?.map(cocktail => (
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
        ))}
      </Row>
    </div>
  )
}

export default Home
