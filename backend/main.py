from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Allow CORS from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://be-mystery-journey.vercel.app"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----- Data Models -----
class State(BaseModel):
    id: str
    name: str

class City(BaseModel):
    id: str
    name: str

class Attraction(BaseModel):
    id: str
    name: str
    description: str
    tags: List[str]  # must be a list

# ----- Sample Data -----
states_data = [
    {"id": "ny", "name": "New York"},
    {"id": "ma", "name": "Massachusetts"}
]

cities_data = {
    "ny": [
        {"id": "nyc", "name": "New York City"},
        {"id": "buf", "name": "Buffalo"}
    ],
    "ma": [
        {"id": "bos", "name": "Boston"},
        {"id": "cam", "name": "Cambridge"}
    ]
}

attractions_data = {
    "nyc": [
        {"id": "1", "name": "Statue of Liberty", "description": "Famous landmark", "tags": "historic,outdoor"},
        {"id": "2", "name": "Central Park", "description": "Large park", "tags": "nature,outdoor,free"},
        {"id": "3", "name": "Empire State Building", "description": "Tall building", "tags": "architecture,view"}
    ],
    "buf": [
        {"id": "4", "name": "Niagara Falls", "description": "Waterfall nearby", "tags": "nature,outdoor"},
    ],
    "bos": [
        {"id": "5", "name": "Freedom Trail", "description": "Historic path", "tags": "historic,outdoor"},
    ],
    "cam": [
        {"id": "6", "name": "Harvard University", "description": "Famous university", "tags": "education,architecture"},
    ]
}

# ----- API Endpoints -----
@app.get("/states", response_model=List[State])
def get_states():
    return states_data

@app.get("/cities/{state_id}", response_model=List[City])
def get_cities(state_id: str):
    return cities_data.get(state_id, [])

@app.get("/attractions/{city_id}", response_model=List[Attraction])
def get_attractions(city_id: str):
    raw_list = attractions_data.get(city_id, [])
    # Convert tags from comma-separated string to list only if it's a string
    for item in raw_list:
        if isinstance(item["tags"], str):
            item["tags"] = item["tags"].split(",")
    return raw_list
