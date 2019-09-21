$(document).ready(function () {

    // Your code here...
    var currentOperation;

    $(".number").on("click", function () {

        $("#first-number").append($(this).val());



    })

    $(".operator").on("click", function () {
        console.log($(this).val());
        var operator = $(this).val();
        currentOperation = operator;
        if (operator === "add") {

            // append plus to operator
            $("#operator").append("+");

            // need to add num1 and num 2
        }
        else if (operator === "minus") {
            $("#operator").append("-");
            //need to subract num2 from num1

        }
        else if (operator == "times") {

            $("#operator").append("X");
            //need to multiply num1 and num2

        }
        else if (operator == "divide") {
            $("#operator").append("/");
            // need to divide num1 by num 2

        }
        else if (operator == "power") {
            $("#operator").append("^");
            // need to  num1 to the power of  num 2

        }



    });


    $("#button-clear").on("click", function () {
        console.log($(this).val());


    })

    $("#button-equal").on("click", function () {
        console.log($(this).val());

        if (currentOperation === "add") {




            // need to add num1 and num 2
        }
        else if (currentOperation === "minus") {
            //need to subract num2 from num1

        }
        else if (currentOperation == "times") {

            //need to multiply num1 and num2

        }
        else if (currentOperation == "divide") {
            // need to divide num1 by num 2

        }
        else if (currentOperation == "power") {

            // need to  num1 to the power of  num 2

        }




    })


});