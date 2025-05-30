import { useState, type FormEvent } from "react"
import { usePostStore } from "../stores/post.store"


const AddPost = () => {
   const { addPost } = usePostStore()
   const [titleInput, setTitleInput] = useState<string>('')
   const [contentInput, setContentInput] = useState<string>('')
   const [publishedInput, setPublishedInput] = useState<boolean>(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      addPost({
         title: titleInput,
         content: contentInput,
         published: false
      })
      setContentInput('')
      setTitleInput('')
      setPublishedInput(false)
   }


  return (
    <div>

      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter post title." value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>
         <input type="text" placeholder="Enter post content." value={contentInput} onChange={(e) => setContentInput(e.target.value)}/>
         <label htmlFor="published">
            Publish?
            <input type="checkbox" required name="published" checked={publishedInput} onChange={(e) => setPublishedInput(e.target.checked)} />
         </label>
         <button>Post</button>
      </form>


      {titleInput ? 
       <div>
         <h3>Preview Your Post</h3>
         <table>
            <tr>
               <th>{titleInput}</th>
            </tr>
            {contentInput ? 
            <tr>
               <td>{contentInput}</td>
            </tr> : ''
            }
            
         </table>
      </div>
: '' }
     
    </div>
  )
}

export default AddPost