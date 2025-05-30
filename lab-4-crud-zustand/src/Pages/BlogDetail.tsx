import { useParams } from "react-router-dom"
import { usePostStore } from "../stores/post.store"


const BlogDetail = () => {
   const { id } = useParams()
   const { getPostById } = usePostStore()
   const foundPost = getPostById(String(id))

   return (
    <div>


      {foundPost ? (
      <table key={foundPost.id}>
         <tr>
            <th>{foundPost.title}</th>
         </tr>
         <tr>
            <td>{foundPost.content}</td>
         </tr>
      </table>

      ) : (
         <h2>No post found.</h2>
      )}
      


    </div>
  )
}

export default BlogDetail