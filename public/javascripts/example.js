$(document).ready(function() {
/*
    $.get("/persons", function(persons) {
      $.each(persons, function(index, person) {
           $("#persons tbody").append("<tr><td>"+person.fname+"</td><td>"+person.lname+"</td><td><button data-person='"+person.personId+"'>X</button></td></tr>");
      });
      setTimeout(function(){
        $("table button").puibutton();
        $("table").puidatatable();
      }, 1000);

    });
*/
     $("table").puidatatable({
            columns: [
                {field:'fname', headerText: 'Nombre', sortable:true},
                {field:'lname', headerText: 'Apellido', sortable:true},
                {}
            ],
         datasource: function(callback) {
             $.ajax({
                 type: "GET",
                 url: '/persons',
                 dataType: "json",
                 context: this,
                 success: function(response) {
                     callback.call(this, response);
//                     $("table button").puibutton();
                 }
             });
         },
     });

    $("#persons").on("click", "button", function() {
        var id = ""+$(this).data("person");

        $.ajax({
            url: '/eliminar?personId='+id,
            type: 'DELETE',
            success: function(result) {
                location.reload();
            }
        });
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
                         //   $('#dlg').puidialog('hide');
                        }
                    }],
     });

    $("#mostrarDialog").click(function() {
        $("#formDiv").puidialog('show');
    });
    $("button").puibutton();
    $('h1').puimessages();

    addMessage('warn', {summary: 'Una aplicaci&oacute;n de ejemplo - ', detail: 'Esta es mi aplicaci&oacute;n de ejemplo'});

});


addMessage = function(severity, msg) {
    $('h1').puimessages('show', severity, msg);
}
