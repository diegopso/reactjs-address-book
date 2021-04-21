import React from 'react'
import { Layout, Row, Col, Input, Button } from 'antd'
import logo from '../assets/img/logo.svg'
import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Search } = Input
const onSearch = value => console.log(value)

const Header = () => {
  return (
    <Layout>
      <header className="main-header">
        <Row>
          <Col span={2}>
            <div className="logo">
              <img src={logo} className="header-logo" alt="Logo" />
            </div>
          </Col>
          <Col span={12}>
            <Search
              className="search"
              placeholder="Enter contact name"
              allowClear
              onSearch={onSearch}
              size="large" />
          </Col>
          <Col span={8}></Col>
          <Col span={2}>
            <Link to="/settings">
              <Button
                className="more"
                type="default"
                shape="circle"
                size="large"
                alt="More options"
                icon={<SettingOutlined />} />
            </Link>
          </Col>
        </Row>
      </header>
    </Layout>
  )
}

export default Header
