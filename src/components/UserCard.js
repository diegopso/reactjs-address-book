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
    <Col className="user-container" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Card onClick={ onClick }>
        <Meta
          avatar={<Avatar src={user.picture.thumbnail} />}
          title={
            <div>
              <Text className="truncate-text">{user.fullName}</Text>
              <Text disabled className="text-small truncate-text">{' @' + user.login.username}</Text>
            </div>
          }
          description={
            <Text className="truncate-text">{user.email}</Text>
          }
        />
      </Card>
    </Col>
  )
}

export default UserCard
