'use strict';

var users = [];
var listOfUsers = [];

//  users.push()
$("#submit").click(function () {

    var firstName = document.getElementById('firstName').value;
    var lastName = $('#lastName').val();
    var age = $('#age').val();

    if (firstName !== null && lastName !== null && age !== null) {
        users.firstName = firstName;
        users.lastName = lastName;
        users.age = age;
        listOfUsers.push(users);
        users = [];
    }
    console.log(listOfUsers);
    $('tbody').append('<tr><td>' +firstName + '</td><td>' + lastName + '</td><td>' + age + '</td></tr>')
   
});
$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
