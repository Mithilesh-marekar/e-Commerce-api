

# E-Commerce-api
<!-- ecommerce api with node js and mongodb -->


* API for an ecommerce platform admin to manage product inventory

# URLS to test the API

- Tech Stack: Node.js &amp; Mongo DB
- [HINT] :: Test your API’s using Postman

- Models/Schemas:
- Products [fields: id, name, quantity]

- API to add products to the database
            URL [POST]: /products/create


- API to list products
            URL [GET] : /products


- API to delete products
            URL [DELETE] : /products/:id


- API to update quantity of a product (can be incremented or decremented)
            URL [POST] : /products/:id/update_quantity/?number=10




# Directory Structure

E-Commerce Api
├── config 
├     ├mongoose.js      
├
├──controllers
├       ├products_controller.js
├
├──models
├    ├product.js
├
├──routes
├    ├products.js
├
├──node_modules
├
├──app.js
├──package-lock.json
├──package.json
├──README.md

# Project Setup
-> make a folder "E-Commerce api"
-> make the directory structure as shown oe clone it from the GITHUB. 
-> Do "npm init " and setup your "package.json" file . 
-> Install dependencies required for this project. You can see it in "pakage.json" file. 
Note:- The version of dependencies may vary. so install the particular version as in json file.

->run the "app.js" file.  if sucessfull it will show "connected to database".

-> We have to test this API using a tool called "POSTMAN"
-> Install "POSTMAN" on your Device.
->Test it Using the URL's given above.









