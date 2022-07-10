import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import React, { useCallback } from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import BottomNavigation from "../../components/layouts/nav/BottomNavigation";
import { apiPrefixClient } from "../../config/ApiConfig";
import * as Yup from "yup";
import { Modal, SSRProvider } from "react-bootstrap";
import { ArticleWriteResponseDto } from "../../models/dto/ArticleWriteResponseDto";
import { remoteAction } from "../../api/RemoteAtcions";
import { useRouter } from "next/router";

interface IWriteForm {
  boardKey: string;
  title: string;
  body: string;
}

export default function WritePage() {
  const router = useRouter();

  const postClick = useCallback(() => {}, []);

  const onSubmit = remoteAction(async (values: IWriteForm) => {
    const validationResult = await validationSchema
      .validate(values, { abortEarly: false })
      .catch((err: any) => {
        alert(err.errors[0]);
        return null;
      });

    if (validationResult !== null) {
      const data = (
        await axios.post(`${apiPrefixClient}/api/v1/article`, values)
      ).data;
      const res = data as ArticleWriteResponseDto;

      if (res.articleId === -1) {
        alert("서버에서 오류를 반환했습니다!");
      } else {
        router.push(`/article/${res.articleId}`);
      }
    }
  });

  return (
    <>
      <AppBar title={"글 쓰기"} showUnderLine alignCenter />

      <Formik
        initialValues={FormInitialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <WriteForm>
          <input type="hidden" name="boardKey" value="test" />
          <TitleText placeholder="제목" name="title" />
          <UnderLine />
          <FormbikBodyTextarea />
          <PostButton type="submit" value={"등록"} onClick={postClick} />
        </WriteForm>
      </Formik>

      <BottomNavigation selected={2} />
    </>
  );
}

const validationSchema = Yup.object().shape({
  boardKey: Yup.string().max(10, "Invalid Board!").required(),
  title: Yup.string()
    .min(1, "Title is too short!")
    .max(64, "Title is too long!")
    .required(),
  body: Yup.string()
    .min(1, "Body is too short!")
    .max(65536, "Body is too long!")
    .required(),
});

const FormInitialValues = {
  boardKey: "test",
  title: "",
  body: "",
};

const WriteForm = styled(Form)`
  display: flex;
  padding: 16px;
  flex-direction: column;
  /* height: 400px; */
  margin-top: 51px;
  margin-bottom: 42px;
  /* flex: 1 1 auto; */
`;

const TitleText = styled(Field)`
  font-family: NotoSansCJKKR;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.7px;
  border: 0;
  align-items: stretch;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: #a2a5a9;
  }

  textarea::placeholder {
    color: #000000;
  }
`;

const UnderLine = styled.div`
  height: 1px;
  margin-top: 12px;
  background-color: #f1f1f1;
`;

const BodyText = styled.textarea`
  font-family: NotoSansCJKKR;
  font-size: 12px;
  letter-spacing: 0.7px;
  width: 100%;
  height: 100%;
  align-items: stretch;
  margin-top: 20px;
  flex-grow: 1;
  border: 0;
  transition-duration: 0ms;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: #a2a5a9;
  }

  textarea::placeholder {
    color: #000000;
  }
`;

function FormbikBodyTextarea() {
  function auto_grow(element: any) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }

  const [field, meta, helpers] = useField("body");

  return (
    <BodyText
      placeholder="본문에 #을 이용해 태그를 입력해보세요."
      name="body"
      onInput={(e) => auto_grow(e.currentTarget)}
      value={meta.value}
      onChange={field.onChange}
    />
  );
}

const PostButton = styled.input`
  border: none;
  outline: none;
  background: none;

  margin-top: 25px;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: #5673eb;

  font-family: NotoSansCJKKR;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ededed;

  cursor: pointer;

  :hover {
    background-color: #b0bdf3;
  }
`;

const CancelButton = styled(PostButton)`
  background-color: #ededed;
  color: black;

  :hover {
    background-color: #c9c9c9;
  }
`;
