(function() {
  'use strict';

  angular
    .module('batch4TeamBFrontendApp')
    .factory('authServices', authServices);

  authServices.$inject = ['$http', '$window', '$state'];

  function authServices($http, $window, $state) {
    var baseUrl = 'http://api.cariilmu.online/v1';
    // function login(){ }
    // API For login Admin
    var login = function(email, password) {
      var options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: baseUrl + '/admin/login',
        data: {
          email: email,
          password: password,
        },
      };
      return $http(options);
    };
    // This is for get Token
    var isLoggedIn = function() {
      return $window.localStorage.getItem('token');

    };

    // Remove Token
    var removeToken = function() {
      return $window.localStorage.removeItem('token');
    };
    // API for get all classes
    var getAllClassesList = function(token, page, size) {

      var options = {
        url: baseUrl + '/admin/classes/list?size=100',
        method: 'GET',
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Token': token,
          // "Authorization": token,
        },
        params: {
          page: page,
          size: size
        },


      };
      return $http(options);


    };


    // API for get all classes
    var getAllStudentList = function(token) {

      var options = {
        url: baseUrl + '/admin/students/list?size=100',
        method: 'GET',
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Token': token,
          // "Authorization": token,
        },



      };
      return $http(options);


    };

    // API for get all classes
    var getAllPaymentList = function(token) {

      var options = {
        url: baseUrl + '/admin/payment/list',
        method: 'GET',
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Token': token,
          // "Authorization": token,
        },



      };
      return $http(options);


    };
    // API for get all teacher
    var getAllTeacherList = function(token) {

      var options = {
        url: baseUrl + '/admin/teachers/list?size=100',
        method: 'GET',
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Token': token,
          // "Authorization": token,
        },


      };
      return $http(options);


    };

    // API for get all teacher for select teacher in insertClasses
    var getAllTeacherList2 = function(token) {

      var options = {
        url: baseUrl + '/admin/teachers/list?size=100',
        method: 'GET',
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Token': token,
          // "Authorization": token,
        },


      };
      return $http(options);


    };

    // API for Create Classes
    var insertClasses = function(
      name1,
      price,
      description1,
      location1,
      dateStart,
      category,
      startTime,
      endTime,
      selectTeacher,
      token) {

      var options = {
        method: 'POST',
        headers: {

          'Token': token,

        },
        url: baseUrl + '/admin/classes/add',
        data: {
          categoryId: "" + category,
          description: description1,
          endAt: dateStart + " " + endTime,
          locationName: location1,
          name: name1,
          price: parseInt(price),
          startAt: dateStart + " " + startTime,
          teacherId: selectTeacher.id
        },
      };

      return $http(options);


    };

    // API for Delete Classes

    var deleteStudent = function(id, token) {
      var options = {
        method: 'DELETE',
        headers: {
          'Token': token,
        },
        url: baseUrl + '/admin/students/remove/' + id
      };

      return $http(options);
    };

    // API for Delete Teacher

    var deleteTeacher = function(id, token) {
      var options = {
        method: 'DELETE',
        headers: {
          'Token': token,
        },
        url: baseUrl + '/admin/teachers/remove/' + id
      };

      return $http(options);
    };
    // API for Delete Student

    var deleteClasses = function(id, token) {
      var options = {
        method: 'DELETE',
        headers: {
          'Token': token,
        },
        url: baseUrl + '/admin/classes/remove/' + id
      };

      return $http(options);
    };

    // API for Create Teacher
    var insertTeacher = function(
      name,
      email,
      phoneNumber,
      lastEducation,
      institution,
      token) {

      var options = {
        method: 'POST',
        headers: {

          'Token': token,

        },
        url: baseUrl + '/admin/teachers/add',
        data: {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          lastEducation: lastEducation,
          institution: institution
        },
      };

      return $http(options);
    };
    // API for create student
    var insertStudent = function(
      name,
      email,
      username,
      phoneNumber,
      password,
      token) {

      var options = {
        method: 'POST',
        headers: {

          'Token': token,

        },
        url: baseUrl + '/admin/students/add',
        data: {
          name: name,
          email: email,
          username: username,
          phoneNumber: phoneNumber,
          password: password
        },
      };

      return $http(options);
    };

    // API for confirmation

    var setPaymentConfirm = function(id, token, confirmDate) {
      var options = {
        method: 'PUT',
        headers: {
          'Token': token,
        },
        url: baseUrl + '/admin/payment/edit/' + id,
        data: {
          date: confirmDate,
          status: "paid"
        },
      };

      return $http(options);
    };



    // return
    return {
      // ini adalah object,
      // nama properti/yang dibaca controler : nama variabel/nama fungsi/yang diminta service
      login: login,
      // getToken: getToken,

      isLoggedIn: isLoggedIn,
      getAllClassesList: getAllClassesList,
      getAllTeacherList: getAllTeacherList,
      getAllTeacherList2: getAllTeacherList2,
      getAllStudentList: getAllStudentList,
      getAllPaymentList: getAllPaymentList,
      setPaymentConfirm: setPaymentConfirm,
      insertClasses: insertClasses,
      removeToken: removeToken,
      insertTeacher: insertTeacher,
      insertStudent: insertStudent,
      deleteClasses: deleteClasses,
      deleteStudent: deleteStudent,
      deleteTeacher: deleteTeacher,
    };
  }


})();
