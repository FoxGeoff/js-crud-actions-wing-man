# Project js-crud-actions (for Wing Man Ver5)

## Introduction

1. Project is started from the command: "Express jj-crud-actions"
2. Video Ref: <https://app.pluralsight.com/course-player?clipId=1833d259-0c11-4e46-8f64-5d05b14ab3ad>
3. Video Name: Building CRUD Actions in a JavaScript REST API
4. Video Starter Code: <https://github.com/taylonr/js-crud-actions>
5. My Project: <https://github.com/FoxGeoff/js-crud-actions-main>

## Kanban Task: Project Setup

### Add npm packages

1. Video Ref: 2:16/4:21 <https://app.pluralsight.com/course-player?clipId=1833d259-0c11-4e46-8f64-5d05b14ab3ad>
2. The starting script builds an API and a JS client
3. run `npm install`
4. Add  3 npm packages to the package.json

```java
https://www.npmjs.com/package/lowdb
lowdb - acts as a datastore - run `npm i --save lowdb` (--save no longer required)
https://www.npmjs.com/package/lodash-id
lodash-id - generates ids for the Db run `npm i lodash-id`
nodemon - Auto start of the poject after changes run `npm i nodemon --save-dev`

  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "lodash-id": "^0.14.1", <<
    "lowdb": "^5.1.0",      <<
    "morgan": "~1.9.1", 
    "nodemon": "^2.0.22"    <<
  }
```

### Task: Update app.js

```Javascript
var apiRouter = require("./routes/api")(db);
...
app.use("/api", apiRouter);
```

1. Add file

```javascript
//file: routes/api.js
const express = require("express");
const router = express.Router();
const productsRouter = require("./products");

module.exports = function (db) {
    // setup for products -  DEMO ONLY
  router.use(productsRouter(db));

  return router;
};
```

### Task: Add Products to Routes (DEMO ONLY)

```javascript
var express = require('express');
var router = express.Router();
const qs = require('qs');

module.exports = function (db) {
  router
    .route('/products')
    .get((req, res) => {
      res.send(db.get('products').value());
    });
...   
...
  return router;
};    
```

### Task: Out of the box smoke test

1. localhost:3000        // Defined in the bin file

```html
Express
welcome to Express
```

### Task: Add Products to Routes (DEMO ONLY cont.)

1. run `npm i qs`
2. Add file db.json (products)
3. run `npm install axios`
4. add file: javascript/lodash.min.js
5. Add file: javascript/axios.min.js (Promise based HTTP client for the browser and node.js)
