# Fur2FeathersNg-project3

## Table of Contetns 
1. [Overview](#overview)
2. [Compoennts](#components)
    - [Component Disambiguation](#component-disambiguation)
3. [Running the Application](#running-the-application)
    - [Locally](#locally)
    - [Cloud Deployment Description](#cloud-deployment-description)
4. [Third Party Dependencies](#third-party-dependencies)
5. [Additional Documentation](#additional-documentation)
## Overview
This is a stateless angular application connected to a RESTful ASP .NET Core Web API. The Restful Web API connects to a PostgreSQL database to persist data. The Angular application sends okta login tokens to the Restful API. The okta authentication tokens correspond to okta emails and the API verifies that users are authenticated in order to enable certain actions in the angular front end. For example, users are not able to modify a profile without being logged in through the okta login page on the angular website. In addition, validated submitted forms of registered users are sent automatically to a google readonly spreadsheet through the SheetDB library and AXIOS http client. This google spreadsheet contains only information persisted to the database that is relevant to an insurance administrator; the role of the viewing insurance administrator is to follow up with requests to modify insurance coverage level and increase or decrease coverage of different exotic pets (as in change the pets who are covered).


In addition, the angular application contains content and styling requested by a Revature business analyst team we collaborated with to deliver an MVP of their first sprint. We were able to partially implement features from sprint 2 and beyond, but do to their requirements of delivered functionality being atomic we scrapped any pages on the website that were partially completed (our blogs page, our find an exotic veterinarian near you search page, submit a claim online).

## Components

The pages this angular application includes are: 
1. Home
2. Purchase Insurance
3. Contact Us (Request more information and provide based on your exotic pet's species') Insurance boards and regulations specify different                     coverage is avaiable depending on the pet's species and pre-existing conditions.
4. Our Plans
5. Buyer's guide (Comparison between our offering price and coverage compared to other insurance providers of exotic pet insurance). Pricing must be vague given the changing nature of insurance regulations that set or affect coverage prices.
6. Find a Vet (under construction given partial implementation, not deployed as a deliverable)
7. Blog (under construction given partial implementation, not deployed as a deliverable)
8. FAQ's
9. About Us (a story of the founder of the company and the need for exotic pet insurance)
10. My Profile (disabled until logged in)
11. Submit A Claim
12. Log in (Okta log in embedded in an angular component on our website)

### Component Diasambiguation

Most of these pages contain a sidebar with contact information and hours of contact. Additionally there is a navbar that links to different "pages" in our angular application/website. Routing to non-existent pages returns our 404 page not found angular page. Under construction pages include contact information and a brief message about coming availability of these features.

This angular website transpiles from TypeScript into the ECMAScript 2015 version of JavaScript. Much of the type checking is disabled once transpiled into JavaScript (for example at runtime). JavaScript is what is active during runtime of the application. JavaScript, specially the 2015 version, does not implement the type checking or strong typing available during development in typescript. This angular application was developed with strong typing to increase code maintanability and reduce technical debt for future features.

## Running the Application

### Locally:
  1. [Install npm](https://www.npmjs.com/get-npm)
  2. In the directory containting the projects package.json, run npm install
  3. Run npm start
  4. The application will be served on localhost://4200 by default

### Cloud Deployment Description

In order to start the application one can deploy the kubernetes manifests. After pushed changes to master (directly or through pulled pull requests), the pipeline automatically pushes a docker image of the angular application to jhbui1's dockerhub repository. This image is used by a kubernetes service (which can be built from our provided manifests) to deploy the application (and provide scaling through a kubernetes loadbalancer). Currently the angular application is deployed to the Amazon Kubernetes service. The manifests also reference the url of the backend Restful API and PostgreSQL database which are also deployed in Amazon's Kubernetes service. Note that this application uses okta, which requires an https address for the Restful API that verifies authentication or is sent okta tokens from this angular application. A CORS policy, configured in the k8s manifest of the Restful API allows cross origin resource requests from this angular application.

## Third Party Dependencies

### Axios
Axios was used to send posts to sheetDB as its defaults matched the expecations of the API. There was no documentation for data the SheetDB api would accept and it refused data from Angular's HttpClient. It is reccomended to remove the dependency on Axios throught solving this problem or creating a new Admin dashboard as it is a redundant dependency.

### Okta
Okta was used to verify the user's identity, it currently requires manual addition of users requesting to register to an access list.


## Additional Documentation
For additional documentation including route diagrams, available services and modules, etc.: 
1. Execute npm run compodoc
2. navigate to (http://localhost:8080/)

