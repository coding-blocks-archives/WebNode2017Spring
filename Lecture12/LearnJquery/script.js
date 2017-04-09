/**
 * Created by championswimmer on 08/04/17.
 */


$(function () {

    $('#addtodo').click(function () {

        let newTodo = "<li>" + $('#newtodo').val() + "</li>"
        $('#todolist').append(newTodo)
    })

});

String.prototype.appendTo = function (selector) {

    $(this.substring(0)).appendTo(selector)
};


console.log('script ran');