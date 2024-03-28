import {
    Schema,
    model,
    models
} from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User', //one to many relationship
    },
    prompt: {
        type: String,
        required: [true, 'It cannt be empty.']
    },
    tag: {
        type: String,
        required: [true, 'It cannot be empty']
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt