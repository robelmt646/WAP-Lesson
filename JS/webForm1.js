document.getElementById("btnSubmit").onclick = function(){
    let x = document.getElementById("productNumber").value;
    let y = document.getElementById("quantityInStock").value;
    let z = document.getElementById("name").value;
    let a = document.getElementById("supplier").value;
    let b = document.getElementById("unitPrice").value;
    let c = document.getElementById("dateSupplied").value;

    let myWindow = window.open("","MsgWindow", "width=200", "height=100");
        myWindow.document.write("Details of the Product"+ 
            "<br> ProductNumber:" +x
            +"<br>"+" QuantityInStock:" +y 
            +" <br> Name:" +z
            +"<br> Supplier:"+a
            +"<br> UnitPrice:"+b
            +"<br> DateSupplied:"+c);

}