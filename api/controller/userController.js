const router = require('express').Router()

const userServices = require('../service/userServices');

const idChecker = async (req, res, next) => { 
  const id = req.params.id;
  const newId = +id;

  if (!(newId > 0)) res.send({ status: "Error", message: "Id not valid" })

  const user = await userServices.getUserById(id)
  if (user.length === 0) res.status(404).send({ status: "Error", message: "Id not found" })
  next()
}

router.get('/', (req, res) => { 
  res.render("index", {nama: "boba"});
})

router.get('/users', async (req, res) => { 
  const users = await userServices.getUsers();
  
  res.render("users", {data: users});
})

router.get('/users/:id', idChecker, async (req, res) => { 
  const id = req.params.id;

  const user = await userServices.getUserById(id);
  
  res.render("users", {data: user});
  // res.send({data: user});
})

router.post('/users', async (req, res) => { 
  const { name, password, email, phone_number } = req.body;

  const user = await userServices.createUser({
    name, password, email, phone_number
  })
  
  res.send({message: "Successs", data: user})
})

router.put('/users/:id', async (req, res) => { 
  const id = req.params.id;
  const { name, password, email, phone_number } = req.body;

  await userServices.updateUser({
    name, password, email, phone_number
  })

  const user = await getUserById(id);

  res.send({message: "Successs", data: user})
  res.render({status: "Success", message: "User sucessfully updated", data: user});
})

router.delete('/users/:id', async (req, res) => { 
  const id = req.params.id;

  await userServices.deleteUser(id);

  res.send({status: "Success", message: "User sucessfully deleted"})
})

module.exports = router;