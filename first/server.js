const express = require('express');
const app = express();
const port = 3000;
let data = ['doggy style',"misonary" ,"cowgirl" , "69"];
app.get('/', (req, res) => {
    
  res.send(200);

});
app.get('/Dashboard', (req, res) => {
  res.send('Welcome to the Dashboard');
});
app.get('/api/data', (req, res) => {
  res.send(data);
});
app.use(express.json());
app.post('/api/data', (req, res) => {
  const datas = req.body;
  data.push(datas.message)
  console.log(datas.message);
  res.status(201).send(data);
});
app.delete('/api/delete', (req, res) => {
  data.pop(data[1])
  res.status(203).send(data)
} )

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});