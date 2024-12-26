const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');
const employee = require('../models/employee');

router.get('/', (req, res) => {
  Employee.find()
    .then((employees) => {
      console.log(employees);
      console.log('Employees fetched successfully');
      res.render('index', { employees: employees });
    }).catch((err) => { 
      console.log(err); 
      res.send('Error: ' + err);
    });
});

// Employee

router.get('/employee/search', (req, res) => {
  res.render('search', { employees: [] });
});

router.post('/employee', (req, res) => {
  let serarchQuery = req.body.name;
  Employee.find({name: serarchQuery})
    .then((employees) => {

      console.log(employees);
      res.render('search', { employees : employees });

    }).catch((err) => {
      console.log(err);
      res.send('Error: ' + err);
    });
});


router.get('/employee/new', (req, res) => {
  res.render('new');
});

router.post('/employee/new', async (req, res) => {

  let newEmployee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    salary: req.body.salary
  });

  Employee.create(newEmployee)
    .then((employee) => {
      console.log('Employee added successfully');
      res.redirect('/');
    }).catch((err) => {
      console.log('Error: ' + err);
      res.send('Unsuccessful');
    });

});

router.get('/edit/:id', (req, res) => {
  Employee.findById(req.params.id)
    .then((employee) => {
      res.render('edit', { employee: employee });
    }).catch((err) => {
      console.log('Error: ' + err);
      res.send('Unsuccessful');
    });
});

router.put('/edit/:id', (req, res) => {
  console.log("PUTTED");

  Employee.updateOne({ _id: red.params.id }, {$set : {
    name: req.body.name,
    designation: req.body.designation,
    salary: req.body.salary
  }})
    .then((employee) => {
      console.log('Employee updated successfully');
      res.redirect('/');
    }).catch((err) => {
      console.log('Error: ' + err);
      res.send('Unsuccessful');
    });
});


module.exports = router;