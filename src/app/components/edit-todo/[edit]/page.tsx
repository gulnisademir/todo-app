// "use client"
// import { useState, useEffect } from "react";
// import { useTodos, Todo } from "@/app/components/context/todos/page";
// import { useRouter } from 'next/navigation'


// type EditTodoProps = {
//   todo: Todo | null;
// };

// const EditTodo = ({ todo }: EditTodoProps) => {
//   const { handleEditTodo } = useTodos();
  
//   const [editedTask, setEditedTask] = useState<string>(todo ? todo.task : "");
//   const todoId = todo?.id;


// useEffect(() => {
//   const queryParams = new URLSearchParams(window.location.search);
//   const task = queryParams.get("task");
//   if (task) {
//     setEditedTask(decodeURIComponent(task));
//   }
// }, [todo]);
  
//   const router = useRouter();
 

//   const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//  // Güncellemeyi yap
//  console.log(todoId);
//     if (editedTask.trim() !== "" && todoId) {
//       handleEditTodo(todoId, editedTask);

//       router.push("/");
      
//     }
    
//   }; 
   

//   const handleEditCancel = () => {
//     // Yönlendirme işlemi
//     // window.location.href = "/";
//     router.push("/");
//   };

//   return (
//     <div className="container">
//       <form className="addForm" onSubmit={handleEditFormSubmit}>
//         <h2> Edit todo</h2>

//         <input
//           type="text"
//           placeholder="Todo Title"
//           value={editedTask}
//           onChange={(e) => setEditedTask(e.target.value)}
//         />
//         <br />
// {/* 
//         <textarea
//           placeholder="Todo Description"
//           value={editedTask}
//           onChange={(e) => setEditedTask(e.target.value)}
//         /> */}

//         <br />
//         <button type="button" onClick={handleEditCancel}>
//           Cancel
//         </button>

//         <button type="submit">Edit</button>
//       </form>
//     </div>
//   );
// };

// export default EditTodo;

"use client"
import { useState, useEffect } from "react";
import { useTodos, Todo } from "@/app/components/context/todos/page";
import { useRouter } from 'next/navigation'

import { useSearchParams } from 'next/navigation'

type EditTodoProps = {
  todo: Todo | null;
};

const EditTodo = ({ todo }: EditTodoProps) => {
  const { handleEditTodo } = useTodos();
  
  const [editedTask, setEditedTask] = useState<string>(todo ? todo.task : "");
  // const todoId = todo?.id;

  // const url = new URL("http://localhost:3000/components/edit-todo/aski=[object%20Object]?id=0.8365522440077746&task=dddd");
  // const params = new URLSearchParams();
  const queryParams = new URLSearchParams(window.location.search);
  // console.log(`id:\t${params.has("id")}`);
  const todoId = queryParams.get("id");

  const router = useRouter();
//  const id = router.pathname.split('/')[2];
useEffect(() => {
  const queryParams = new URLSearchParams(window.location.search);
  const task = queryParams.get("task");
  
  
  if (task) {
    setEditedTask(decodeURIComponent(task));
  }
}, [todo]);
  
console.log(todoId);
  const handleEditFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 // Güncellemeyi yap
     console.log(todoId);
    if (editedTask.trim() !== "" && todoId) {
      handleEditTodo(todoId, editedTask);

      router.push("/");
      
    }
    
  }; 
   

  const handleEditCancel = () => {
    // Yönlendirme işlemi
    // window.location.href = "/";
    router.push("/");
  };

  return (
    <div className="container">
      <form className="addForm" onSubmit={handleEditFormSubmit}>
        <h2> Edit todo</h2>

        <input
          type="text"
          placeholder="Todo Title"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <br />
{/* 
        <textarea
          placeholder="Todo Description"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        /> */}

        <br />
        <button type="button" onClick={handleEditCancel}>
          Cancel
        </button>

        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditTodo;

