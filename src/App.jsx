import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TodoListPage from "./pages/TodoListPage";
import Layout from "./components/Layout";

function App() {
  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todos" element={<TodoListPage />} />
        </Routes>
      </Layout>

  );
}

export default App;
