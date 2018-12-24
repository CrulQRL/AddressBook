$(document).ready(function(){
    $.ajax({
        url: "http://137.116.141.194:8080/api/address/" 
    }).then(function(data) {
        console.log(data);
        var addressItem = $("#addressItem");
        $.each(data, function(k, v){
            var template = "<tr><td>" + v.user_id + "</td><td>" + v.name + "</td><td>" + v.address + "</td><td>" + v.phone_number + "</td><tr>";
            addressItem.append(template)
        });
    });
});


var request = function() {
    name = $("#name").val()
    address = $("#address").val()
    number = $("#number").val();
    $.post("http://13.76.43.42/api/user/",
    function(data, status){
      console.log("1) Data: " + data.user_id + "\nStatus: " + status);
      postAddress(data.user_id, name, address, number)
    });
}

var postAddress = function (user_id, name, address, phone_number){
    $.post("http://137.116.141.194:8080/api/address/",
    {
        user_id: user_id,
        name: name,
        address: address,
        phone_number: phone_number
    },
    function(data, status){
      var addressItem = $("#addressItem");
      var template = "<tr><td>" + data.user_id + "</td><td>" + data.name + "</td><td>" + data.address + "</td><td>" + data.phone_number + "</td><tr>";
      addressItem.append(template);
    });
}