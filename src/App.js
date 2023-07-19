import React from "react";
import TodoItemCreator from "./components/TodoItemCreator";
import { useRecoilValue } from "recoil";
import { todoListAtom } from "./recoil/atom/todoListAtom";
import TodoItem from "./components/TodoItem";

const App = () => {
  //아톰의 값가져오기(값참조만)
  const allTodoList = useRecoilValue(todoListAtom);

  return (
    <div>
      <TodoItemCreator />
      {allTodoList.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default App;
