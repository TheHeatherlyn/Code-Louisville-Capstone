var callback = function(response) {


};

$.get(url,data, callback);


function sendAjax() {
    $.get("sidebar.html", function(response) {
        $("#ajax").hide();

    } );
}
