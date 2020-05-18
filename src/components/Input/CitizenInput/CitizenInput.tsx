import { Input, Row, Col } from "antd";
import React, { useState, useEffect } from "react";

type CitizenInputProps = {
  onChange: Function;
  defaultValue?: string;
};
const CitizenInput: React.FC<CitizenInputProps> = ({
  onChange,
  defaultValue,
}) => {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  useEffect(() => {
    if (defaultValue) {
      setOne(defaultValue?.slice(0, 1));
      setTwo(defaultValue?.slice(1, 5));
      setThree(defaultValue?.slice(5, 8));
      setFour(defaultValue?.slice(8, 12));
      setFive(defaultValue?.slice(12, 13));
    } else {
      setOne("");
      setTwo("");
      setThree("");
      setFour("");
      setFive("");
    }
  }, [defaultValue]);
  useEffect(() => {
    if (
      one.length + two.length + three.length + four.length + five.length ===
      13
    ) {
      onChange(one + two + three + four + five);
    }
  }, [one, two, three, four, five, onChange]);
  return (
    <Input.Group>
      <Row gutter={8}>
        <Col span={2}>
          <Input
            value={one}
            minLength={1}
            maxLength={1}
            onChange={(e) => setOne(e.target.value)}
            placeholder="X"
          />
        </Col>
        -
        <Col span={4}>
          <Input
            value={two}
            minLength={4}
            maxLength={4}
            onChange={(e) => setTwo(e.target.value)}
            placeholder="XXXX"
          />
        </Col>
        -
        <Col span={3}>
          <Input
            value={three}
            minLength={3}
            maxLength={3}
            onChange={(e) => setThree(e.target.value)}
            placeholder="XXX"
          />
        </Col>
        -
        <Col span={4}>
          <Input
            value={four}
            minLength={4}
            maxLength={4}
            onChange={(e) => setFour(e.target.value)}
            placeholder="XXXX"
          />
        </Col>
        -
        <Col span={2}>
          <Input
            value={five}
            minLength={1}
            maxLength={1}
            onChange={(e) => setFive(e.target.value)}
            placeholder="X"
          />
        </Col>
      </Row>
    </Input.Group>
  );
};

export default CitizenInput;
