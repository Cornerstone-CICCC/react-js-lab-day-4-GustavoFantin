import { Link } from "react-router-dom"
import { usePostStore } from "../stores/post.store"

const BlogList = () => {
   const { posts, deletePost } = usePostStore()
  

   const handleDelete = (id: string) => {
      deletePost(id)
   }

   return (
    <div>
      <h2>Posts</h2>
      <div style={{
         display: "grid",
         gridTemplateColumns: "auto auto auto",
         padding: "10px",
         gap: "20px"
      }}>
         {posts.map(p => (
            <table key={p.id}>
               <tr>
                  <th>{p.title}</th>
               </tr>
               <tr>
                  <td>{p.content}</td>
               </tr> 
               <tr>
                  <button>
                     <Link to={`/blog/${p.id}`}>
                     View
                     </Link>
                  </button>
                  <button style={{color: "#06be03"}}>
                     <Link to={`/blog/edit/${p.id}`}>
                     Edit
                     </Link>
                  </button>
                  <button onClick={() => handleDelete(p.id)} style={{color: "red"}}>Delete</button>
               </tr> 
            </table>
         ))}
      </div>
    </div>
  )
}

export default BlogList