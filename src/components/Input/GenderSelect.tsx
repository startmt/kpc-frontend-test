import React from "react";
import { Form, Radio } from "antd";
import styled from "styled-components";
const options = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
  { label: "unisex", value: "unisex" },
];
const GenderSelect: React.FC = () => {
  return (
    <Form.Item
      name="gender"
      label="Gender"
      rules={[{ required: true, message: "Gender is required" }]}
    >
      <GenderRadioGroup size="large" options={options} />
    </Form.Item>
  );
};

export default GenderSelect;

const GenderRadioGroup = styled(Radio.Group)`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
