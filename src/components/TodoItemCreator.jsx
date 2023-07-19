import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atom/todoListAtom";

//아이디 선언
let id = 0;
const getId = () => id++;

const TodoItemCreator = () => {
  //인풋값 스테이트 정의와 체인지이벤트로 값 저장
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //아톰의 값을 가져와서 업데이트하겠다
  const setTodoList = useSetRecoilState(todoListAtom);
  const addItem = () => {
    setTodoList((oldTodoList) => [
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
      ...oldTodoList,
    ]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
