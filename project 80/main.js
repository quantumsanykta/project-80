function getPara() {

    var inputs = [];

    for( var i = 1; i<=6; i++) {
        inputs.push(document.getElementById("para_1_input_box_"+ i).value);
    };

    document.getElementById("show_paragraph").innerHTML = inputs.join(". ");


};