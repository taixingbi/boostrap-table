var $table = $('#table');




var data = [
	{"index": 0, "firstName": "Jitender", "lastName": "ben",    "timestamp": "10-04-19 12:00:17",   "email": "ben@gmail.com" },
	{"index": 1, "firstName": "hunter",   "lastName": "leo",    "timestamp": "10-04-18 12:00:17",   "email": "leo@gmail.com" },
	{"index": 2, "firstName": "ben",      "lastName": "ben",    "timestamp": "10-04-17 12:00:17",   "email": "ben@gmail.com" },
	{"index": 3, "firstName": "cooler",   "lastName": "cab",    "timestamp": "10-04-16 12:00:17",   "email": "cab@gmail.com" },
	{"index": 4, "firstName": "david",    "lastName": "henry", "timestamp":  "10-04-15 12:00:17",    "email": "henry@gmail.com" },
	{"index": 5, "firstName": "lily",     "lastName": "lie",    "timestamp": "10-04-14 12:00:17",   "email": "ben@gmail.com" },
	{"index": 6, "firstName": "Alice",    "lastName": "cool",   "timestamp": "10-04-13 12:00:17",   "email": "cool@gmail.com" },
	{"index": 7, "firstName": "bad",      "lastName": "ben",    "timestamp": "10-04-12 12:00:17",   "email": "lie@gmail.com" },
];

var tr;
for (var i = 0; i < data.length; i++) {
  tr = $('<tr/>');
  tr.append("<td>" + "</td>");
  tr.append("<td>" + data[i].index + "</td>");
  tr.append("<td>" + data[i].firstName + "</td>");
  tr.append("<td>" + data[i].lastName + "</td>");
  tr.append("<td>" + data[i].timestamp + "</td>");
  tr.append("<td>" + data[i].email + "</td>");

  $('table').append(tr);
}
