INSERT INTO country (id, name) VALUES ('in', 'India');
INSERT INTO country (id, name) VALUES ('fr', 'France');
INSERT INTO country (id, name) VALUES ('br', 'Brazil');
INSERT INTO country (id, name) VALUES ('it', 'Italy');
INSERT INTO country (id, name) VALUES ('ca', 'Canada');

INSERT INTO location (id, country_id, name) VALUES ('hyd', 'in', 'Hyderabad');
INSERT INTO location (id, country_id, name) VALUES ('blr', 'in', 'Bangalore');

INSERT INTO building (id, location_id, name) VALUES ('south-building', 'hyd', 'South Building');
INSERT INTO building (id, location_id, name) VALUES ('north-building', 'hyd', 'North Building');

INSERT INTO room (id, building_id, name, floor, seats, images, whiteboard, projector, directions) VALUES ('meeting-room-1', 'south-building', 'Meeting Room 1', 3, 10, ARRAY ['https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024'], true, true, ARRAY ['Enter Floor 3', 'The first room to your left is Meeting Room 1']);
