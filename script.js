function ajax(){
    //Creating XHR object
    
    var xhttp=new XMLHttpRequest();
    
    //Event Listener
    
    xhttp.onreadystatechange=function(){
        //condition
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var products = response.product;
            var finalPrice = 0;
            var finalPriceText ="";
            var output = "<table><tr><th>S.No</th><th>Item Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Price</th></tr>";  
            for(var i=0; i<products.length;i++){
                output += "<tr>"
                output += "<td>" + products[i].serialNo + "</td>";
                output += "<td>" + products[i].name + "</td>";
                //output += '<td> <select id="qty-list"+i onchange="updatePrice();"> <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>  </td>';
                output += "<td>" + products[i].quantity + "</td>";
                output += "<td>" + products[i].unit + "</td>";
                output += "<td>" + products[i].department + "</td>";
                output += "<td>" + products[i].notes + "</td>";
                 output += "<td>" + products[i].price + "</td>";
                output += "</tr>";
               finalPrice += parseInt(products[i].price);

            }

            output += "</table>"
            finalPriceText = "<p >Total Estimated Price: ₹ " +finalPrice +"</p> <br>";
            document.getElementById("grocery-list-table").innerHTML=output;
            document.getElementById("total-price").innerHTML=finalPriceText;
        }
    }
   
    xhttp.open("GET","items.json",true);
    xhttp.send();
}
    
    
function sortList() {

    var dept = document.getElementById("category-list").value;
    console.log(dept);

    if(dept == "Select") {ajax();}

    else{

            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function(){
        
                if(this.readyState==4 && this.status==200){
                    var response = JSON.parse(this.responseText);
                    var products = response.product;
                    var finalPrice = 0;
                    var finalPriceText ="";
                    var output = "<table><tr><th>S.No</th><th>Item Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Price</th></tr>";
                    
                    for(var i=0; i<products.length;i++){
                        if(products[i].department == dept) {
                            output += "<tr>"
                            output += "<td>" + products[i].serialNo + "</td>";
                            output += "<td>" + products[i].name + "</td>";
                            output += "<td>" + products[i].quantity + "</td>";
                            output += "<td>" + products[i].unit + "</td>";
                            output += "<td>" + products[i].department + "</td>";
                            output += "<td>" + products[i].notes + "</td>";
                            output += "<td>" + products[i].price + "</td>";
                            output += "</tr>"
                            finalPrice += parseInt(products[i].price);
                        }
                        else continue;
                    }

                    output += "</table>"
                    finalPriceText = "<p >Total Estimated Price: ₹ " +finalPrice +"</p> <br>";
                    document.getElementById("grocery-list-table").innerHTML=output;
                    document.getElementById("total-price").innerHTML=finalPriceText;
                    
                }
            }
        
            xhttp.open("GET","items.json",true);
            xhttp.send();
        }
}   

function updatePrice(){
    //Creating XHR object
    
    var xhttp=new XMLHttpRequest();
    
    //Event Listener
    
    xhttp.onreadystatechange=function(){
        //condition
        if(this.readyState==4 && this.status==200){
            var response = JSON.parse(this.responseText);
            var products = response.product;
            var qty=0;
            var finalPrice = 0;
            var finalPriceText ="";
            var output = "<table><tr><th>S.No</th><th>Item Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th><th>Price</th></tr>";  
            for(var i=0; i<products.length;i++){
                output += "<tr>"
                output += "<td>" + products[i].serialNo + "</td>";
                output += "<td>" + products[i].name + "</td>";
                //output += '<td> <select id="qty-list"+i> <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>  </td>';
                //qty=document.getElementById("qty-list").value;
                //console.log(qty);
                output += "<td>" + products[i].quantity + "</td>";
                output += "<td>" + products[i].unit + "</td>";
                output += "<td>" + products[i].department + "</td>";
                output += "<td>" + products[i].notes + "</td>";
                output += "<td>" + products[i].price + "</td>";
                output += "</tr>";
               finalPrice += parseInt(products[i].price);

            }

            output += "</table>"
            finalPriceText = "<p >Total Estimated Price: ₹ " +finalPrice +"</p> <br>";
            document.getElementById("grocery-list-table").innerHTML=output;
            document.getElementById("total-price").innerHTML=finalPriceText;
        }
    }
   
    xhttp.open("GET","items.json",true);
    xhttp.send();
}

// additem(){
//      //Creating XHR object
    
//      var xhttp=new XMLHttpRequest();
    
//      //Event Listener
     
//      xhttp.onreadystatechange=function(){
//          //condition
//          if(this.readyState==4 && this.status==200){

 
             
 
//              output += "</table>"
//              finalPriceText = "<p >Total Estimated Price: ₹ " +finalPrice +"</p> <br>";
//              document.getElementById("grocery-list-table").innerHTML=output;
//              document.getElementById("total-price").innerHTML=finalPriceText;
//          }
//      }
     
//     xhttp.open("POST","items.json",true);
//     xhttp.send();
    
// }













var source = new EventSource("index.html");
source.onopen(ajax());
