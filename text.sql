CREATE TABLE companies (
    comapnies_id SERIAL PRIMARY KEY,
    name TEXT,
    location TEXT
);

CREATE TABLE people (
    people_id SERIAL PRIMARY KEY,
    first_name TEXT,
    location TEXT,
    company_id INTEGER,

    CONSTRAINT FK_people_companies FOREIGN KEY (company_id)
    REFERENCES companies (comapnies_id)
);