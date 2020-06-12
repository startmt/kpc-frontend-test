import { useState, useMemo } from "react";
import { useUser } from "../../features/user/use-user-store";
import { TableRowSelection } from "antd/lib/table/interface";

import { UserProps } from "../../features/user/model";

export const useUserDetailTable = (dataSource: UserProps[] | undefined) => {
    const [key, setKey] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const [current, setCurrent] = useState(1);
    const { handleDeleteUser } = useUser()
    const handlePagination = (page: number, pageSize?: number | undefined) => {
        setCurrent(page);
    };

    const rowSelection: TableRowSelection<any> | undefined = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            setSelectedRow(selectedRows);
            setKey(selectedRowKeys);
        },
        selectedRowKeys: key,
    };
    const handleSelectedDelete = () => {
        selectedRow.map((item: UserProps) =>
            handleDeleteUser(item.key)
        );
    };
    const getData = useMemo(() => (current: number) => {
        const data =
            dataSource ||
            [].sort((prev: UserProps, next: UserProps) => prev.key - next.key);
        console.log(current, data)
        return data.slice((current - 1) * 5, (current - 1) * 5 + 5);
    }, [dataSource, current]);
    return { key, current, rowSelection, handleSelectedDelete, handlePagination, getData }
}