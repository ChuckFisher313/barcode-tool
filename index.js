// Select the barcode type
var barcode_type = '';
function changebtncolor(buttonPressed) {
  console.log("Change button color function executed: invoked");
  var upcAbtn = document.getElementById("upcAbtn");
  var upcEbtn = document.getElementById("upcEbtn");
  var ean13btn = document.getElementById("ean13btn");
  var ean8btn = document.getElementById("ean8btn");

  upcAbtn.style.backgroundColor="white";
  upcAbtn.style.color="rgb(12, 20, 141";

  upcEbtn.style.backgroundColor="white";
  upcEbtn.style.color="rgb(12, 20, 141";

  ean13btn.style.backgroundColor="white";
  ean13btn.style.color="rgb(12, 20, 141";
  
  ean8btn.style.backgroundColor="white";
  ean8btn.style.color="rgb(12, 20, 141";

  document.getElementById(buttonPressed).style.backgroundColor="rgb(12, 20, 141)";
  document.getElementById(buttonPressed).style.color="white";

  console.log("Button color was changed.");

  //If buttonPressed = something change it to something else, set global variable to that. 

  switch (buttonPressed) {
    case "upcAbtn":
      barcode_type = "UPC-A";
      break;
    case "upcEbtn":
      barcode_type = "UPC-E";
      break;
    case "ean13btn":
      barcode_type = "EAN-13";
      break;
    case "ean8btn":
      barcode_type = "EAN-8";
      break;
  }  

  console.log("Set global variable of barcode selected");
  
}

// Select the operation you want to run 

function selectOperation(opselected){
console.log("Operation button selected")

var gencheckdigit = document.getElementById("checkDigit");
var expand = document.getElementById("expand");

gencheckdigit.style.backgroundColor="white";
gencheckdigit.style.color="rgb(12,20,141)";

expand.style.backgroundColor="white";
expand.style.color="rgb(12,20,141)";

document.getElementById(opselected).style.backgroundColor="rgb(12,20,141)";
document.getElementById(opselected).style.color="white";


}

function GenerateCheckDigit() {
  console.log("GenerateCheckDigit: invoked");
  var input_barcode = NormalizeUPC(
    document.getElementById("input_barcode").value
  );

  var barcode = NormalizeUPC("0");
  switch (barcode_type) {
    case "UPC-A":
      barcode = GenerateUPCA(input_barcode);
      break;
    case "UPC-E":
      barcode = GenerateUPCE(input_barcode);
      break;
    case "EAN-13":
      barcode = GenerateEAN13(input_barcode);
      break;
    case "EAN-8":
      barcode = GenerateEAN8(input_barcode);
      break;
  }
  // This is the output
  document.getElementById("barcode_result").innerHTML =
    "Type: " + barcode_type + ": " + barcode;
}

function NormalizeUPC(orig_barcode) {
  console.log("NormalizeUPC: invoked");
  var normalizedUPC = "0000000000000" + orig_barcode;
  normalizedUPC = normalizedUPC.substring(
    normalizedUPC.length - 13,
    normalizedUPC.length
  );
  return normalizedUPC;
}

function GenerateUPCA(orig_barcode) {
  console.log("GenerateUPCA: invoked");
  console.log("digit1: " + orig_barcode[0]);
  console.log("digit2: " + orig_barcode[1]);
  console.log("digit3: " + orig_barcode[2]);
  console.log("digit4: " + orig_barcode[3]);
  console.log("digit5: " + orig_barcode[4]);
  console.log("digit6: " + orig_barcode[5]);
  console.log("digit7: " + orig_barcode[6]);
  console.log("digit8: " + orig_barcode[7]);
  console.log("digit9: " + orig_barcode[8]);
  console.log("digit10: " + orig_barcode[9]);
  console.log("digit11: " + orig_barcode[10]);
  console.log("digit12: " + orig_barcode[11]);
  console.log("digit13: " + orig_barcode[12]);

  var barcode = orig_barcode; // Do some operations here
  return barcode;
}

function GenerateUPCE(orig_barcode) {
  console.log("GenerateUPCE: invoked");
  var barcode = orig_barcode; // Do some operations here
  return barcode;
}

function GenerateEAN13(orig_barcode) {
  console.log("GenerateEAN13: invoked");
  var barcode = orig_barcode; // Do some operations here
  return barcode;
}

function GenerateEAN8(orig_barcode) {
  console.log("GenerateEAN8: invoked");
  var barcode = orig_barcode; // Do some operations here
  return barcode;
}
