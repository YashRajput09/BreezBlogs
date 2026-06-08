// import axios from "axios";

// export const chatBot = async (req, res) => {
//  const { message } = req.body;
//  if (!message) {
//    return res.status(200).json({ message: "message is required" });
//  }
//   try {
//     // const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
//     const API_URL = 'https://api.apyhub.com/ai/summarize-url';
//     const response = await axios.post(
//         API_URL,
//         { inputs: message },
//         {
//             headers: {
//                 'Authorization': `Bearer ${process.env.APYHUB_API_KEY}`,
//                 'Content-Type': 'application/json',
//         },
//     }
// );
// // console.log(response.data);

//     res.status(200).json({ message: response.data });
//   } catch (error) {
//     console.log("error: ",error);
//     return res.status(500).json({ message: "AI Service temporarily unavailable", details: error.details });
    
//   }
// };

import model from "../utils/gemini.js";

export const summarizeBlog = async (req, res) => {
  try {
    const { content } = req.body;
// console.log(content)
    if (!content) {
      return res.status(400).json({
        success: false,
        message: "Blog content is required",
      });
    }

    const prompt = `
Read the following blog and generate a concise summary in one paragraph.

Requirements:
- 80 to 120 words
- Easy to understand
- Keep the most important points
- Do not use bullet points
- Write in a professional and engaging tone

Blog:
${content}
`;

    const result = await model.generateContent(prompt);

    const summary = result.response.text();

    return res.status(200).json({
      success: true,
      summary,
    });
  } catch (error) {
    console.log(error);
    console.error("Summarization Error:", error);

    // return res.status(500).json({
    //   success: false,
    //   message: "Failed to summarize blog",
    // });
  }
};