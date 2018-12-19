import React, { Component } from 'react'
import { Table, Divider, Tag, Modal, Button, Pagination } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '门店名称',
    dataIndex: 'dianM',
    key: 'dianM',
  }, {
    title: '住址',
    dataIndex: 'diZhi',
    key: 'diZhi',
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  }, {
    title: '门店图片',
    dataIndex: 'MDing',
    key: 'MDing',
  }, {
    title: '收入',
    dataIndex: 'income',
    key: 'income',
  }, {
    title: '门店状态',
    dataIndex: 'Mstate',
    key: 'Mstate',
  }, {
    title: '门店物品数量',
    dataIndex: 'Mnum',
    key: 'Mnum',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button type="primary" onclick="showModal()" >sOpen Modal</Button>
        <Button onclick="this.showModal()">点击这里</Button>
      </span>
    ),
  }];
const data = [{
  key: '1',
  id: '1',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '1',
  id: '1',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '1',
  id: '1',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '1',
  id: '1',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '1',
  id: '1',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}];
function info() {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() { },
  });
}

 showModal= () =>{
  console.log('kkkkkk')
  this.setState({
    visible: true,
  });
}
 
export default class List extends Component {
  state = { visible: false }
  render() {
    const { showModal } = this.props;
    return (
      <div>
        <Table columns={columns} dataSource={data} />
        <Pagination defaultCurrent={1} total={50} />
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    )
  }
}
