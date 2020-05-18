import React, { Fragment, useState } from "react";
import { Section } from "../components/Section";
import { Card, Form } from "antd";
import { UserDetailForm } from "../components/UserDetailForm";
import { UserDetailTable } from "../components/UserDetailTable";
import { ColumnProps } from "antd/lib/table";
import { UserProps } from "../features/user/slice";

interface UserDataColumn extends ColumnProps<UserProps> {
  editable?: boolean;
}

const dataSource = [
  {
    title: "Mrs.",
    firstname: "ชาญศิลป์",
    gender: "male",
    lastname: "ทองคำ",
    birthDate: "2020-05-20T14:07:53.213Z",
    nationality: "thai",
    passport: "15",
    phone: "0647972333",
    phonecode: "+66",
    salary: "32000",
    index: 0,
  },
  {
    title: "Mrs.",
    firstname: "ชาญศิลป์",
    lastname: "ทองคำ",
    birthDate: "2020-05-20T14:07:53.213Z",
    nationality: "thai",
    passport: "15",
    phone: "0647972333",
    phonecode: "+66",
    salary: "32000",
    gender: "male",
    index: 1,
  },
  {
    title: "Mrs.",
    firstname: "ชาญศิลป์",
    lastname: "ทองคำ",
    birthDate: "2020-05-20T14:07:53.213Z",
    nationality: "thai",
    passport: "15",
    phone: "0647972333",
    phonecode: "+66",
    salary: "32000",
    gender: "male",
    index: 2,
  },
  {
    title: "Mrs.",
    firstname: "ชาญศิลป์",
    lastname: "ทองคำ",
    birthDate: "2020-05-20T14:07:53.213Z",
    nationality: "thai",
    passport: "15",
    phone: "0647972333",
    phonecode: "+66",
    salary: "32000",
    gender: "male",
    index: 3,
  },
];
const UserDetailPage: React.FC = () => {
  const columns: UserDataColumn[] = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (value: any, record: UserProps, index: number) => {
        return <div> {`${record.firstname} ${record.lastname}`}</div>;
      },
    },
    {
      title: "GENDER",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "MOBILE PHONE",
      key: "phone",
      render: (value: any, record: UserProps, index: number) => {
        return <div> {`${record.phonecode} ${record.phone}`}</div>;
      },
    },
    {
      title: "NATIONALITY",
      key: "nationality",
      render: (_: any, record: UserProps, index: number) => {
        return <div> {record.nationality.toUpperCase()}</div>;
      },
    },
    {
      render: (_: any, record: UserProps) => {
        return (
          <Fragment>
            <a onClick={() => {}}>Edit</a>
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Section size={2}>
        <Card title="">
          <UserDetailForm />
        </Card>
      </Section>
      <Section size={2}>
        <Card title="">
          <UserDetailTable columns={columns} dataSource={dataSource} />
        </Card>
      </Section>
    </div>
  );
};

export default UserDetailPage;
