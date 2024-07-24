import { ModelFusionTextStream, asChatMessages } from '@modelfusion/vercel-ai'
import { Message, StreamingTextResponse } from 'ai'
import { ollama, streamText } from 'modelfusion'

export const runtime = 'edge'

export async function POST(req: Request) {
    const { messages }: { messages: Message[] } = await req.json()

    const api = ollama.Api({
        baseUrl:
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:11434'
                : 'TODO: Specify production Ollama API Url'
    })
    const textStream = await streamText({
        model: ollama
            .ChatTextGenerator({ model: 'phi3', api })
            .withChatPrompt(),
        prompt: {
            system: 'You are a helpful assistant.',
            messages: asChatMessages(messages)
        }
    })

    // Stream the result to the caller using the Vercel AI SDK:
    return new StreamingTextResponse(
        ModelFusionTextStream(
            textStream,
            // optional callbacks:
            {
                onStart() {
                    console.log('Response started...')
                },
                onToken(token) {
                    // console.log('onToken', token)
                },
                onCompletion: () => {
                    console.log('Response completed')
                },
                onFinal(completion) {
                    console.log('Response finalized.', completion)
                }
            }
        )
    )
}
