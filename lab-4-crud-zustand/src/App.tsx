import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import AddPost from "./Pages/AddPost"
import BlogList from "./Pages/BlogList"
import BlogDetail from "./Pages/BlogDetail"
import EditPost from "./Pages/EditPost"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/blog" element={<BlogList />}/>
            <Route path="/blog/new" element={<AddPost />}/>
            <Route path="/blog/:id" element={<BlogDetail />}/>
            <Route path="/blog/edit/:id" element={<EditPost />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App