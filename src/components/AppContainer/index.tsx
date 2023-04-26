import { FC, useMemo } from 'react'
import { Avatar, Layout, Menu, Typography } from 'antd'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { APP_ROUTES } from '../../configs/constants/APP_ROUTES'
import styles from './index.module.css'
import Clock from '../Clock'

const AppContainer: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const navItems: MenuItemType[] = useMemo(
    () => [
      { key: 'home', label: 'Home', onClick: () => navigate(APP_ROUTES.HOME) },
      { key: 'favourites', label: 'Favourites', onClick: () => navigate(APP_ROUTES.FAVOURITES) },
    ],
    [navigate]
  )

  return (
    <Layout className={styles.app}>
      <Layout.Header className={styles.menu}>
        <Menu theme={'dark'} mode="horizontal" defaultSelectedKeys={[pathname.slice(1) || 'home']} items={navItems} />
        <div className={styles.user}>
          <Clock className={styles.user_name} />
          <Avatar
            src={`https://avatars.dicebear.com/api/micah/JohnMorrison.svg?radius=10&size=40&backgroundColor=white&scale=80`}
          />
          <Typography.Text className={styles.user_name}>John Morrison</Typography.Text>
        </div>
      </Layout.Header>
      <Layout.Content className={styles.container}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default AppContainer
