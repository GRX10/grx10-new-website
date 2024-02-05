
$(document).on('ready', function () {
    
    //to auto change date in footer
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
});

