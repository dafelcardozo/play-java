$ ->
    $.get "/person", (persons) ->
        $.each persons, (index, person) ->
            $("#persons").append $("<li>").text person.fname