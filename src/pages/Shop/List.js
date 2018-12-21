import React from 'react';
import { Table, Divider, Tag, Modal, Form, Select, Input, Button, } from 'antd';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

const FormItem = Form.Item;
const Option = Select.Option;
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
  key: '2',
  id: '2',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '3',
  id: '3',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '4',
  id: '4',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}, {
  key: '5',
  id: '5',
  dianM: '西北旺地铁',
  diZhi: '北京市西北旺地铁站',
  city: '北京市',
  MDing: '蹄片',
  income: 0,
  Mstate: '门店关闭',
  Mnum: 0,
}];

@Form.create()
class ShopList extends React.PureComponent {
  columns = [{
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
        <Button type="primary" onClick={this.showModal} >编辑</Button>
        <a href="javascript:void(0);" onClick={this.showModal}>删除</a>
      </span>
    ),
  }];
  state = {
    visible: false,
    confirmDirty: false,
    autoCompleteResult: [],
  }
 
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    // const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

    const { getFieldDecorator } = this.props.form;
    return <React.Fragment>
      <Table columns={this.columns} dataSource={data} pagination={{ pageSize: 3 }}></Table>
      <Modal
        title="店铺信息编辑"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="店铺名称"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('dianM', {
              rules: [{ required: true, message: '请输入' }],
            })(
              <Input placeholder="请输入" />
            )}
          </FormItem>
          <FormItem
            label="住址"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('address', {
              rules: [{ required: true, message: '请输入' }],
            })(
              <Input placeholder="请输入" />
            )}
          </FormItem>
          <FormItem
            label="城市"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('city', {
              rules: [{ required: true, message: '请输入' }],
            })(
              <Select placeholder="请输入" >
                <Option value="北京">北京</Option>
                <Option value="南苑">南苑</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            label="门店状态"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('StateOfTheStore', {
              rules: [{ required: true, message: '请输入' }],
            })(
              <Input placeholder="请输入" />
            )}
          </FormItem>
          <FormItem
            label="店铺信息"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            {getFieldDecorator('StoreInformation', {
              rules: [{ required: true, message: '请输入' }],
            })(
              <Input placeholder="请输入" />
            )}
          </FormItem>
        </Form>
      </Modal>
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </React.Fragment>
  }
}


export default ShopList;
