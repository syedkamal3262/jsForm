let nearestOfficeData=[
    "CLIFTON",
    "DHA",
    "GULSHAN",
    "SADDAR",
    "BHADURABAD",
    "P.E.C.H.S"
]
let relocate=[
    "Pakistan",
    "Afghanistan",
    "Bhutan",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Philippines",
    "Vietnam"
]
let countries=[
    "Pakistan",
    "Afghanistan",
    "Bhutan",
    "Indonesia",
    "Japan",
    "Malaysia",
    "Philippines",
    "Vietnam"
]
let companies=[
    "ABC",
    "XYZ",
    "HIJ",
    "LMN",
    "OPQ",
    "RST"
]

var nearOff= document.getElementById("nearestOffice");
for(let i=0;i<nearestOfficeData.length;i++){
  let option = document.createElement("option");
  option.text = nearestOfficeData[i]  ;
  nearOff.add(option);
}

var rel= document.getElementById("relocate");
for(let i=0;i<relocate.length;i++){
  let option = document.createElement("option");
  option.text = relocate[i]  ;
  rel.add(option);
}

var count= document.getElementById("countries");
for(let i=0;i<countries.length;i++){
  let option = document.createElement("option");
  option.text = countries[i]  ;
  count.add(option);
}


var rel2= document.getElementById("relocate2");
for(let i=0;i<relocate.length;i++){
  let option = document.createElement("option");
  option.text = relocate[i]  ;
  rel2.add(option);
}

var com= document.getElementById("companies");
for(let i=0;i<companies.length;i++){
  let option = document.createElement("option");
  option.text = companies[i]  ;
  com.add(option);
}

function restForm(){
  document.getElementById("myForm").reset();
}
