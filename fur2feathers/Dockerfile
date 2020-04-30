# newest lts
FROM node:12 as build

WORKDIR /app

# restore dependencies as separate layer
COPY package.json package-lock.json ./
# deterministic restore using package-lock
RUN npm ci

COPY . ./

RUN npx ng build --prod

# stable
FROM nginx:1.18

WORKDIR /usr/share/nginx/html

# remove default nginx page
RUN rm -rf *

COPY --from=build /app/dist/* ./