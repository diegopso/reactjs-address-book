import React from 'react'
import { Layout, Row, Col, Input, Button } from 'antd'
import logo from '../assets/img/logo.svg'
import { SettingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { search } from '../store/pagination/actions'

const { Search } = Input

const Header = () => {
  const dispatch = useDispatch()
  return (
    <Layout className="main-header-container">
      <header className="main-header">
        <Row>
          <Col xs={6} span={2}>
            <div className="logo">
              <img src={logo} className="header-logo" alt="Logo" />
            </div>
          </Col>
          <Col xs={13} span={12}>
            <Search
              className="search"
              placeholder="Enter contact name"
              allowClear
              onSearch={value => dispatch(search(value))}
              size="large" />
          </Col>
          <Col xs={1} span={8}></Col>
          <Col xs={4} span={2}>
            <Link className="more" to="/settings">
              <Button
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
