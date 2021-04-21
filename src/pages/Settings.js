import React from 'react'
import { Layout, PageHeader, Breadcrumb, Divider, List, Typography, Switch } from 'antd'
import { HomeOutlined, FlagTwoTone } from '@ant-design/icons'
import { MinimalHeader } from '../components'
import Flag from 'react-flagkit'

const nationalities = [
  { code: 'CH', name: 'Switzerland' },
  { code: 'ES', name: 'Spain' },
  { code: 'FR', name: 'France' },
  { code: 'GB', name: 'United Kingdom' }
]

const Settings = () => {
  return (
    <div>
      <MinimalHeader></MinimalHeader>
      <Layout className="internal-container">
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
          onBack={() => window.history.back()}
          className="site-page-header"
          title="Settings"
        />
        <div>
          <Divider orientation="left"><FlagTwoTone twoToneColor="#B398DB" /> Nationalities</Divider>
          <List
            dataSource={nationalities}
            renderItem={item => (
              <List.Item>
                <Switch defaultChecked /> <Flag country={ item.code } size="24" /> <Typography.Text>{item.name}</Typography.Text>
              </List.Item>
            )}
          />
        </div>
      </Layout>
    </div>
  )
}

export default Settings
