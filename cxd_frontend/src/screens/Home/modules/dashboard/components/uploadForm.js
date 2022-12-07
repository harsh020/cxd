import React from 'react';
import { Form, Input, Button, Upload, Spin } from 'antd';
import { UserOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import '../style/dashboard.style.css';

import HELPERS from 'utils/helpers';
import diagnose from 'model/index';
import DIAGNOSIS_API from 'apis/diagnosisAPI';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 17 },
  };
const tailLayout = {
    wrapperCol: { offset: 4, span: 17 },
};


class UPLOAD_FORM extends React.Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            diagnosing: false,
        }
    }

    beforeUpload = file => {
        this.getImageDataURL(file);
        return false;
    }

    getImageDataURL = info => {
        // if (info.file.status === 'uploading') {
        //   this.setState({ loading: true });
        //   return;
        // }
        // if (info.file.status === 'done') {
        //   // Get this url from response in real world.
        //   console.log(info.file.originFileObj);
        //   HELPERS.image.getBase64(info.file.originFileObj, imageUrl =>
        //     this.setState({
        //       imageUrl,
        //       loading: false,
        //     }),
        //   );
        // }
        console.log(info);
        console.log(info.originFileObj);
        HELPERS.image.getBase64(info, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
      };

    _switchDiagnosignState() {
        console.log(this.state.diagnosing);
        this.setState({ diagnosing: !this.state.diagnosing })
    }

    _submit = () => {
        const imgURL = this.state.imageUrl;
        let $form = this.formRef.current
        this._switchDiagnosignState()
        diagnose(imgURL, this._switchDiagnosignState.bind(this)).then( res => {
            $form.validateFields().then(values => {
                const data = {
                    'name': values.name,
                    'diagnostic': values.diagnostic,
                    'email': values.email,
                    'result': res,
                };
                console.log(data);
                DIAGNOSIS_API.createDiagnosis(data).then(response => {
                    $form.resetFields();
                    window.location.reload();
                })
            })
        })
    }

    render(){ 
        const { loading, imageUrl } = this.state;
        const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
        );

        return(
            <div>
                <div>
                    <span><h1>Upload Chest X-ray image</h1></span>
                </div>
                <br />
                <Form ref={this.formRef} {...layout} name='form' onFinish={() => {this._submit()}}>
                    <Form.Item
                        name="name"
                        label='Name'
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Input size="default" placeholder="Full Name" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item
                        name="diagnostic"
                        label='Diagnostic'
                    >
                        <Input size="default" placeholder="Diagnostic Center" />
                    </Form.Item>
                    
                    <Form.Item 
                        name="upload"
                        label='Upload'
                        rules={[{ required: true, message: 'Please input image!' }]}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={this.beforeUpload}
                            // onChange={this.getImageDataURL}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                {
                    this.state.diagnosing &&
                    <div style={{ 
                        position: "absolute", 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        top: '0',
                        height: '100%',
                        width: '100%',
                        }}>
                        <Spin tip="Loading..." size="large" />
                    </div>
                }
            </div>
        );
    }
}

export default UPLOAD_FORM;
