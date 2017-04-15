/**
 * Created by championswimmer on 15/04/17.
 */

$(function () {

    $('#addtodo').click(function () {

        $.post('/addtodo',
            {task: $('#newtodo').val()},
            function (data) {
                let list = "";
                for (todo of data) {
                    list += ("<li>" + todo + "</li>")
                }
                $('#todolist').html(list)
            }
        )

    })

});