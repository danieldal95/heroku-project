DROP TABLE IF EXISTS passengers;
DROP TABLE IF EXISTS flightticket;

CREATE TABLE passengers (
    id SERIAL,
    name TEXT,
    nationality TEXT,
    email_address TEXT,
    minor BOOLEAN
);

INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('james', 'UK', 'jame.uk@gmail.com', FALSE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('merry', 'US', 'merry.us@gmail.com', TRUE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('kim', 'SouthKorea', 'kim.southkorea@gmail.com', TRUE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('muraka', 'Japan', 'muraka.japan@gmail.com', FALSE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('john', 'US', 'john.us@gmail.com', FALSE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('amezcua', 'Philippines', 'amezcua.philippines@gmail.com', FALSE);
INSERT INTO passengers (name, nationality, email_address, minor) VALUES ('robert', 'HongKong', 'robert.hongkong@gmail.com', FALSE);

CREATE TABLE flightticket (
    id SERIAL,
    gate TEXT,
    flight_code TEXT,
    seat_class TEXT,
    seat TEXT,
    departure_date_time TEXT,
    departing_from TEXT,
    arriving_to TEXT,
    passengers_id INTEGER
);

INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('A4', 'AA555', 'eco', '22C', '20220728:1352', 'Heathrow', 'LaGuardia', 1);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('A4', 'AA777', 'eco', '38A', '20220729:1122', 'LaGuardia', 'Seatac', 1);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('C17', 'BB111', '1st', '3A', '20220728:1422', 'LaGuardia', 'Seatac', 2);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('B11', 'SK123', 'business', '8C', '20220728:1922', 'Incheon', 'Seatac', 3);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('A7', 'JP321', 'business', '7C', '20220729:0957', 'Haneda', 'Seatac', 4);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('D5', 'TX567', 'eco', '35E', '20220729:1144', 'DallasFort', 'Seatac', 5);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('A12', 'PH999', '1st', '2C', '20220730:0744', 'NinoyAquino', 'Seatac', 6);
INSERT INTO flightticket (gate, flight_code, seat_class, seat, departure_date_time, departing_from, arriving_to, passengers_id) VALUES ('B6', 'HK432', 'eco', '31A', '20220730:0814', 'HongKong', 'Seatac', 7);