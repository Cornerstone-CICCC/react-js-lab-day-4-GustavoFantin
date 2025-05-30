import { useParams } from "react-router-dom"
import { usePostStore } from "../stores/post.store"
import { useEffect, useState, type FormEvent } from "react"

const EditPost = () => {
   const {id} = useParams()
   const {  getPostById, updatePost } = usePostStore()
   const foundPost = getPostById(String(id))

   const [titleInput, setTitleInput] = useState<string>('')
   const [contentInput, setContentInput] = useState<string>('')

   useEffect(() => {
      if (!foundPost) return;

      setTitleInput(foundPost.title)
      setContentInput(foundPost.content)
   }, [id, foundPost])

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      updatePost(String(id), {
         title: titleInput,
         content: contentInput,
      })
      setContentInput('')
      setTitleInput('')
   }

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter post title." value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>
         <input type="text" placeholder="Enter post content." value={contentInput} onChange={(e) => setContentInput(e.target.value)}/>
         <button>Save post</button>
      </form>
    </div>
  )
}

export default EditPost