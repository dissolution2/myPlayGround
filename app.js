// vid time stamp: Api vs Ssr 05:18:55 start
// time stamp - last : 05:31:06
// time stamp - last : 05:41:06
// 6:43
const express = require("express");
const app = express();
// const cors = require('cors'); // can test on codpen.io eks
const { products } = require("./data.js");


// middleware
// app.use(cors());
app.use(express.json()); // req.body !!y


app.get("/", (req, res) => {
  // res.json([{nam: 'Robin'}, {name:'Tommy'}]);
  // res.json(products);
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const showProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(showProduct);
});

app.get("/api/products/:productID", (req, res) => {
  // console.log(req.params);
  // console.log(req.params.productID);
  const { productID } = req.params;
  const singleProduct = products.find((product)=> product.id === Number(productID)); //Number(req.params.productID));
    
    res.json(singleProduct);
  });

app.get('/api/v1/query', (req, res)=> {
// localhost:8080/api/v1/query?name=john&id=4
console.log(req.query);
res.send('hello world');

});
  

const PORT = 8080;
app.listen(PORT || 3000, () => {
  console.log(`server is lisening on port ${PORT}`);
});


// "start": "node app.js"
// "dev": "nodemon app.js"