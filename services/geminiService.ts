import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this client-side demo, we assume the environment variable is injected safely or it's a demo key.
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToAssistant = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct formatting for chat history if needed, 
    // but gemini-2.5-flash is stateless via generateContent unless using chat sessions.
    // For simplicity in this widget, we'll just append the current message to a system context
    // or use a fresh chat session each time if we want memory.
    // Let's use a simple single-turn request with context for this lightweight widget
    // to avoid managing complex chat session state resets.
    
    const systemPrompt = `
      Du bist der virtuelle Assistent für "The Beauty Bash", ein exklusives Kosmetikstudio in Berlin Hellersdorf, geführt von Melissa Durmaz.
      Deine Aufgaben:
      - Beantworte Fragen zu den Dienstleistungen: Wimpernverlängerung, Lash & Brow Lift, PMU (Permanent Make-up).
      - Sei höflich, elegant, feminin und professionell.
      - Halte die Antworten kurz und prägnant (max 3 Sätze).
      - Wenn nach Terminen gefragt wird, verweise auf den "Termin buchen" Button.
      - Du bist hilfreich und charmant.
      
      User Anfrage: ${message}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: systemPrompt,
    });

    return response.text || "Entschuldigung, ich konnte das momentan nicht verarbeiten. Bitte versuchen Sie es später noch einmal.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Entschuldigung, mein Schönheitsschlaf wurde gestört. Bitte versuchen Sie es später erneut.";
  }
};
