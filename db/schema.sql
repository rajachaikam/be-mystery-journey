-- STATES
CREATE TABLE IF NOT EXISTS states (
    id VARCHAR PRIMARY KEY,
    name VARCHAR NOT NULL
);

-- CITIES
CREATE TABLE IF NOT EXISTS cities (
    id VARCHAR PRIMARY KEY,
    state_id VARCHAR REFERENCES states(id),
    name VARCHAR NOT NULL
);

-- ATTRACTIONS
CREATE TABLE IF NOT EXISTS attractions (
    id VARCHAR PRIMARY KEY,
    city_id VARCHAR REFERENCES cities(id),
    name VARCHAR NOT NULL,
    duration_hours FLOAT,
    price_min FLOAT,
    price_max FLOAT,
    ticket_url VARCHAR,
    tags VARCHAR
);
