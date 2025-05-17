import { wrapLanguageModel, customProvider, extractReasoningMiddleware } from "ai";

import { groq } from "@ai-sdk/groq";
import { google } from "@ai-sdk/google";


export const figure = customProvider({
    languageModels: {
        'figure-default': google('gemini-2.5-flash-preview-04-17', {
            structuredOutputs: true,
        }),
        'figure-google-pro': google('gemini-2.5-pro-preview-05-06', {
            structuredOutputs: true,
        }),
        'figure-llama-4': groq('meta-llama/llama-4-maverick-17b-128e-instruct', {
            parallelToolCalls: false,
        }),
    }
})
