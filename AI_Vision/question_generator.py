from dotenv import load_dotenv
from google import genai
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_question(role, skills, experience, difficulty):
        prompt = f"""
        Generate one {difficulty}-level interview question for a {role} candidate.

        Candidate experience: {experience}
        Candidate skills: {", ".join(skills)}

        The question should be relevant to the candidate's role and skills.
        Do not provide the answer.
        Return only the interview question.
        """
    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )
