window.onload = function() 
{
    for(var d = 1; d <= 31; d++)
    {
        createElem("option", d, document.getElementById("date"));
    } 
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for(var m = 0; m < 12; m++)
    {
        createElem("option", months[m], document.getElementById("month"));
    }
    for(var y = 1998; y<= 2020; y++)
    {
        createElem("option", y, document.getElementById("year"));
    }
}
function createElem(elem, text, parent)
{
    var element = document.createElement(elem);
    element.textContent = text;
    parent.appendChild(element);
}