from dotenv import load_dotenv
from google import genai
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


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

Return the evaluation in this format:

Score:
Give an overall score from 0 to 10 based on correctness,
relevance, technical understanding, and completeness.

Use the following general guidelines:

0-2: The answer is mostly incorrect, irrelevant, or shows
very little understanding.

3-4: The answer shows limited understanding but contains
major missing information or errors.

5-6: The answer demonstrates partial understanding but
has noticeable gaps or lacks sufficient explanation.

7-8: The answer is mostly correct, relevant, and demonstrates
good understanding, with only minor gaps.

9: The answer is very strong, accurate, relevant, and
well explained, with very few missing details.

10: The answer is exceptionally accurate, relevant, complete,
and demonstrates strong technical understanding appropriate
for the question.

Do not give a high score simply because the answer is long.
Do not give a low score simply because the answer is concise.
The score should reflect the actual quality of the answer.

Feedback:
Provide a concise explanation of the overall quality of the answer.
Explain the most important reasons for the evaluation.

Strengths:
List 2-3 specific things the candidate did well.
Only include strengths that are supported by the candidate's answer.

Weaknesses:
List 1-3 specific errors, missing concepts, or areas where the
answer could be improved.
Do not invent weaknesses if the answer is already strong.

Suggestion:
Give specific, actionable advice that would help the candidate
improve their answer in a future interview.

The feedback should be constructive and professional.
Do not insult or discourage the candidate.
Do not repeat the entire correct answer.

Do not provide the correct answer unless it is necessary
to explain a mistake.
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt
    )

    return response.text
question = "What is inheritance in Java?"

answer = """
Inheritance is when a class gets things from another class.
It is related to OOP.
"""

result = evaluate_answer(question, answer)

print(result)