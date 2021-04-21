import React, { useEffect } from 'react'
import { Header, UserList } from '../components'
import { Layout } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { loadNextPage } from '../store/pagination/actions'

const Home = () => {
  const pagination = useSelector((state) => state.pagination)
  const dispatch = useDispatch()
  useEffect(() => {
    if (pagination.items.length === 0) {
      dispatch(loadNextPage)
    }
  })
  return (
    <Layout>
      <Header></Header>
      <UserList users={pagination.items}></UserList>
    </Layout>
  )
}

export default Home
