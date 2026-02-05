import axios from 'axios';

const PYTHON_API_URL = process.env.PYTHON_API_URL || 'http://localhost:8000';

export const forwardToAI = async (endpoint: string, data: any) => {
  try {
    const url = `${PYTHON_API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    console.log(`[Bridge] Forwarding to Python AI: ${url}`, data);

    // In a real scenario, this would be a POST request.
    // However, some of our python endpoints are GETs in the mock.
    // For this implementation, we will assume POST for tool execution or handle method in args.
    // For simplicity in this bridge, we default to POST as most AI tools process input.

    const response = await axios.post(url, data);
    return response.data;
  } catch (error: any) {
    console.error(`[Bridge] Error calling Python AI: ${error.message}`);
    // Fallback or rethrow
    if (error.code === 'ECONNREFUSED') {
        return {
            status: 'error',
            message: 'AI Service Unavailable',
            mock: true,
            data: { note: "Simulated response because Python service is unreachable." }
        };
    }
    throw error;
  }
};
