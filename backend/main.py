from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def heath_check():
    return {"status": "ok"}