import React, { useEffect } from 'react'
import { Layout, Card, Avatar, Row, Col, Divider, Spin, Button } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { loadNextPage } from '../store/pagination/actions'
import { upperCaseFirst } from '../helpers/string'
import { ExclamationCircleTwoTone, LoadingOutlined } from '@ant-design/icons'

const { Meta } = Card

const User = (props) => {
  return (
    <Card>
      <Meta
        avatar={<Avatar src={props.user.picture.thumbnail} />}
        title={upperCaseFirst(props.user.name.first) + ' ' + upperCaseFirst(props.user.name.last)}
        description={'@' + props.user.login.username}
      />
    </Card>
  )
}

const UserList = (props) => {
  const pagination = useSelector((state) => state.pagination)
  const settings = useSelector((state) => state.settings)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!pagination.error && pagination.items.length === 0) {
      dispatch(loadNextPage(pagination, settings))
    }
  })

  return (
    <Layout className="user-list-container">
      <InfiniteScroll
        dataLength={pagination.items.length}
        next={() => { !pagination.error && dispatch(loadNextPage(pagination, settings)) }}
        hasMore={pagination.page < pagination.maxPages}
        loader={
          <div className="loading-container">
            {!pagination.error && <Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}></Spin>}
            {pagination.error &&
              <div>
                <ExclamationCircleTwoTone className="error-icon" twoToneColor="red" />
                <p>There was a problem loading the list of users.</p>
                <Button type="primary" onClick={() => { dispatch(loadNextPage(pagination, settings)) }}>Try Again</Button>
              </div>
            }
          </div>
        }
        endMessage={
          <Divider orientation="center">
            End of users catalog
          </Divider>
        }
      >
        <Row>
          {pagination.items.map(user => (
            <Col key={user.login.uuid} className="user-container" span="6">
              <User user={user}></User>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Layout>
  )
}

export default UserList
