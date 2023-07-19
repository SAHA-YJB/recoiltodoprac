import React from "react";
import { useRecoilState } from "recoil";
import { todoListAtom } from "../recoil/atom/todoListAtom";

const TodoItem = ({ item }) => {
  //전체투두리스트
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  console.log(todoList);
  //인덱스 값 찾기(전체투두리스에서 프랍받아온 item과 같은 인덱스를 반환)
  const index = todoList.findIndex((listItem) => listItem === item);
  //글 수정
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };
  //체크 트루<->펄스
  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };
  //삭제
  const removeItem = (id) => {
    const removedItem = todoList.filter((item) => item.id !== id);
    setTodoList(removedItem);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemComplete}
      />
      <button onClick={() => removeItem(item.id)}>삭제</button>
    </div>
  );
};
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
export default TodoItem;
