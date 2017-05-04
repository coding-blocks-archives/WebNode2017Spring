/**
 * Created by championswimmer on 04/05/17.
 */

function area (name, dim1, dim2) {
    if (typeof name != 'string') {
        dim2 = dim1;
        dim1 = name;
        if (dim2) {
            return dim1 * dim2
        }
        else {
            return Math.PI * dim1 * dim1
        }
    } else {
        if (dim2) {
            return "Area of " + name + dim1 * dim2
        }
        else {
            return "Area of " + name + Math.PI * dim1 * dim1
        }
    }



}

console.log(area(2,3));
console.log(area(3));
console.log(area('rectangle', 4, 6));
console.log(area('gola', 5));

function rest(...vars) {
    console.log(vars);
}

function spread(s1, s2, s3) {
    console.log(s1);
    console.log(s2);
    console.log(s3);
}

rest(10, "Asdas", true);
spread(...[123, "asd", false]);

function hello (callback) {
    console.log('Hello');
    callback(' from the other side');
}

function helloback(from) {
    console.log('Hello' + from);
}

hello(helloback);


function fun1(one, cb1) {
    console.log('running fun1');
    cb1(one);
    console.log('ran cb1');
}
function fun2(two, cb2) {
    console.log('running fun2');
    cb2(two);
    console.log('ran cb2');
}

function fun3(three, cb3) {
    console.log('running fun3');
    cb3(three);
    console.log('ran cb3');
}

fun1(1, function(d1) {
    fun2(2, function (d2) {
        fun3(3, function (d3) {
            console.log(d1 + " " + d2 + " " + d3);
        })
    })
});

function f1 (fo) {
    fo();
}

function f2 (fo) {
    fo(f1);
}



f2(function(fun) {
    fun(function() {
        console.log('hello');
    })
});

