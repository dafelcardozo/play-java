$(document).ready(function() {
     $("table").puidatatable({
        columns: [
            {field:'fname', headerText: 'Nombre', sortable:true},
            {field:'lname', headerText: 'Apellido', sortable:true}
        ],
        selectionMode:'single',
        datasource: function(callback) {
         $.ajax({
             type: "GET",
             url: '/persons',
             dataType: "json",
             context: this,
             success: function(response) {
                 callback.call(this, response);
             }
         });
        },
        rowSelect: function(event, data) {
          personId = data.personId;
        },
     });


    $("input").puiinputtext();
    $("#formDiv").puidialog({
        showEffect : 'fade',
        hideEffect : 'fade',
        minimizable : true,
        maximizable : true,
        width       : 600,
        modal : true,
        location : 'top',
        title:'Hola mundo',
        dialog_title:"Hola mundo",
        buttons : [ {
            text : 'Agregar',
            icon : 'ui-icon-check',
            click : function()
            {
                $("form").submit();
            }
        }]
    });

    $("#mostrarDialog").click(function() {
        $("#formDiv").puidialog('show');
    });
    $("button").puibutton();
    $('h1').puimessages();

    addMessage('warn', {summary: 'Una aplicaci&oacute;n de ejemplo - ', detail: 'Esta es mi aplicaci&oacute;n de ejemplo'});

    $("#eliminar").click(function() {
        $.ajax({
            url: '/eliminar?personId='+personId,
            type: 'DELETE',
            success: function(result) {
                location.reload();
            }
        });
    });
});

var personId ;

addMessage = function(severity, msg) {
    $('h1').puimessages('show', severity, msg);
}
