import { Button, Card } from 'antd'
import React from 'react'

interface IProps {}

const Login: React.FC<IProps> = (props) => {
  return (
    <Card>
      <Button type='primary'>登录</Button>
    </Card>
  )
}

export default Login
