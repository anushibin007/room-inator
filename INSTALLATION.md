# Room-inator installation instructions

## Developer environment setup

Follow these instructions to set up a local environment to build and test the application.

### Pre-requisites for the developer environment setup

You need to have the following tools installed in order to run the application on your system

-   Maven CLI - https://maven.apache.org/download.cgi
-   NPM CLI - https://docs.npmjs.com/cli/

### Backend developer environment

```bash
# After cloning this repository,
# open a terminal in the root folder
# of the source code. And then,
cd backend # switch to the backend source code folder
mvn spring-boot:run # start the spring boot backend application
```

#### Customize the backend application

To insert your own data into the backend application server's database, modify the content of the [`data.sql`](./backend/src/main/resources/data.sql) file. Do note that the schema of all the tables must remain the same. The content can be modified.

### Frontend developer environment

```bash
# After cloning this repository,
# open a terminal in the root folder
# of the source code. And then,
cd frontend # switch to the frontend source code folder
npm ci # one-time setup to pull the required dependencies to your local folder
npm run dev # start a development server
```

The last command will show you the URL where you can access the frontend application

#### Customize the frontend application

You may create a file called `env.local` in the root of your [`frontend`](./frontend/) folder and use the same to add customization properties as follows.

| Property name              | Default Value                                                    | Required | Description                                                                                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BASE_PATH                  | /room-inator/                                                    | false    | The root context path where the frontend application needs to be served                                                                                                                                                             |
| VITE_BUILD_NUMBER          | local-build                                                      | false    | The build number that is displayed in the footer of the frontend application                                                                                                                                                        |
| VITE_BACKEND_SERVER_ROOT   | http://localhost:8080                                            | false    | The endpoint where the backend Server is served                                                                                                                                                                                     |
| VITE_IMAGE_PLACEHOLDER_URL | https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg | false    | The full URL of a placeholder image that will be displayed in the Grid View of the rooms search page when a particular room doesn't have any images specified in the database.                                                      |
| VITE_IMAGE_ROOT_DIR_URL    | undefined                                                        | false    | The common root location URL where the images are stored. If a value is provided here, then all the room images are prepended with that value. Else, the full URL of each room's image needs to be provided in the backend database |
