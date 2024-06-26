--- COUNTRIES
insert into
    country (name, id)
values
    ('India', 'IN');

insert into
    country (name, id)
values
    ('Dublin', 'DUB');

--- LOCATIONS
INSERT INTO
    LOCATION (COUNTRY_ID, ID, NAME)
VALUES
    ('IN', 'MUM', 'Mumbai');

INSERT INTO
    LOCATION (COUNTRY_ID, ID, NAME)
VALUES
    ('IN', 'BGLR', 'Bangalore');

INSERT INTO
    LOCATION (COUNTRY_ID, ID, NAME)
VALUES
    ('DUB', 'GC', 'Grand Canal');

--- BUILDINGS
INSERT INTO
    BUILDING (LOCATION_ID, ID, NAME)
VALUES
    ('MUM', 'MUM-B1', 'Accenture Primal Tower');

INSERT INTO
    BUILDING (LOCATION_ID, ID, NAME)
VALUES
    ('MUM', 'MUM-B2', 'Accenture Express Tower');

INSERT INTO
    BUILDING (LOCATION_ID, ID, NAME)
VALUES
    ('BGLR', 'BGLR-B1', 'Accenture Pritech Park');

INSERT INTO
    BUILDING (LOCATION_ID, ID, NAME)
VALUES
    ('BGLR', 'BGLR-B3', 'Accenture Building 14');

INSERT INTO
    BUILDING (LOCATION_ID, ID, NAME)
VALUES
    ('GC', 'GC-B1', 'Accenture Grand Canal Plaza');

INSERT INTO
    ROOM (
        FLOOR,
        CAPACITY,
        BUILDING_ID,
        ID,
        NAME,
        DIRECTIONS,
        IMAGES,
        STATIONERY
    )
VALUES
    (
        '1',
        '100',
        'MUM-B1',
        'MUM-B1-ID1',
        'Meeting Room 1',
        ARRAY ['Enter the building',
        'Turn right',
        'Walk straight',
        'Turn left'],
        ARRAY ['https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024'],
        ARRAY ['whiteboard', 'projector']
    );

INSERT INTO
    ROOM (
        FLOOR,
        CAPACITY,
        BUILDING_ID,
        ID,
        NAME,
        DIRECTIONS,
        IMAGES,
        STATIONERY
    )
VALUES
    (
        '1',
        '100',
        'MUM-B2',
        'MUM-B2-ID1',
        'Meeting Room 2',
        ARRAY ['Enter the building',
        'Turn left',
        'Turn right'],
        ARRAY ['https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024'],
        ARRAY ['whiteboard']
    );

INSERT INTO
    ROOM (
        FLOOR,
        CAPACITY,
        BUILDING_ID,
        ID,
        NAME,
        DIRECTIONS,
        IMAGES,
        STATIONERY
    )
VALUES
    (
        '15',
        '100',
        'GC-B1',
        'GC-B1-ID1',
        'Meeting Room 1',
        ARRAY ['Enter the building',
        'Turn left',
        'Turn right'],
        ARRAY ['https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024', 'https://picsum.photos/1024/1024'],
        ARRAY ['projector']
    );