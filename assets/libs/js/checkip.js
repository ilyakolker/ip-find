$("#loader").removeClass("outer");
$('#run').on('click',function(){
  $("#loader").addClass("outer");
let xhr = new XMLHttpRequest();
let ipinput = ip_input.value;
const dataArry = []; 
dataArry.length = 4;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://proxycheck.io/v2/"+ipinput+"?key=446704-298402-570002-06g06y&vpn=1&asn=1&node=1&time=1&inf=0&port=1&seen=1&days=7&tag=msg";
xhr.open("GET",proxyurl+url); // assuming you’re hosting it locally
xhr.send()
xhr.onreadystatechange=(e)=>{
let ip =  JSON.parse(xhr.responseText);
if (ip[ipinput].proxy == "yes") {
dataArry[0] = "Country: " + ip[ipinput].country;
dataArry[1] = "provider: " +ip[ipinput].provider;
dataArry[2] = "asn: " +ip[ipinput].asn;
dataArry[3] = "isocode: " +ip[ipinput].isocode;
var ul = document.createElement("ul");

for (let i = 0; i < dataArry.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(dataArry[i]));
    ul.appendChild(li);
}
$("#ip-data").html(ul);
$("#title").removeClass("bg-success");
$("#loader").removeClass("outer");
$("#title").text("Proxy Detected");
$("#title").addClass("bg-danger");
}else {
dataArry[0] = "Country: " + ip[ipinput].country;
dataArry[1] = "provider: " +ip[ipinput].provider;
dataArry[2] = "asn: " +ip[ipinput].asn;
dataArry[3] = "isocode: " +ip[ipinput].isocode;
var ul = document.createElement("ul");

for (let i = 0; i < dataArry.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(dataArry[i]));
    ul.appendChild(li);
}
$("#ip-data").html(ul);
$("#title").removeClass("bg-danger");
$("#loader").removeClass("outer");
$("#title").text("Proxy Not detected");
$("#title").addClass("bg-success");
}
}
});