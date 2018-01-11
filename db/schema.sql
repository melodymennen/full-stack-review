CREATE TABLE users_full_stack (
    id SERIAL PRIMARY KEY, 
    auth0_id TEXT, 
    email TEXT, 
    picture_url TEXT, 
    name TEXT
);