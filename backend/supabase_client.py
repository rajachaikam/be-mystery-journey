from supabase import create_client, Client
import os
from dotenv import load_dotenv

# Load environment variables from .env file in the same directory
env_path = os.path.join(os.path.dirname(__file__), ".env")
load_dotenv(dotenv_path=env_path)

# Read variables
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# Debug logs (optional - remove in production)
# print("DEBUG: SUPABASE_URL =", SUPABASE_URL)
# print("DEBUG: SUPABASE_KEY =", SUPABASE_KEY[:6] + "..." if SUPABASE_KEY else None)

# Validate environment variables
if not SUPABASE_URL or not SUPABASE_KEY:
    raise Exception("Supabase URL or Key not found. Check your .env file and path.")

# Create Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
