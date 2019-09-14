var router = require('express').Router();

//Method To Render Manage Employees Page
router.get('/manageEmployees', function (req, res) {
    res.render('ManageEmployees/index');
});

//Method To Create New Employee
router.route('/createEmployee').get(function (req, res) {
 res.render('ManageEmployees/addEmployee');
}).post(function (req, res) {

});

//Method To Update Employee Details
module.exports = router;