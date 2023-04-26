import { Card } from 'antd'
import { ReactNode } from 'react'

interface IProps {
  image: string
  name: string
  category: string
  actions?: ReactNode[]
}

const CocktailCard = (props: IProps) => {
  return (
    <Card hoverable style={{ width: 240 }} cover={<img alt={props.name} src={props.image} />} actions={props.actions}>
      <Card.Meta title={props.name} description={props.category} />
    </Card>
  )
}

export default CocktailCard
