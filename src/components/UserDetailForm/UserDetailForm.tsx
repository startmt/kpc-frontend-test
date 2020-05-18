import React, { useEffect, Fragment, useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Input,
  DatePicker,
  Radio,
  InputNumber,
} from "antd";
import styled from "styled-components";
import {
  NationalitySelect,
  TitleSelect,
  PhoneInputSelect,
  GenderSelect,
} from "../Input";
import { useSelector, useDispatch } from "react-redux";
import {
  add,
  updateUser,
  selectUserEdit,
  UserProps,
  selectisEdit,
} from "../../features/user/slice";
import moment from "moment";
import { FormInstance } from "antd/lib/form";
import { CitizenInput } from "../Input/CitizenInput";
type UserDetailFormProps = {
  form: FormInstance;
  onCancel: Function;
};
const UserDetailForm: React.FC<UserDetailFormProps> = ({ form, onCancel }) => {
  const editData = useSelector(selectUserEdit);
  const isEdit = useSelector(selectisEdit);
  const handleCitizen = (citizenId: string) => {
    if (citizenId !== "") {
      form.setFieldsValue({ citizenId: citizenId });
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        ...editData,
        birthDate: moment(editData?.birthDate),
      });
    }
  }, [editData]);
  const onFinish = (values: any) => {
    if (isEdit) {
      console.log(values);
      const data: UserProps = {
        ...values,
        index: editData?.index,
        birthDate: values.birthDate.toString(),
      };
      dispatch(updateUser({ data }));
      form.resetFields();
    } else {
      dispatch(add({ data: values }));
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
          <Form.Item
            name="birthDate"
            label="Birthday"
            initialValue={editData?.birthDate || ""}
            rules={[{ required: true, message: "Birthday is required" }]}
            wrapperCol={{ span: 12, offset: 2 }}
          >
            <DatePicker allowClear />
          </Form.Item>
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
