import React, { useEffect } from 'react'
import { Layout, Card, Avatar, Row, Col, Divider, Spin } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDispatch, useSelector } from 'react-redux'
import { loadNextPage } from '../store/pagination/actions'
import { upperCaseFirst } from '../helpers/string'
import { LoadingOutlined } from '@ant-design/icons'

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
  const dispatch = useDispatch()
  useEffect(() => {
    if (pagination.items.length === 0) {
      dispatch(loadNextPage)
    }
  })

  return (
    <Layout className="user-list-container">
      <InfiniteScroll
        dataLength={pagination.items.length}
        next={() => {
          dispatch(loadNextPage)
          console.log(pagination)
        }}
        hasMore={pagination.page < pagination.maxPages}
        loader={
          <div className="loading-container">
            <Spin tip="Loading..." indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}></Spin>
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
