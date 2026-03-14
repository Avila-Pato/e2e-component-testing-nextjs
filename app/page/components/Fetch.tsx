import { useEffect, useState } from "react";
const API = "https://jsonplaceholder.typicode.com/posts"


export type Root = Root2[]

export interface Root2 {
  userId: number
  id: number
  title: string
  body: string
}


export default function Fetch() {
  const [posts, setPosts] = useState<Root2[]>([])


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API)
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }
    fetchPosts()
  }, [])


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <div className="w-full rounded-lg bg-white p-8 shadow-md"></div>
        <h1 className="mb-4 text-2xl font-bold">Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-2 border-b pb-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
       
  );
}
