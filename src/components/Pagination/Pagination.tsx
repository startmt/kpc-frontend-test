import React from "react";
import { PaginationProps } from "antd/lib/pagination";

const Pagination: React.FC<PaginationProps> = ({ ...rest }) => {
  return <Pagination {...rest} />;
};

export default Pagination;
