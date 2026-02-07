import { NextResponse } from "next/server";

// Bonita's Representation Anchor — Canon requirement
// When depicting people, default to Black representation with dignity
const REPRESENTATION_ANCHOR = `When depicting people, primary subjects should be Black people (African American and diasporic), represented with dignity, realism, and cultural specificity across a full range of skin tones, natural hair textures (locs, twists, coils, fades, braids), and authentic facial features. Beautiful, intentional, honoring.`;

// Anti-substitution and quality guardrails
const NEGATIVE_PROMPT = `ugly, distorted, low quality, blurry, nsfw, deformed, disfigured, bad anatomy, watermark, signature, do not substitute Black subjects with South Asian or Mediterranean or racially ambiguous representations when Black people are implied, no whitewashing, no lightening of skin tones`;

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Combine user prompt with representation anchor for people-related prompts
    // The anchor ensures Bonita's values are embedded in every generation
    const enhancedPrompt = `${prompt}. ${REPRESENTATION_ANCHOR}`;

    // Use SDXL model on Replicate for high-quality images
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        // SDXL model
        version: "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
        input: {
          prompt: enhancedPrompt,
          negative_prompt: NEGATIVE_PROMPT,
          width: 1024,
          height: 1024,
          num_outputs: 1,
          scheduler: "K_EULER",
          num_inference_steps: 30,
          guidance_scale: 7.5,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Replicate API error:", error);
      return NextResponse.json(
        { error: "Failed to start image generation" },
        { status: 500 }
      );
    }

    const prediction = await response.json();

    // Return the prediction ID so client can poll for status
    return NextResponse.json({
      id: prediction.id,
      status: prediction.status,
    });
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Get prediction status/result
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Prediction ID is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.replicate.com/v1/predictions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to get prediction status" },
        { status: 500 }
      );
    }

    const prediction = await response.json();

    return NextResponse.json({
      id: prediction.id,
      status: prediction.status,
      output: prediction.output,
      error: prediction.error,
    });
  } catch (error) {
    console.error("Get prediction error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
