$(document).ready  ->
    $('h1').puimessages()
    $("#mostrarDialog").click ->
        $("#formDiv").puidialog 'show';
    $("button").puibutton()
    $('#eliminar').click ->
        $.ajax
            url: '/eliminar?personId='+personId,
            type: 'DELETE',
            success: (result) ->
                $('#persons').puidatatable 'refresh'
    addMessage 'warn',
        summary: 'Una aplicaci&oacute;n de ejemplo - '
        detail: 'Esta es mi aplicaci&oacute;n de ejemplo'