import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const systemPrompt = `You are an AI assistant embedded in the personal portfolio website of Ayan Pratap (also known as Ayan Pratap Sonker). 
Your job is to answer questions from visitors about Ayan's professional background, skills, and projects in a helpful, concise, and professional tone.
Never answer questions that are completely unrelated to Ayan, web development, or software engineering. If asked an unrelated question, politely decline and steer the conversation back to Ayan's portfolio.

Here is the context about Ayan you must use to answer questions:

Name: Ayan Pratap Sonker (Ayan Pratap)
Role: Full Stack Developer
Location: Raebareli, Uttar Pradesh, India

Summary:
Full Stack Developer proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and TypeScript. Experienced in architecting secure, token-authenticated RESTful APIs, implementing relational and document database schemas, and engineering responsive frontends delivering fast page loads and clean state management.

Education:
B.Tech in Computer Science and Engineering from Feroze Gandhi Institute of Engineering and Technology (07/2022 - 07/2026), CGPA: 7.6/10.

Technical Skills:
- Languages: JavaScript (ES6+), TypeScript, Python, Java, C, SQL
- Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS, Redux Toolkit, Context API
- Backend: Node.js, Express.js, REST APIs, JWT, Middleware, Zod
- Databases & Cloud: MongoDB, Mongoose, PostgreSQL, Firebase, Vercel, Netlify, Render
- Tools: Git, GitHub, Postman, Linux CLI, Bash

Experience:
Web Development Intern at Intellipaat (07/2025 - 07/2026, Remote)
- Engineered 10+ responsive web interfaces using JS, TS, and Tailwind CSS.
- Developed reusable UI components reducing code duplication by 20%.
- Managed features via Git/GitHub.

Key Projects:
1. Task-Line: Full-stack task management app (React, Node, Express, MongoDB, Firebase Auth). Features CRUD, date-based planning, soft-delete.
2. TaskFlow: Project tracking platform with RBAC and JWT access/refresh tokens.
3. E-Commerce Web Application: Next.js and TypeScript storefront with SSR and faceted filtering.
4. Real-Time Currency Converter: React and Vite app using ExchangeRate-API with custom caching hooks.
5. Fintech Landing Experience (Razorpay Clone): Tailwind CSS landing page with modern micro-interactions.

Keep your answers short (1-3 paragraphs max) and natural.`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { reply: "Oops! It looks like the Gemini API key hasn't been set up yet. Ayan needs to add `GEMINI_API_KEY` to the `.env.local` file for me to work!" },
        { status: 200 } 
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error('AI Chat Error:', error);
    
    // Check if error is a 503 High Demand error
    const errorString = error.message || String(error);
    if (errorString.includes('503') || errorString.includes('high demand') || errorString.includes('UNAVAILABLE')) {
      return NextResponse.json(
        { error: "Ayan's AI is currently experiencing high demand. Please try again in a few moments!" },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Oops! Something went wrong while connecting to the AI. Please try again." },
      { status: 500 }
    );
  }
}
