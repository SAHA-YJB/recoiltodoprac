import React, { Suspense } from "react";
import TodoItemCreator from "./components/TodoItemCreator";
import { useRecoilValue } from "recoil";
import {
  filterdTodoListStateSelector,
  todoListAtom,
} from "./recoil/atom/todoListAtom";
import TodoItem from "./components/TodoItem";
import TodoFilters from "./components/TodoFilters";
import TodoListStats from "./components/TodoListStats";
import { currentUserNameQuery } from "./recoil/atom/userAtoms";

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>userName: {userName}</div>;
};
const App = () => {
  //아톰의 값가져오기(값참조만)
  const allTodoList = useRecoilValue(todoListAtom);
  const filterdTodoList = useRecoilValue(filterdTodoListStateSelector);

  return (
    <div>
      <Suspense fallback={<div>로딩 중</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoFilters />
      <TodoItemCreator />
      {filterdTodoList.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default App;
