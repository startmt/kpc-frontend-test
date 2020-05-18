import React from "react";
import { Form, Row, Col, Button, Input, Select, DatePicker, Radio } from "antd";
import styled from "styled-components";
import { NationalitySelect, TitleSelect, PhoneInputSelect } from "../Input";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserData,
  update,
  addUserToStorage,
  UserProps,
} from "../../features/user/slice";

type UserDetailFormProps = {
  data?: UserProps;
};
const UserDetailForm: React.FC<UserDetailFormProps> = ({ data }) => {
  const [form] = Form.useForm();
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    if (data) {
    } else {
      console.log(userData, values);
      addUserToStorage(values);
    }
  };
  const options = [
    { label: "male", value: "male" },
    { label: "female", value: "female" },
    { label: "unisex", value: "unisex" },
  ];
  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={16}>
        <Col span={4}>
          <TitleSelect />
        </Col>
        <Col span={10}>
          <Form.Item
            label="Firstname"
            name="firstname"
            initialValue={data?.firstname || ""}
            rules={[{ required: true, message: "Firstname is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="lastname"
            label="Lastname"
            initialValue={data?.lastname || ""}
            rules={[{ required: true, message: "Lastname is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={10}>
          <Form.Item
            name="birthDate"
            label="Birthday"
            rules={[{ required: true, message: "Birthday is required" }]}
            wrapperCol={{ span: 12, offset: 2 }}
          >
            <BirthDayWrapper />
          </Form.Item>
        </Col>
        <Col span={14}>
          <NationalitySelect />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Gender is required" }]}
          >
            <GenderRadioGroup size="large" options={options} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <PhoneInputSelect />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Passport No"
            name="passport"
            rules={[{ required: true, message: "Passport No is required" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Expected Salary"
            name="salary"
            rules={[{ required: true, message: "Salary is required" }]}
          >
            <Input suffix="Baht" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} justify="end">
        <Col>
          <Button htmlType="submit" color="primary" type="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

const BirthDayWrapper = styled(DatePicker)`
  align-items: center !important;
`;
export default UserDetailForm;

const GenderRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
