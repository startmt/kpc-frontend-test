import React from "react";
import { PaginationProps } from "antd/lib/pagination";

type PaginationType = {
  current: number;
  page: number;
  type: "page" | "prev" | "next" | "jump-prev" | "jump-next";
  originalElement: React.ReactElement<HTMLElement>;
};
const Pagination: React.FC<PaginationType> = ({
  current,
  type,
  originalElement,
}) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};

export default Pagination;
