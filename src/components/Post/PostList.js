import { Table } from "antd";
import React from "react";
import styled from "styled-components";
import { IoMdAttach } from "react-icons/all";

const columns = [
  {
    title: "No.",
    dataIndex: "No",
    key: "index",
    render: (text, record, index) => <>{index + 1}</>,
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "작성자",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "작성일",
    dataIndex: "created_date",
    key: "created_date",
  },
  {
    title: "첨부파일",
    dataIndex: "attatched",
    key: "attatched",
    render: (text, record) =>
      record.attatched && (
        <IoMdAttach
          style={{
            transform: "translateY(5px) rotate(45deg)",
            fontSize: "14px",
          }}
        />
      ),
  },
  {
    title: "조회수",
    dataIndex: "hits",
    key: "hits",
  },
];

const data = [
  {
    key: "1",
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: false,
    hits: 1234,
  },
  {
    key: "2",
    title: "여기는 제목",
    author: "작성자다",
    created_date: "2020-12-26",
    attatched: true,
    hits: 1234,
  },
];

const PostList = (props) => {
  return <Table columns={columns} dataSource={data} />;
};

const Wrapper = styled.div``;

export default PostList;
