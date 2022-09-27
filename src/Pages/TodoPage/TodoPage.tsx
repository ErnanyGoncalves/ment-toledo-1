import React, { useEffect, useState } from "react";

/*
    Parte 1
  - Terá um campo de digitação e um botão de submit para criar o formulário
  - O input deverá ter um placeholder
  - O submit deverá acontecer se o usuário pressionar Enter
  - Após adicionar a tarefa, o input deverá ser limpo e o foco voltado pra ele
  - Não deverá inserir um registro em branco
  - Quando o input estiver vazio, o submit deverá estar desabilitado
  - Terá uma lista para exibir as tarefas
  - Após inserir uma tarefa na lista, deverá exibir um alert com uma mensagem amigável
  - Na listagem deverá existir somente o texto
  - No final da listagem deverá ter a contagem das tarefas
  - Salvar as tarefas no local Storage
  - Recuperar as tarefas do local Storage quando exibir a tela
 */

const TodoPage = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [todoItems, setTodoItems] = useState<string[]>([]);
  useEffect(() => {
    const storageTodoItems = localStorage.getItem("todo");
    setTodoItems(storageTodoItems ? storageTodoItems.split(",") : []);
  }, []);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const todoList: string[] = [...todoItems, searchTxt];
    setTodoItems(todoList);
    setSearchTxt("");
    localStorage.setItem("todo", todoItems.toString());
  };
  const handleChange = (ev: React.ChangeEvent<HTMLFormElement>) => {
    setSearchTxt(ev.target.value);
  };

  return (
    <div className="todoContainer">
      <div className="todoSearch">
        <h1>My Todo List:</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="todo"
            value={searchTxt}
            type="text"
            placeholder="Ex: Wash the dishes"
            onChange={() => handleChange}
          />
          <button type="submit" disabled={searchTxt.trim() === ""}>
            New task
          </button>
        </form>
      </div>
      <div className="todoList">
        {todoItems.length > 0 ? (
          <ul>
            {todoItems.map((v) => (
              <li>{v}</li>
            ))}
          </ul>
        ) : (
          <p>You have no tasks created.</p>
        )}
      </div>
      <div className="todoFooter">
        {todoItems.length > 0 ? (
          <p>You have {todoItems.length} tasks to do.</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default TodoPage;
