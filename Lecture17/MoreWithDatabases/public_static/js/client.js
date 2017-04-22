/**
 * Created by championswimmer on 22/04/17.
 */

$(function () {

    $('#newproductform').submit(function (ev) {
        ev.preventDefault();
        $.post('/api/products/add', {
            name: $('#productname').val(),
            price: $('#productprice').val()
        }, function (data) {
            console.log(data);
            let prodDom = "<tr><th> ID </th><th> Product </th><th> Price </th></tr>";
            for (product of data) {
                prodDom +=
                    "<tr>" +
                    "<td>" + product.id + "</td>" +
                    "<td>" + product.name + "</td>" +
                    "<td>" + product.price + "</td>" +
                    "</tr>"
            }
            $('#productlist').html(prodDom);


            // $('#productlist').append(
            //     "<tr>" +
            //     "<td>" + data.id + "</td>" +
            //     "<td>" + data.name + "</td>" +
            //     "<td>" + data.price + "</td> </tr>"
            // )
        })
    })


});
