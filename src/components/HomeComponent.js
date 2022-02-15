import React from 'react'
import CreateList from './CreateList'
import TableComponent from './TableComponent'
import { Card } from "antd"; 

function HomeComponent() {
  return (
    <div>
        <Card title="Todo List" style={{ marginTop: 64 }}>
            <CreateList />
            <TableComponent/>
        </Card>
    </div>
  )
}

export default HomeComponent