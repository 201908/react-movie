import React, { Component } from 'react'
import Header from './Header/Header';
import {
  CellHeader,
  CellBody,
  Form,
  FormCell,
  Input,
  Label,
  Select
} from 'react-weui';
// import Page from '../../component/page';
// import iconSrc from './images/icon.png';
// import vcodeSrc from './images/vcode.jpg';
// import avatarSrc from './images/avatar.jpg';

class Add extends Component {
  render() {
    return (
      <div>
        <Header title="新增" />
        <Form>
          <FormCell>
            <CellHeader>
              <Label>影片</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请输入影片" />
            </CellBody>
          </FormCell>
          <FormCell select selectPos="after">
            <CellHeader>
              <Label>选择地点</Label>
            </CellHeader>
            <CellBody>
              <Select data={[
                {
                  value: 1,
                  label: '家里'
                },
                {
                  value: 2,
                  label: '影院'
                }
              ]} />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>评分</Label>
            </CellHeader>
            <CellBody>
              <Input type="number" placeholder="请输入评分" />
            </CellBody>
          </FormCell>
        </Form>
      </div>
    )
  }
}
export default Add
