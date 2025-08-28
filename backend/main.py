from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()

origins = [
    "http://localhost:5173",  # Local Vite
    "http://127.0.0.1:5173",
    "https://be-mystery-journey.vercel.app",  # Vercel frontend
    "https://bemysteryjourney.com"  # Replace with your custom domain
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/states")
async def get_states():
    try:
        res = supabase.table("states").select("*").execute()
        # Check if data exists
        if res.data is None:
            return {"error": "No states found"}
        return res.data
    except Exception as e:
        return {"error": str(e)}

@app.get("/cities/{state_id}")
async def get_cities(state_id: str):
    try:
        res = supabase.table("cities").select("*").eq("state_id", state_id).execute()
        if res.data is None:
            return {"error": "No cities found"}
        return res.data
    except Exception as e:
        return {"error": str(e)}

@app.get("/attractions/{city_id}")
async def get_attractions(city_id: str):
    try:
        res = supabase.table("attractions").select("*").eq("city_id", city_id).execute()
        if res.data is None:
            return {"error": "No attractions found"}
        return res.data
    except Exception as e:
        return {"error": str(e)}
