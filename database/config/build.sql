BEGIN;

DROP TABLE IF EXISTS calender;

CREATE TABLE IF NOT EXISTS calender (
    id  SERIAL   PRIMARY KEY,
    event_name    TEXT       NOT NULL,
    note VARCHAR(250),
    event_date DATE NOT NULL
);

INSERT INTO calender (event_name, event_date) VALUES ('Christmas', '2000-01-01');
INSERT INTO calender (event_name, event_date) VALUES ('Neda BD', '2000-01-01');
INSERT INTO calender (event_name, event_date) VALUES ('International Day of Commemoration in Memory of the Victims of the Holocaus', '2000-01-027' );
INSERT iNTO calender (event_name, event_date) VALUES ('World Cancer Day', '2000-02-04');
INSERT iNTO calender (event_name, event_date) VALUES ('International Day of Women and Girls in Science', '2000-02-11');
INSERT INTO calender (event_name, event_date) VALUES ('Bayan Juba BD', '2000-02-03');
INSERT INTO calender (event_name, event_date) VALUES ('Zero Discrimination Day', '2000-03-01');
INSERT INTO calender (event_name, event_date) VALUES ('International Day of Nowruz', '2000-03-21');
INSERT INTO calender (event_name, event_date) VALUES ('World Health Day', '2000-04-07');
INSERT INTO calender (event_name, event_date) VALUES ('World Creativity and Innovation Day', '2000-04-21');
INSERT INTO calender (event_name, event_date) VALUES ('International Dance Day', '2000-04-29');
INSERT INTO calender (event_name, event_date) VALUES ('World Press Freedom Day', '2000-05-03');
INSERT INTO calender (event_name, event_date) VALUES ('World Employee Appreiation Day', '2000-05-01');
INSERT INTO calender (event_name, event_date) VALUES ('World Refugee Day', '2000-06-20');
INSERT INTO calender (event_name, event_date) VALUES ('Sustainable Gastronomy Day', '2000-06-18');
INSERT INTO calender (event_name, event_date) VALUES ('World Day Against Child Labour', '2000-06-12');
INSERT INTO calender (event_name, event_date) VALUES ('Nelson Mandela International Day', '2000-07-18');
INSERT INTO calender (event_name, event_date) VALUES ('International Day of Friendship', '2000-07-30');
INSERT INTO calender (event_name, event_date) VALUES ('International Youth Day', '2000-08-12');
INSERT INTO calender (event_name, event_date) VALUES ('International Day against Nuclear Tests', '2000-08-29');
INSERT INTO calender (event_name, event_date) VALUES ('World Tourism Day', '2000-09-27');
INSERT INTO calender (event_name, event_date) VALUES ('International Translation Day', '2000-09-30');
INSERT INTO calender (event_name, event_date) VALUES ('World Teachers Day', '2000-10-05');
INSERT INTO calender (event_name, event_date) VALUES ('Global Handwashing Day', '2000-10-15');
INSERT INTO calender (event_name, event_date) VALUES ('World Television Day', '2000-11-21');
INSERT INTO calender (event_name, event_date) VALUES ('International Day of Solidarity with the Palestinian People', '2000-11-29');
INSERT INTO calender (event_name, event_date) VALUES ('International Day of Persons with Disabilities', '2000-12-03');
INSERT INTO calender (event_name, event_date) VALUES ('Human Rights Day', '2000-12-10');

COMMIT;
