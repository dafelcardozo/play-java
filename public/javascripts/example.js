$(document).ready(function() {
     $("#persons").puidatatable({
         paginator: {
                        rows: 10
                    },
        columns: [
            {field:'fname', headerText: 'Head 1', sortable:true},
            {field:'lname', headerText: 'Head 2', sortable:true},
            {field:'lname', headerText: 'Head 3', sortable:true},
            {field:'lname', headerText: 'Head 4', sortable:true},
            {field:'lname', headerText: 'Head 5', sortable:true},
            {field:'lname', headerText: 'Head 6', sortable:true},
            {field:'lname', headerText: 'Head 7', sortable:true},
            {field:'lname', headerText: '', sortable:true},
            {field:'lname', headerText: '', sortable:true},
            {field:'lname', headerText: '', sortable:true},
            {field:'lname', headerText: '', sortable:true},
            {field:'lname', headerText: '', sortable:true}
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



//  ventana emergente para agregar personas
    $("input[type='text']").puiinputtext();
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
//    fin de la ventana emergente para agregar personas

        $('#accordionCritries').puiaccordion();
        $('#mb1').puimenubar({
            autoDisplay: false
        });
        $('#in').puiinputtext();
        $('#eliminar').puibutton({icon : 'fa-align-left'});
});

var personId ;

addMessage = function(severity, msg) {
    $('h1').puimessages('show', severity, msg);
}


