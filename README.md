# Frontend

This is a fronted for a demo project @ Webcomm in Taipei, Taiwan

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Build Dev and Serve with Reverse Proxy to API

Run `npm run watch` in one terminal and `npm run dev` in another terminal. This will build and watch for changes and start a lite-server instance with HTTPS and a reverse proxy

## Build docker image and

Run ./build_docker_image.sh and specify a local build or not.
To push to OCP run ./tag_and_push.sh/
Restart OCP Frontend deployment to pull new images.
