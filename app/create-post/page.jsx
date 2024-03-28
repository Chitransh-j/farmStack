"use client"

import {useState} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Form from '@components/Form'

const CreatePost = () => {
    const router = useRouter()
    const {data:session} = useSession()

    const [submitting,setsubmitting]  = useState(false)
    const [post,setPost] = useState({
        prompt:'',
        tag:''
    })

    const createPrompt = async (e) =>{
        e.preventDefault()
        setsubmitting(true)

        try{
            //sending data from form to the backend
            const response = await fetch('./api/prompt/new',{
                method:'POST',
                body:JSON.stringify({
                    prompt: post.prompt,
                    userID: session?.user.id,
                    tag: post.tag
                })
            })
            // status 200 ok
            if(response.ok){
                router.push('/')
            }
        }
        catch(error){
            console.log(error)
        }

        //will happen anyways
        finally{
            setsubmitting(false);
        }
    }

  return (
    <Form 
        type ="Create"
        post ={post}
        setPost ={setPost}
        submitting  = {submitting}
        handleSubmit = {createPrompt}
    />
  )
}

export default CreatePost