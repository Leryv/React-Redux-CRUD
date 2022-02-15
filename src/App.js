import React, { Component } from 'react'
import { Row,Col } from "antd";
import HomeComponent from './components/HomeComponent';
import "antd/dist/antd.less";

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Row>
          <Col span={16} offset={4}>
            <HomeComponent />
          </Col>
        </Row>
      </div>
    )
  }
}

