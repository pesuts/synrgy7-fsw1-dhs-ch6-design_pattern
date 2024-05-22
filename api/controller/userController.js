const router = require('express').Router()

const UserModel = require('../models/user.model')

const idChecker = async (req, res, next) => { 
  const id = req.params.id;
  const newId = +id;

  if (!(newId > 0)) res.send({ status: "Error", message: "Id not valid" })

  const user = await UserModel.query().where("id", id)
  if (user.length === 0) res.status(404).send({ status: "Error", message: "Id not found" })
  next()
}

router.get('/', (req, res) => { 
  res.render("index", {nama: "boba"});
})

router.get('/users', async (req, res) => { 
  const users = await UserModel.query();
  
  res.render("users", {data: users});
})

router.get('/users/:id', idChecker, async (req, res) => { 
  const id = req.params.id;

  const user = await UserModel.query().where("id", id);
  
  res.render("users", {data: user});
  // res.send({data: user});
})

router.post('/users', async (req, res) => { 
  const { name, password, email, phone_number } = req.body;
  const user = await UserModel.query().insert({
    name, password, email, phone_number
  })
  
  res.send({message: "Successs", data: user})
  // res.render("users", {data: users});
})

router.put('/users/:id', async (req, res) => { 
  const id = req.params.id;
  const { name, password, email, phone_number } = req.body;

  await UserModel.query().where("id", id).update({
    name, password, email, phone_number
  })

  const user = await UserModel.query().where("id", id);
  
  res.send({message: "Successs", data: user})
  res.render("users", {data: user});
})

router.delete('/users/:id', async (req, res) => { 
  const id = req.params.id;

  await UserModel.query().deleteById(id);

  res.send({message: "Successs", data: user})
  // res.render("users", {data: user});
})



module.exports = router;