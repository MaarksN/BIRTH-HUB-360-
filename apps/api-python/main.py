from fastapi import FastAPI
from .routers import ldr

app = FastAPI(title="Birth Hub Innovation 360 AI API")

app.include_router(ldr.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Birth Hub Innovation 360 AI Engine"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
