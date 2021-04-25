import React, { useEffect } from 'react'
import { Layout, Card, Avatar, Row, Col, Divider, Spin, Button, Empty } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { loadNextPage } from '../store/pagination/actions'
import { upperCaseFirst } from '../helpers/string'
import { ExclamationCircleTwoTone, LoadingOutlined } from '@ant-design/icons'

const { Meta } = Card

const User = ({ user }) => {
  if (user.hide) {
    return <></>
  }

  return (
    <Col className="user-container" span="6">
      <Card>
        <Meta
          avatar={<Avatar src={user.picture.thumbnail} />}
          title={upperCaseFirst(user.name.first) + ' ' + upperCaseFirst(user.name.last)}
          description={'@' + user.login.username}
        />
      </Card>
    </Col>
  )
}

const Loader = ({ error, onReattempt }) => {
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
            {pagination.items.map(user => <User key={user.login.uuid} user={user}/>)}
          </Row>
        </InfiniteScroll>
      }
    </Layout>
  )
}

export default UserList
