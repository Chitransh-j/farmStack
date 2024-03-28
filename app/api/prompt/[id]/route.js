import {
    connectToDB
} from "@utils/database"
import Prompt from "@models/prompt";

//GET 
export const GET = async (request, {
    params
}) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')

        if (!prompt) return new Response("Prompt not found", {
            status: 404
        })
        // console.log(prompt);

        return new Response(JSON.stringify(prompt), {
            status: 200
        }) //ok
    } catch (error) {
        return new Response("Failed to Dance", {
            status: 500
        }) //ok
    }
}

//PATCH(update)
export const PATCH = async (req, {
    params
}) => {
    const {
        prompt,
        tag
    } = await req.json()

    try {
        await connectToDB()

        const existingPrompt = await Prompt.findById(params.id) // database se aa rha via primary key

        if (!existingPrompt) {
            return new Response("Prompt Not Found", {
                status: 404
            })
        }

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag

        await existingPrompt.save()

        return new Response("Successfully Updated" , {status : 200})
        
    } catch (error) {
        return new Response("Failed to Dance", {
            status: 500
        }) //ok
    }
}


//DELETE
export const DELETE = async (req, {
    params
}) => {
    try {
        await connectToDB()

        await Prompt.findByIdAndRemove(params.id)


        return new Response("Prompt deleted successfully", {
            status: 200
        })
    } catch (error) {
        return new Response("failed to Delete Prompt", {
            status: 500
        })
    }
}