import { Layout, Menu } from 'antd'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { MenuItemType } from 'antd/es/menu/hooks/useItems'
import { FC, useMemo } from 'react'
import { APP_ROUTES } from '../../configs/constants/APP_ROUTES'
import styles from './app-container.module.css'

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
      <Layout.Header>
        <Menu theme={'dark'} mode="horizontal" defaultSelectedKeys={[pathname.slice(1) || 'home']} items={navItems} />
      </Layout.Header>
      <Layout.Content className={styles.container}>
        <Outlet />
      </Layout.Content>
    </Layout>
  )
}

export default AppContainer
