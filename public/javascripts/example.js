$(document).ready(function() {
     $("#persons").puidatatable({
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
                var url = $("form").attr("action") + "?"+$("form").serialize()
                $.ajax({
                    url: url,
                    type: 'POST',
                    success: function(result) {
                        $('#persons').puidatatable("refresh");
                        $("#formDiv").puidialog('hide');
                        $("input").val("")
                    }
                });
            }
        }]
    });
});

var personId ;

addMessage = function(severity, msg) {
    $('h1').puimessages('show', severity, msg);
}


