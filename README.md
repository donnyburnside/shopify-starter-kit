# Shopify Starter Kit
A starter kit for Shopify that features:
* Gulp.js
* Rollup.js
* Babel
* SCSS
* Autoprefixer


## Requirements
You will need the following software before starting development:
- [Node.js](https://nodejs.org/)
- [Theme Kit](https://shopify.github.io/themekit/)


## Getting Started
- Clone/download the repo
- Run `npm install` to install the projects dependencies
- Create a new file at `theme/config.yml` (use `theme/config.yml.example` as a base)
- Login to Shopify and duplicate a theme. We'll use this theme during development and all of its files will be removed/replaced during the first deploy.
- Next you'll need to connect with Shopify. See "[Setting up your Shopify development environment](#setting-up-your-shopify-development-environment)" for help.
- That's it! You're good to go. See the "[Commands](#commands)" section.


## Commands
| Command | Description |
|---|---|
| `npm run start` | Watch theme files and source assets for changes, rebuild them and upload the results to Shopify automatically. |
| `npm run build` | Build theme for production. |
| `npm run deploy` | Build theme for production and deploy to Shopify. |


## Help

### Setting up your Shopify development environment
Follow the steps below to create a new private app and API key for use during development. Doing so will let us push our code to Shopify automatically. 
- Login to your store
- Click "Apps", "Manage Private Apps" and then "Create a new private app"
- Provide a name and email address for your new private app
- Grant **Read Access** to:
    - "Store content like articles, blogs, comments, pages, and redirects"
    - "Customer details and customer groups"
    - "Inventory"
    - "Locations"
    - "Orders, transactions and fulfillments"
    - "Products, variants and collections"
- Grant **Read and Write Access** to:
    - "Theme templates and theme assets"
- Add your new API key as the "password" in `theme/config.yml` and set the "Theme ID" and "Store" properties. Clicking "Actions" > "Edit Code" will display your themes ID (it's the last part of the URL). Save the config file.
- Run `npm run deploy` to build and deploy the theme to Shopify. The first deploy may give you some errors regarding missing section settings. This is expected as this theme will likely have different sections to the existing one.


## Contributors
[Donny Burnside](http://www.donnyburnside.com/)