# backend/main.py
import os
from pathlib import Path
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from supabase import create_client, Client
from fastapi.responses import JSONResponse

env_path = Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

# Supabase credentials from environment variables
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

print("SUPABASE_URL =", os.getenv("SUPABASE_URL"))
print("SUPABASE_KEY =", os.getenv("SUPABASE_KEY"))

if not SUPABASE_URL or not SUPABASE_KEY:
    raise Exception("Supabase credentials are missing. Set SUPABASE_URL and SUPABASE_KEY in Render environment.")

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Initialize FastAPI
app = FastAPI()

# CORS settings: allow your frontend domain
origins = [
    "https://www.bemysteryjourney.com",  # your production frontend
    "http://localhost:5173"               # local dev
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Example route: fetch states
@app.get("/states")
async def get_states():
    try:
        response = supabase.table("states").select("*").execute()
        return JSONResponse(content=response.data)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Example route: fetch cities for a state
@app.get("/cities/{state_id}")
async def get_cities(state_id: str):
    try:
        response = supabase.table("cities").select("*").eq("state_id", state_id).execute()
        return JSONResponse(content=response.data)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Example route: fetch attractions for a city
@app.get("/attractions/{city_id}")
async def get_attractions(city_id: str):
    try:
        response = supabase.table("attractions").select("*").eq("city_id", city_id).execute()
        return JSONResponse(content=response.data)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Backend is running."}
