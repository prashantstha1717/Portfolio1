fetch("https://api.github.com/users/prashantstha1717")
    .then(response => response.json())
    .then(function(data){
        console.log(data)

        document.getElementById('image').src = data['avatar_url']
        document.getElementById('fullname').textContent = data['name']
        document.getElementById('bio').textContent = data['bio']
    })


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/prashantstha1717/repos', true)

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    var statusHTML = '';
    $.each(data, function(i, status) {
        statusHTML += '<tr>';
        statusHTML += '<td>' + status.id + '</td>';
        statusHTML += '<td>' + status.name + '</td>';
        statusHTML += '<td>' + status.html_url + '</td>';
        statusHTML += '<td>' + status.language + '</td>';
        statusHTML += '</tr>';
    });
    $('tbody').html(statusHTML);
}

// Send request
request.send();