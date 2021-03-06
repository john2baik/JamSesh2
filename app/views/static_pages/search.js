/**
 * Created by ezhou7 on 4/23/17.
 */

function get_json(parent) {
    var url = "../prog_output.json";
    var fail = true;
    var paths = [];
    console.log("working");

    while (fail) {
        $.getJSON(url, function(j) {
            fail = false;
            paths = j.paths;
        }).error(function() { fail = true; })
    }

    for (var i = 0; i < paths.length; i++) {
        parent.appendChild(creat_slide(paths[i], i, paths.length));
    }
}

function creat_slide(pdf_path, pdf_num, max_num) {
    var slide_div = document.createElement("div");

    slide_div.className = "mySlides fade";
    slide_div.id = "pdf_slide_" + pdf_num.toString();

    slide_div.appendChild(creat_numtext(pdf_num, max_num));

    slide_div.appendChild(document.createElement("br"));
    slide_div.appendChild(document.createElement("br"));

    slide_div.appendChild(inner_container(pdf_path));

    return slide_div;
}

function creat_numtext(slide_num, max_slides) {
    var num_div = document.createElement("div");

    num_div.className = "numbertext";
    num_div.textContent = slide_num.toString() + " / " + max_slides.toString();

    return num_div;
}

function inner_container(pdf_path) {
    var con_div = document.createElement("div");
    con_div.className = "container";

    con_div.appendChild(creat_row(pdf_path));

    return con_div;
}

function creat_row(pdf_path) {
    var row_div = document.createElement("div");
    row_div.className = "row";

    row_div.appendChild(creat_panel(pdf_path));

    return row_div;
}

function creat_panel(pdf_path) {
    var panel_obj = document.createElement("object");

    panel_obj.className = "panel";
    panel_obj.type = "application/pdf";
    panel_obj.data = pdf_path + "#page=1";

    panel_obj.appendChild(creat_frame(pdf_path));

    return panel_obj;
}

function creat_frame(pdf_path) {
    var frame = document.createElement("iframe");

    frame.style.height = "100%";
    frame.style.width = "100%";
    frame.style.border = "none";

    frame.appendChild(creat_link(pdf_path));

    frame.textContent = "This browser does not support PDFs. Please download the PDF to view it:";
}

function creat_link(pdf_path) {
    var link = document.createElement("a");

    link.href = pdf_path;
    link.textContent = "Download PDF";

    return link;
}
