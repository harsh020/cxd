import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { getUser } from 'redux/user/user.action';
import { connect } from 'react-redux';
import TOKEN_API from 'apis/tokenAPI';
import HELPERS from 'utils/helpers';

class SignIn extends Component {
    formRef = React.createRef()

    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible,
        }
    }

    _submit = () => {
        let $form = this.formRef.current
        let responseData;
        $form.validateFields().then(values => {
            values.username = values.username
            values.password = values.password
            const data = values;
            console.log(data);
            TOKEN_API.getTokens(data).then(response => {
                $form.resetFields();
                // window.location.reload(false);

                const status = response.status;
                if(status === 200) {
                    HELPERS.localStorageServices.storeTokens(response.data);
                    console.log("Log In success!");
                    this.props.getUser();
                    localStorage["isLoggedIn"] = true;
                    console.log(localStorage["isLoggedIn"]);
                    window.location.assign('/app/');
                }
                else if(status === 401) {
                    console.log(response.statusText);
                }
            })
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
        this.props.callback(false);
        Modal.destroyAll();
    };

    render() {
        return (
            <div>
                <Modal
                    title="Sign In"
                    visible={this.state.visible}
                    okText= 'Sign In'
                    cancelText= 'Cancel'
                    onOk={this._submit}
                    onCancel={this.handleCancel.bind(this)}
                    okButtonProps={ this._submit }
                    width = {400}
                    destroyOnClose= {true}
                    footer={[
                        <Button type="primary" form="signin_form" key="submit" htmlType="submit">
                            Sign In
                        </Button>
                        ]}
                    >
                        <Form ref={this.formRef} name='signin_form' onFinish={this._submit}>
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
                        {/* <div style={{display: }}>Unauthorized User</div> */}
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       user: state.user,
    }
};

const mapDipatchToProps = {
    getUser,
};

export default connect(
    mapStateToProps,
    mapDipatchToProps,
)(SignIn);