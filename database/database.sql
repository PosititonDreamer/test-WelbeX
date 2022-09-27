create TABLE routes(
    id SERIAL PRIMARY KEY,
    date DATE,
    name VARCHAR(255),
    count INTEGER,
    distance INTEGER
);
