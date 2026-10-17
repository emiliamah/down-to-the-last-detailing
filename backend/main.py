from fastapi import FastAPI
from pydantic import BaseModel

from retrieval import build_index, search

app = FastAPI()

# Ingestion: runs once when the server starts
chunks, vectors = build_index()

class ChatRequest(BaseModel):
    message: str 

class ChatResponse(BaseModel):
    reply: str
    sources: list[str]

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    results = search(request.message, chunks, vectors)

    # Placeholder until LLM is added: return the best matching chunk's text
    return ChatResponse(
        reply=results[0]["text"],
        sources=[r["title"] for r in results],
    )