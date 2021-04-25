import React from 'react'
import { Col, Card, Typography, Avatar } from 'antd'
import { upperCaseFirst } from '../helpers/string'

const { Meta } = Card
const { Text } = Typography

const UserCard = ({ user, onClick }) => {
  if (user.hide) {
    return <></>
  }

  user.fullName = upperCaseFirst(user.name.first) + ' ' + upperCaseFirst(user.name.last)
  return (
    <Col className="user-container" span="6">
      <Card onClick={ onClick }>
        <Meta
          avatar={<Avatar src={user.picture.thumbnail} />}
          title={
            <div>
              <Text>{user.fullName}</Text>
              <Text disabled className="text-small">{' @' + user.login.username}</Text>
            </div>
          }
          description={
            <Text>{user.email}</Text>
          }
        />
      </Card>
    </Col>
  )
}

export default UserCard
