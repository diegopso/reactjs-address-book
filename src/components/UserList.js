import React, { useEffect, useState } from 'react'
import { Layout, Row, Divider, Spin, Button, Empty } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { loadNextPage } from '../store/pagination/actions'
import { ExclamationCircleTwoTone, LoadingOutlined } from '@ant-design/icons'
import DetailsModal from './DetailsModal'
import UserCard from './UserCard'

export const Loader = ({ error, onReattempt }) => {
  if (!error) {
    return (
      <div className="loading-container">
        <Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}></Spin>
      </div>
    )
  }

  return (
    <div className="loading-container">
      <div>
        <ExclamationCircleTwoTone className="error-icon" twoToneColor="red" />
        <p>There was a problem loading the list of users.</p>
        <Button type="primary" onClick={onReattempt}>Try Again</Button>
      </div>
    </div>
  )
}

const UserList = () => {
  const pagination = useSelector((state) => state.pagination)
  const settings = useSelector((state) => state.settings)
  const dispatch = useDispatch()
  const [selectedUser, setSelectedUser] = useState({})
  const [isModalVisible, setIsModalVisible] = useState({})

  const onCardClick = (user) => {
    return () => {
      setSelectedUser(user)
      setIsModalVisible(true)
    }
  }

  useEffect(() => {
    if (settings.length > 0 && !pagination.error && pagination.items.length === 0) {
      dispatch(loadNextPage(pagination, settings))
    }
  })

  const loadMore = () => {
    if (!pagination.query && settings.length > 0 && !pagination.error) {
      dispatch(loadNextPage(pagination, settings))
    }
  }

  return (
    <Layout className="user-list-container">
      { settings.length === 0 &&
        <Empty
          description={
            <span>
              No results to show, change settings and include countries.
            </span>
          }
          image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
      { settings.length > 0 &&
        <InfiniteScroll
          dataLength={pagination.items.length}
          next={loadMore}
          hasMore={!pagination.query && pagination.page < pagination.maxPages}
          loader={
            <Loader onReattempt={() => { dispatch(loadNextPage(pagination, settings)) }} error={pagination.error} />
          }
          endMessage={
            <Divider orientation="center">
              { pagination.query ? 'Pagination temporarily disabled' : 'End of users catalog' }
            </Divider>
          }
        >
          <Row>
            {pagination.items.map(user => <UserCard key={user.login.uuid} user={user} onClick={onCardClick(user)}/>)}
          </Row>
        </InfiniteScroll>
      }
      <DetailsModal
        user={selectedUser}
        visible={isModalVisible} onDismiss={() => { setIsModalVisible(false) }} />
    </Layout>
  )
}

export default UserList
