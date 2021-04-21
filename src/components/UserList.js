import React from 'react'
import { Layout, Row, Col, Card, Avatar } from 'antd'
import { upperCaseFirst } from '../helpers/string'

const { Meta } = Card

const User = (props) => {
  return (
    <Col className="user-container" span={6}>
      <Card>
        <Meta
          avatar={<Avatar src={props.user.picture.thumbnail} />}
          title={upperCaseFirst(props.user.name.first) + ' ' + upperCaseFirst(props.user.name.last)}
          description={'@' + props.user.login.username}
        />
      </Card>
    </Col>
  )
}

const UserList = (props) => {
  return (
    <Layout className="user-list-container">
      <Row>
        { props.users.map(user => <User key={user.login.uuid} user={user}></User>) }
      </Row>
    </Layout>
  )
}

export default UserList
