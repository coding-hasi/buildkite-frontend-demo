import { Button, Col, Row, Spin } from 'antd'
import CocktailCard from '../CocktailCard'
import { HeartOutlined } from '@ant-design/icons'
import { TCocktail } from '../../configs/types/cocktail.type'
import styles from './index.module.css'
import { ReactNode } from 'react'

type TProps = {
  loading: boolean
  cocktails: TCocktail[]
  cardAction: {
    label: string
    action: (cocktail: TCocktail) => void
    icon: ReactNode
  }
}

const CocktailLIst = (props: TProps) => {
  return (
    <Row justify={'space-evenly'} gutter={[16, 16]} wrap>
      {props.loading ? (
        <div className={styles.loading_container}>
          <Spin />
        </div>
      ) : (
        props.cocktails?.map(cocktail => (
          <Col key={cocktail.image}>
            <CocktailCard
              key={cocktail.image}
              image={cocktail.image}
              name={cocktail.title}
              category={cocktail.category}
              actions={[
                <Button type={'text'} icon={props.cardAction.icon} onClick={() => props.cardAction.action(cocktail)}>
                  {props.cardAction.label} <HeartOutlined />
                </Button>,
              ]}
            />
          </Col>
        ))
      )}
    </Row>
  )
}

export default CocktailLIst
