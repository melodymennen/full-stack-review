INSERT INTO users_full_stack 
(auth0_id, email, picture_url, name)
VALUES
($1, $2, $3, $4)
RETURNING *;