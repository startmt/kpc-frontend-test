import React from "react";
import { Form, DatePicker } from "antd";
import moment, { Moment } from "moment";
type BirthDayInputProps = {};
const BirthDayInput: React.FC<BirthDayInputProps> = () => {
  const disabledDate = (current: Moment) => {
    // Can not select days before today and today
    return current > moment()
  };
  return (
    <Form.Item
      name="birthDate"
      label="Birthday"
      rules={[{ required: true, message: "Birthday is required" }]}
      wrapperCol={{ span: 12, offset: 2 }}
    >
      <DatePicker allowClear disabledDate={disabledDate} />
    </Form.Item>
  );
};

export default BirthDayInput;
