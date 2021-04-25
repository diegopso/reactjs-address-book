import React from 'react'
import { Modal, Layout, Row, Col, Image, Typography } from 'antd'
import { upperCaseFirst } from '../helpers/string'
import { EnvironmentOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

const DetailsModal = ({ user, visible, onDismiss }) => {
  if (!user.location) {
    return <></>
  }

  return (
    <Modal
      className="user-details"
      title="User Details"
      visible={visible}
      onCancel={onDismiss}
      footer={null}>
      <Layout>
        <Row>
          <Col span={8}>
            <Image src={user.picture.large} width={'80%'} preview={false} />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Title level={2}>{upperCaseFirst(user.name.first) + ' ' + upperCaseFirst(user.name.last)}</Title>
              </Col>
              <Col span={2}>
                <PhoneOutlined />
              </Col>
              <Col span={22}>
                <Text>{user.phone}</Text>
              </Col>
              <Col span={2}>
                <WhatsAppOutlined />
              </Col>
              <Col span={22}>
                <Text>{user.cell}</Text>
              </Col>
              <Col span={2}>
                <EnvironmentOutlined />
              </Col>
              <Col span={22}>
                <Text>{user.location.street.name} {user.location.street.number}</Text><br />
                <Text>{user.location.postcode} {user.location.city}</Text><br />
                <Text>{user.location.state}, {user.location.country}</Text>
              </Col>
            </Row>

          </Col>
        </Row>
      </Layout>
    </Modal>
  )
}

export default DetailsModal
