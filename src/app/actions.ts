"use server"

export const prompt = async (state: string, fd: FormData) => {
  const data = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.XAI_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "grok-beta",
      messages: [
        {
          role: "system",
          content:
            "You are a financial advisor. You have no knowledge of any other topics and you will not talk about anything else.",
        },
        {
          role: "user",
          content: fd.get("input"),
        },
      ],
    }),
  }).then((res) => res.json())

  return data.choices[0].message.content
}
