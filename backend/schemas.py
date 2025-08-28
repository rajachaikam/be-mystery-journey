from pydantic import BaseModel
from typing import List, Optional

class StateSchema(BaseModel):
    id: str
    name: str

class CitySchema(BaseModel):
    id: str
    state_id: str
    name: str

class AttractionSchema(BaseModel):
    id: str
    city_id: str
    name: str
    duration_hours: float
    price_min: float
    price_max: float
    ticket_url: Optional[str]
    tags: List[str]
