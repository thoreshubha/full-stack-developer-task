
const { Employee } = require("../models/EmployeeModel");

exports.create = (req, res) => {
    new Employee(req.body).save()
    .then(data => {
       res.json({msg:"new Employee created", Employee : data});
    })
    };

exports.update = (req, res) => {
    Employee.findOneAndUpdate({_id:`${req.body._id}`},req.body)
   .then(data => {
     res.send({msg:"successfully updated", Employee : data});
   })
};

exports.delete = (req, res) => {
    Employee.findOneAndDelete({_id:`${req.params.id}`})
    .then(data => {
      res.send({msg:"this Emoployee Deleted", Employee : data});
    })
};

// exports.display = (req, res) => {
//     Employee.find()
//       .then(data => {
//         res.send(data);
//       })
//     };

exports.display = (req, res) => {
  const contact = req.query.contact;
  if (!contact) {
      return res.status(400).json({ error: 'Mobile number is required in the query' });
  }
  Employee.findOne({ contact })
      .then(employee => {  
          if (!employee) {
              return res.status(404).json({ error: 'Employee not found' });
          }
          res.json(employee);
      })
      .catch(err => {
          res.status(500).json({ error: 'Server error' });
      });
};
