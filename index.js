function GenerateCheckDigit() {
  console.log("GenerateCheckDigit: invoked");
  var input_barcode = NormalizeUPC(
    document.getElementById("input_barcode").value
  );
  var input_barcodetype = document.getElementById("input_barcodetype").value;
  var barcode = NormalizeUPC("0");
  switch (input_barcodetype) {
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
  document.getElementById("barcode_result").innerHTML =
    "Type: " + input_barcodetype + ": " + barcode;
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
