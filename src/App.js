import React from 'react'
import { Header, UserList } from './components'
import './assets/css/App.css'
import { Layout } from 'antd'

const data = {
  results: [
    {
      name: {
        first: 'brad',
        last: 'gibson'
      },
      email: 'brad.gibson@example.com',
      login: {
        uuid: '155e77ee-ba6d-486f-95ce-0e0c0fb4b919',
        username: 'silverswan131'
      },
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
      }
    }
  ],
  info: {
    seed: 'fea8be3e64777240',
    results: 1,
    page: 1,
    version: '1.3'
  }
}

function App () {
  return (
    <Layout>
      <Header></Header>
      <UserList data={data}></UserList>
    </Layout>
  )
}

export default App
