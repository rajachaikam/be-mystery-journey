-- STATES
INSERT INTO states (id, name) VALUES 
('ny', 'New York'),
('ma', 'Massachusetts');

-- CITIES
INSERT INTO cities (id, state_id, name) VALUES
('nyc', 'ny', 'New York City'),
('albany', 'ny', 'Albany'),
('boston', 'ma', 'Boston'),
('cambridge', 'ma', 'Cambridge');

-- ATTRACTIONS
INSERT INTO attractions (id, city_id, name, duration_hours, price_min, price_max, ticket_url, tags) VALUES
('statue-liberty', 'nyc', 'Statue of Liberty', 2, 20, 40, 'https://www.statuecruises.com/', 'historic,outdoor'),
('central-park', 'nyc', 'Central Park', 3, 0, 0, '', 'nature,outdoor,free'),
('empire-state', 'nyc', 'Empire State Building', 2, 44, 79, 'https://www.esbnyc.com/', 'architecture,view'),
('freedom-trail', 'boston', 'Freedom Trail', 3, 0, 0, '', 'historic,walking,free'),
('fenway-park', 'boston', 'Fenway Park', 2, 25, 75, 'https://www.mlb.com/redsox/ballpark', 'sports,landmark'),
('harvard-yard', 'cambridge', 'Harvard Yard', 1, 0, 0, '', 'university,historic,free');
