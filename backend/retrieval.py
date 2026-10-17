from pathlib import Path

import numpy as np
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv() # reads OPENAI_API_KEY from .env file
client = OpenAI()

KNOWLEDGE_BASE_DIR = Path(__file__).parent / "knowledge_base"
EMBEDDING_MODEL = "text-embedding-3-small"

def load_chunks():
    """Split every markdown file into one chunk per '## ' section. """
    chunks = []
    for path in sorted(KNOWLEDGE_BASE_DIR.glob("*.md")):
        current = None
        for line in path.read_text().splitlines():
            if line.startswith('## '):
                if current:
                    chunks.append(current)
                current = {"title": line[3:].strip(), "source": path.name, "lines": [line]} 
            elif current:
                current["lines"].append(line)
        if current:
            chunks.append(current)
    return [
        {"title": c["title"], "source": c["source"], "text": "\n".join(c["lines"]).strip()}
        for c in chunks

    ]

def embed(texts):
    """Turn a list of texts into embeddings (one row of numbers per text)."""
    response = client.embeddings.create(model=EMBEDDING_MODEL, input=texts)
    vectors = np.array([item.embedding for item in response.data])
     # Scale each vector to length 1, so a dor product = cosine similarity
    return vectors / np.linalg.norm(vectors, axis=1, keepdims=True)

def build_index():
    """Ingestion: chunk the knowledge base and embed every chunk."""
    chunks = load_chunks()
    vectors = embed([c["text"] for c in chunks])
    return chunks, vectors

def search(query, chunks, vectors, top_k=3):
    """Retrievel: find the chunks whose meaning is closest to the query."""
    query_vector = embed([query])[0]
    scores = vectors @ query_vector
    best = np.argsort(scores)[::-1][:top_k]
    return [{**chunks[i], "score": float(scores[i])} for i in best]

if __name__ == "__main__":
    chunks, vectors = build_index()
    print(f"Loaded {len(chunks)} chunks")
    for result in search("How much is a ceramic coaating?", chunks, vectors):
        print(f"{result['score']:.3f} {result['title']}")

    
           
                          
