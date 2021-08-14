import React from 'react'
import { Breadcrumb } from 'antd';

export default function BreadCrumb() {
    return (
        <Breadcrumb style={{ margin: '16px 0 0 16px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}
