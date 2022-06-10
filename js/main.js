// // global variables 
//  get value 
// add product 
let driverName = document.getElementById("driverName");
let driverAddress = document.getElementById("driverAddress");
let carNumber = document.getElementById("carNumber");
let tractorNumber = document.getElementById("tractorNumber");
let carryDate = document.getElementById("carryDate");
let invoiceNumber = document.getElementById("invoiceNumber");
let weight = document.getElementById("weight");
let price = document.getElementById("price");
let custody = document.getElementById("custody");
let office = document.getElementById("office");
let scale = document.getElementById("scale");
let commission = document.getElementById("commission");
let discount = document.getElementById("discount");
let addition = document.getElementById("addition");
let netRevenue = document.getElementById("netRevenue");
let report = document.getElementById("report");
let allInvoices ; 


// get date 
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1) + '-'+today.getDate();
let myDate = document.getElementById("myDate");
myDate.innerHTML = date;




function  getValue(){
 
  let   myWeight = weight.value;
  let   myPrice = price.value;
  let   myAddition = addition.value ; 
  let   myCustody = custody.value;
  let   myOffice = office.value; 
  let   myCommission = commission.value;
  let   myScale = scale.value; 
  let   myDiscount = discount.value;

  let result = 1;
  result =
    +myWeight * +myPrice +
    +myAddition -
    (+myCustody + +myOffice + +myCommission + +myScale + +myDiscount);
    netRevenue.innerHTML = result;
}

if (localStorage.allInvoices == null) {
  allInvoices = [];
} else {
  allInvoices = JSON.parse(localStorage.allInvoices);
  // showProduct();
}



  // add product
  function addInvoice() {
    if (
      driverName.value == "" ||
      carNumber.value == "" ||
      tractorNumber.value == "" ||
      invoiceNumber.value == "" ||
      weight.value == "" ||
      price.value == "" ||
      custody
    .value == "") {
      alert("يجب ان تملأ جميع الخانات ")
    }else {
      let invoice = {
        carryDate: carryDate.value,
        invoiceNumber: invoiceNumber.value,
        weight: weight.value,
        price: price.value,
        custody: custody.value,
        office: office.value,
        scale: scale.value,
        commission: commission.value,
        discount: discount.value,
        addition: addition.value,
        netRevenue: netRevenue.innerHTML,
        report: report.value,
      };
      allInvoices.push(invoice);
      localStorage.setItem("allInvoices", JSON.stringify(allInvoices));
      document.getElementById("name").innerHTML = "السيد / " + driverName.value;
      document.getElementById("address").innerHTML =
        "عنوانه / " + driverAddress.value;
      document.getElementById("carrNumber").innerHTML =
        "رقم السياره / " + carNumber.value;
      document.getElementById("trailerNumber").innerHTML =
        "رقم المقطوره / " + tractorNumber.value;
      showProduct();
      clearInputs();
    
    }
    
   
  }


//   show product 

function showProduct(){
  let trs = ``;
  for(let i =0 ; i< allInvoices.length; i++){
    trs += `
    <tr>
    <td>${i}</td>
    <td>${allInvoices[i].carryDate}</td>
    <td>${allInvoices[i].invoiceNumber}</td>
    <td>${allInvoices[i].weight}</td>
    <td>${allInvoices[i].price}</td>
    <td>${allInvoices[i].custody}</td>
    <td>${allInvoices[i].office}</td>
    <td>${allInvoices[i].scale}</td>
    <td>${allInvoices[i].commission}</td>
    <td>${allInvoices[i].discount}</td>
    <td>${allInvoices[i].addition}</td>
    <td>${ Math.round(allInvoices[i].netRevenue) }</td>
    <td>${allInvoices[i].report}</td>
    </tr>
    `;
  }
  document.getElementById("tableBody").innerHTML = trs;
   let totalResult = 0; 
  for(let i =0; i< allInvoices.length; i++){
   totalResult += Number(allInvoices[i].netRevenue) ;
  }
  document.getElementById("total").innerHTML = totalResult;
}
showProduct();



//  clear inputs 


function clearInputs (){
driverName.value = "";
}