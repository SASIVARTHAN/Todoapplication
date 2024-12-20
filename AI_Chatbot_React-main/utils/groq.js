import { Groq } from 'groq-sdk'

const groq = new Groq({
    apiKey: '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', // Replace with your actual API key
    dangerouslyAllowBrowser: true,
  });
  

export const requestAI = async (query) => {
    const response = await groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: query,
            }
        ],
        model: 'llama3-8b-8192',
    });
    return response;
}