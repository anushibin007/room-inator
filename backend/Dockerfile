# docker build --pull --progress plain -t room-inator-backend:latest .
# docker run -itd -p 8080:8080 --name room-inator-backend room-inator-backend:latest

# Build
FROM maven:3.9.6-eclipse-temurin-17-alpine as builder
WORKDIR /tmp/staging-area

ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS

COPY . .
RUN mvn clean test package

# Package
FROM eclipse-temurin:17-jre-alpine as runner
RUN apk add curl

WORKDIR /opt/app

COPY --from=builder /tmp/staging-area/target/room-inator-backend-0.0.1-SNAPSHOT.jar room-inator-backend.jar

# NOTE: Have the src/main/resources/data.sql file modified for your room data
# Or, mount a new file at /opt/app/data.sql during runtime
COPY src/main/resources/data.sql data.sql

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=10 \
    CMD curl http://localhost:8080/ || exit 1
EXPOSE 8080
ENTRYPOINT exec java -Dspring.profiles.active=prod -jar room-inator-backend.jar
