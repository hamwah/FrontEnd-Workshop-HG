$(document).ready(function(){
$("button").click(function(){
let name = $("#drink").val();
let quantity = $("#quantity").val();
let row = "<tr><td>"+name+"</td><td>"+quantity+"</td></tr>";
$("table tbody").append(row);
});
});