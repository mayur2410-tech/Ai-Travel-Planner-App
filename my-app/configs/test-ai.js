



import axios from 'axios';

export async function generateTripPlan(promptText) {
  const apiKey = process.env.jeevankey; // 🔐 Keep this secret and secure
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`;

  const body = {
    contents: [
      {
        role: 'user',
        parts: [{ text: promptText }],
      },
    ],
  };

  try {
    const res = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseText = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const match = responseText.match(/```json\s*([\s\S]*?)```/);

    if (match && match[1]) {
      return JSON.parse(match[1]);
    } else {
      throw new Error('No valid JSON in Gemini response');
    }
  } catch (err) {
    console.error('❌ Gemini error:', err.message || err);
    throw err;
  }
}
