import React, { Component } from 'react';
import { 
    Modal, 
    Form, 
    Input, 
    Button,
    Radio,
    DatePicker } from 'antd';
import { 
    UserOutlined, 
    EyeInvisibleOutlined, 
    MailOutlined, 
    MobileOutlined,
    CalendarOutlined } from '@ant-design/icons';
import USER_API from 'apis/userAPI';

class SignUp extends Component {
    formRef = React.createRef()

    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible,
        }
        console.log('in consttructor');
    }

    _submit = () => {
        let $form = this.formRef.current
        $form.validateFields().then(values => {
            const data = {
                'first_name': values.first_name,
                'last_name': values.last_name,
                'email': values.email,
                'username': values.username,
                'password': values.password,
                'user_profile': {
                    'mobile': values.mobile,
                    'date_of_birth': values.dob.format("YYYY-MM-DD"),
                    'gender': values.gender[0],
                }
            };
            console.log(data);
            USER_API.createUser(data).then(response => {
                $form.resetFields();
                window.location.reload();
            })
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        })
        this.props.callback(false);
        Modal.destroyAll();
    }

    render() {
        return (
            <div>
                <Modal
                    title="Sign Up"
                    visible={this.state.visible}
                    okText= 'Sign Up'
                    cancelText= 'Cancel'
                    onOk={this._submit}
                    onCancel={this.handleCancel.bind(this)}
                    okButtonProps={ this._submit }
                    width = {400}
                    destroyOnClose= {true}
                    footer={[
                        <Button type="primary" form="signup_form" key="submit" htmlType="submit">
                            Sign Up
                        </Button>
                        ]}
                    >
                        <Form name='signup_form' onFinish={this._submit} ref={this.formRef}>
                            <Form.Item
                                name="first_name"
                                rules={[{ required: true, message: 'Please input first name!' }]}
                            >
                                <Input size="large" placeholder="First Name" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="last_name"
                                rules={[{ required: true, message: 'Please input last name!' }]}
                            >
                                <Input size="large" placeholder="Last Name" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input email!' }]}
                            >
                                <Input size="large" placeholder="Email" prefix={<MailOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="mobile"
                                rules={[{ required: true, message: 'Please input mobile number!' }]}
                            >
                                <Input size="large" placeholder="Mobile No" prefix={<MobileOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="dob"
                                rules={[{ required: true, message: 'Please input DOB!' }]}
                            >
                                <DatePicker placeholder="DOB" prefix={<CalendarOutlined />}/>
                            </Form.Item>

                            <Form.Item
                                name="gender"
                            >
                                <Radio.Group>
                                    <Radio.Button value="Male">Male</Radio.Button>
                                    <Radio.Button value="Female">Female</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input UserName!' }]}
                            >
                                <Input size="large" placeholder="UserName" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input Password!' }]}
                            >
                                <Input size="large" placeholder="Password" type="password" prefix={<EyeInvisibleOutlined />} />
                            </Form.Item>
                        </Form>
                </Modal>
            </div>
        );
    }
}

export default SignUp;