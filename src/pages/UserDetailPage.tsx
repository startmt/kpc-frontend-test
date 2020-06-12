import React, { Fragment, useMemo } from "react";
import { Section } from "../components/Section";
import { Card, Form } from "antd";
import { UserDetailForm } from "../components/UserDetailForm";
import { UserDetailTable } from "../components/UserDetailTable";
import { ColumnProps } from "antd/lib/table";
import moment from "moment";
import { UserProps } from "../features/user/model";
import { useUser } from "../features/user/use-user-store";

export interface UserDataColumn extends ColumnProps<UserProps> {
  editable?: boolean;
}

const defaultValues = {
  firstname: undefined,
  lastname: undefined,
  birthDate: undefined,
  gender: undefined,
  nationality: undefined,
  passport: undefined,
  phone: undefined,
  phonecode: "+66",
  salary: undefined,
  title: "Mr.",
};

const UserDetailPage: React.FC = () => {
  const [form] = Form.useForm();
  const { userData, editData, handleDeleteUser, handleEditForm, handleCancelForm } = useUser()
  const _handleEditForm = (index: number) => {
    handleEditForm(index)
    form.setFieldsValue({
      ...editData,
      birthDate: moment(editData?.birthDate),
    });
  };
  const _handleCancelForm = () => {
    handleCancelForm();
    form.setFieldsValue(defaultValues);
  };
  const _handleDeleteUser = (index: number) => {
    handleDeleteUser(index)
    form.setFieldsValue(defaultValues);
  };
  const columns: UserDataColumn[] = useMemo(() => [
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
            <a
              onClick={() => {
                _handleEditForm(record.key);
              }}
            >
              EDIT
            </a>
            /
            <a
              onClick={() => {
                _handleDeleteUser(record.key);
              }}
            >
              DELETE
            </a>
          </Fragment>
        );
      },
    },
  ], [userData]);

  return (
    <div className="container">
      <Section size={2}>
        <Card>
          <UserDetailForm onCancel={_handleCancelForm} form={form} />
        </Card>
      </Section>
      <Section size={2}>
        <Card>
          <UserDetailTable columns={columns} dataSource={userData} />
        </Card>
      </Section>
    </div>
  );
};

export default UserDetailPage;
