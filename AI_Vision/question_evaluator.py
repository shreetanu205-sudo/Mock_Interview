from dotenv import load_dotenv
from google import genai
import os
import json

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def parse_response(text):
        
        try:
            result=json.loads(text)
        except json.JSONDecodeError:
            return None


        if not isinstance(result, dict):
            return None

        required_fields = [
        "score",
        "feedback",
        "strengths",
        "weaknesses",
        "suggestion"
    ]
        
        for field in required_fields:
            if field not in result:
                return None

        result={
            field:result[field]
            for field in required_fields
        }

        if (
            isinstance(result["score"], bool)
            or not isinstance(result["score"], (int, float))
            or not 0 <= result["score"] <= 10
        ):
            return None

        if not isinstance(result["feedback"], str):
            return None

        if not isinstance(result["strengths"], list):
            return None

        if not isinstance(result["weaknesses"], list):
            return None

        if not isinstance(result["suggestion"], str):
            return None

        if not all(isinstance(item, str) for item in result["strengths"]):
            return None

        if not all(isinstance(item, str) for item in result["weaknesses"]):
            return None

        return result


def evaluate_answer(question, answer):

    prompt = f"""
You are an AI interview evaluator for a technical mock interview platform.

Your task is to evaluate the candidate's answer to the interview question.

INTERVIEW QUESTION:
{question}

CANDIDATE ANSWER:
{answer}

Evaluate the answer using these criteria:

1. Correctness:
Determine whether the technical information provided by the
candidate is accurate.

Identify incorrect concepts, facts, terminology, or claims.

Do not mark an answer incorrect merely because the candidate
uses different wording from the expected answer.

2. Relevance:
Determine whether the candidate directly addresses the
interview question.

Ignore information that is unrelated to the question.

An answer can contain technically correct information but still
receive a low relevance assessment if it does not answer the
question.

3. Technical Understanding:
Evaluate whether the candidate demonstrates genuine understanding
of the concept.

Do not judge understanding only by the number of technical keywords
used.

Look for explanations of how or why the concept works, appropriate
technical terminology, relationships between concepts, and relevant
examples when appropriate.

A short but accurate explanation can still demonstrate understanding.
Do not reward an answer simply because it is long.

4. Completeness:
Evaluate whether the candidate covers the important aspects
reasonably expected for the question.

Consider the question's difficulty and the expected depth of the
candidate's answer.

Do not require advanced details for a basic question.

Identify important concepts that are missing, but do not penalize
the candidate for omitting unnecessary or advanced information.

Also consider the candidate's explanation quality.
Do not penalize the candidate simply because the answer
uses different wording from a textbook.

Return the evaluation as valid JSON.
Return only a valid JSON object with exactly these five keys:

- score
- feedback
- strengths
- weaknesses
- suggestion

Do not include any additional keys.
In particular, do not return separate fields for correctness,
relevance, technical_understanding, or completeness.

Use those four evaluation criteria internally to determine
the overall score and feedback. Do not return them separately.

Use exactly this structure:


{{
  "score": 8,
  "feedback": "Overall evaluation of the candidate's answer.",
  "strengths": [
    "Specific strength 1",
    "Specific strength 2"
  ],
  "weaknesses": [
    "Specific weakness 1"
  ],
  "suggestion": "Specific actionable improvement advice."
}}

Rules:
- score must be a number from 0 to 10.
- feedback must be a string.
- strengths must be an array of strings.
- weaknesses must be an array of strings.
- suggestion must be a string.
- Return only valid JSON.
- Do not use Markdown code fences.
- Do not add explanations before or after the JSON.

Do not provide the correct answer unless it is necessary
to explain a mistake.
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt
    )

    return parse_response(response.text)

print(parse_response(
    '{"score": 8, "feedback": "Good", '
    '"strengths": ["Correct"], '
    '"weaknesses": ["Incomplete"], '
    '"suggestion": "Add detail"}'
))

print(parse_response('{score: 8}'))
print(parse_response('["score", 8]'))

question = "What is inheritance in Java?"

answer = """
Inheritance is when a class gets things from another class.
It is related to OOP.
"""


result = evaluate_answer(question, answer)

print(result)

