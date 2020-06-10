import React, { useEffect, Fragment } from "react";
import { Form, Row, Col, Button, Input } from "antd";
import styled from "styled-components";
import {
  NationalitySelect,
  TitleSelect,
  PhoneInputSelect,
  GenderSelect,
  BirthDayInput,
} from "../Input";
import moment from "moment";
import { FormInstance } from "antd/lib/form";
import { CitizenInput } from "../Input/CitizenInput";
import { UserProps } from "../../features/user/model";
import { useUser } from "../../features/user/use-user-store";
type UserDetailFormProps = {
  form: FormInstance;
  onCancel: Function;
};
const UserDetailForm: React.FC<UserDetailFormProps> = ({ form, onCancel }) => {
  const { editData, isEdit, handleUpdateUser, handleAddUser } = useUser()
  const handleCitizen = (citizenId: string) => {
    if (citizenId !== "") {
      form.setFieldsValue({ citizenId: citizenId });
    }
  };
  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        ...editData,
        birthDate: moment(editData?.birthDate),
      });
    }
  }, [editData, form]);
  const onFinish = (values: any) => {
    if (isEdit) {
      const data: UserProps = {
        ...values,
        key: editData?.key,
        birthDate: values.birthDate.toString(),
      };
      handleUpdateUser(data);
      form.resetFields();
    } else {
      handleAddUser(values);
      form.resetFields();
    }
  };
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
            rules={[{ required: true, message: "Firstname is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            name="lastname"
            label="Lastname"
            rules={[{ required: true, message: "Lastname is required" }]}
          >
            <Input placeholder="Please input" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={10}>
          <BirthDayInput />
        </Col>
        <Col span={14}>
          <NationalitySelect />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <GenderSelect />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="citizenId"
            label="CitizenId"
            rules={[{ required: true, message: "CitizenId is required" }]}
          >
            <CitizenInput
              onChange={handleCitizen}
              defaultValue={editData?.citizenId}
            />
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
            rules={[{ required: true, message: "Salary No is required" }]}
          >
            <Input min={0} type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16} justify="end">
        <Col>
          {isEdit && (
            <ButtonWrapper onClick={onCancel} type="default">
              Cancel
            </ButtonWrapper>
          )}
          <ButtonWrapper htmlType="submit" color="primary" type="primary">
            {isEdit ? <Fragment>Save</Fragment> : <Fragment>Submit</Fragment>}
          </ButtonWrapper>
        </Col>
      </Row>
    </Form>
  );
};

export default UserDetailForm;

const ButtonWrapper = styled(Button)`
  margin-right: 10px;
`;
