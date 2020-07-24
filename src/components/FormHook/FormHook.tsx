import React, { useEffect } from "react";
import Form from "antd/lib/form";
import { Input, Button } from "antd";
import styled from "styled-components";
const FormHook = (props: any) => {
  const { handleForm, handleSubmit } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    handleForm(form);
  }, [form, handleForm]);
  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Firstname"
        name="firstname"
        rules={[{ required: true, message: "Firstname is required" }]}
      >
        <Input placeholder="Please input" />
      </Form.Item>
      <ButtonWrapper htmlType="submit" color="primary" type="primary">
        Submit
      </ButtonWrapper>
    </Form>
  );
};

export default FormHook;

const ButtonWrapper = styled(Button)`
  margin-right: 10px;
`;
