--helps to use uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USER TABLE
CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR,
    companyName VARCHAR,
    companyWebsite VARCHAR
);

-- JOB CATEGORY
CREATE TABLE jobcategories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    categoryName VARCHAR
);

-- JOB TYPE
CREATE TABLE jobtypes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    jobType VARCHAR
);

-- QUALIFICATIONS
CREATE TABLE qualifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    qualification VARCHAR
);

-- JOB POSTS
CREATE TABLE jobposts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    companyName VARCHAR,
    companyWebsite VARCHAR,
    jobTitle VARCHAR,
    jobCategory UUID,
    jobType UUID,
    jobLocation VARCHAR,
    salaryRange VARCHAR,
    experience INT,
    qualification UUID,
    applicationDeadline DATE NOT NULL,
    jobDescription TEXT,
    CONSTRAINT fk_jobposts_jobCategory FOREIGN KEY (jobCategory) REFERENCES jobcategories(id) ON DELETE CASCADE,
    CONSTRAINT fk_jobposts_jobType FOREIGN KEY (jobType) REFERENCES jobtypes(id) ON DELETE CASCADE,
    CONSTRAINT fk_jobposts_qualification FOREIGN KEY (qualification) REFERENCES qualifications(id) ON DELETE CASCADE
);
