BEGIN;

DROP TABLE IF EXISTS calender;

CREATE TABLE IF NOT EXISTS calender (
    id  SERIAL   PRIMARY KEY,
    event_name    TEXT       NOT NULL,
    note VARCHAR(250),
    event_date DATE NOT NULL
);

INSERT INTO calender (event_name, event_date) VALUES ('Christmas', '2000-1-01' );



COMMIT;
