import React, { Fragment, useEffect } from "react";
import { Section } from "../components/Section";
import { Card, Form } from "antd";
import { UserDetailForm } from "../components/UserDetailForm";
import { UserDetailTable } from "../components/UserDetailTable";
import { ColumnProps } from "antd/lib/table";
import moment from "moment";
import {
  UserProps,
  editUser,
  getUser,
  selectUserData,
  selectUserEdit,
  deleteUser,
  cancel,
} from "../features/user/slice";
import { useDispatch, useSelector } from "react-redux";

interface UserDataColumn extends ColumnProps<UserProps> {
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
  const dispatch = useDispatch();
  const editData = useSelector(selectUserEdit);
  const [form] = Form.useForm();
  const userData = useSelector(selectUserData);

  const handleEditForm = (index: number) => {
    dispatch(editUser({ index: index }));
    form.setFieldsValue({
      ...editData,
      birthDate: moment(editData?.birthDate),
    });
  };
  const handleCancelForm = () => {
    dispatch(cancel());
    form.setFieldsValue(defaultValues);
  };
  const handleDeleteUser = (index: number) => {
    dispatch(deleteUser({ index: index }));
    form.setFieldsValue(defaultValues);
  };
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
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
            <a
              onClick={() => {
                handleEditForm(record.index);
              }}
            >
              EDIT
            </a>
            /
            <a
              onClick={() => {
                handleDeleteUser(record.index);
              }}
            >
              DELETE
            </a>
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Section size={2}>
        <Card title="">
          <UserDetailForm onCancel={handleCancelForm} form={form} />
        </Card>
      </Section>
      <Section size={2}>
        <Card title="">
          <UserDetailTable columns={columns} dataSource={userData} />
        </Card>
      </Section>
    </div>
  );
};

export default UserDetailPage;
