/**
 * Created by championswimmer on 08/04/17.
 */


$(function () {

    $('#addtodo').click(function () {

        let newTodo = "<li>" + $('#newtodo').val() + "</li>"
        $('#todolist').append(newTodo)
    })

});


console.log('script ran');