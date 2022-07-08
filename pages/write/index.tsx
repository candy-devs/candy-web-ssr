import React from "react";
import styled from "styled-components";
import AppBar from "../../components/AppBar";
import BottomNavigation from "../../components/layouts/nav/BottomNavigation";

export default function WritePage() {
  function auto_grow(element: any) {
    element.style.height = "5px";
    element.style.height = element.scrollHeight + "px";
  }

  return (
    <>
      <AppBar title={"글 쓰기"} showUnderLine alignCenter />

      <WriteForm>
        <TitleText placeholder="제목" />
        <UnderLine />
        <BodyText
          placeholder="본문에 #을 이용해 태그를 입력해보세요."
          onInput={(e) => auto_grow(e.currentTarget)}
        />
      </WriteForm>

      <BottomNavigation selected={2} />
    </>
  );
}

const WriteForm = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  /* height: 400px; */
  margin-top: 51px;
  margin-bottom: 42px;
  /* flex: 1 1 auto; */
`;

const TitleText = styled.input`
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
