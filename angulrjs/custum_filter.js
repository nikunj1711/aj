<!DOCTYPE html>
<html>
<head>
	<title> P6 </title>
	<script src="angular.min.js"></script>
</head>
<body ng-app="myApp" ng-controller="myctrl">
	<br><br>
<center>
	<h1> Employee Table </h1>
	<br> 
<h2>
<table border="1">
	<tr> 
		<th>Employee Name </th>
		<th>City </th>
		<th>Gender </th>
	</tr>
<tr ng-repeat="x in myname"> 
<td>  {{x.name | uppercase}}</td>
<td>  {{x.ct }} </td>
<td>  {{x.gen | myFormat}} </td>
</tr>
</table>
</h2>
</center>
<script>	
	var modulemain = angular.module("myApp",[]);

	modulemain.filter("myFormat", function() {
    return function(gen) {
        if(gen==1){
        	return "male";
        }
         if(gen==2){
        	return "female";
        }
     };
    });

	modulemain.controller("myctrl",function($scope) {
		 
		$scope.myname = [

			{name : 'Nikunj', ct : 'Mehsana' ,gen: "1"},
			 
			{name : 'Khushi', ct : 'surat' ,gen: "2"},
		 
			{name : 'Ravi', ct : 'patan' ,gen: "1"},
			{name : 'Vashu', ct : 'mehsana' ,gen: "1"},
			{name : 'Afrina', ct : 'bhavnagar' ,gen: "2" },

			];

	});
</script>
</body>
</html>