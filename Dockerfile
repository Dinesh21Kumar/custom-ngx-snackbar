### STAGE 1: Build ###

FROM trion/ng-cli-karma:6.2.5 as builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder

RUN ng build
RUN ls dist/custom-ngx-snackbar
