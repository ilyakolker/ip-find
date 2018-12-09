$("#loader").removeClass("outer");

const dataArry = [];
$('#run').on('click',function(){
  $("#loader").addClass("outer");
  $.get("https://cors-anywhere.herokuapp.com/https://proxycheck.io/v2/"+ip_input.value+"?vpn=1&asn=1&tag=proxycheck.io", function(data) {
    console.log(data);
    if (data.status === "error") {
      Loaderoff();
      $("#title").text(data.message);
      $("#title").addClass("bg-info");
      
    }else{
      if (data[ip_input.value].proxy == "yes") {
        Loaderoff();
        BuildData(data);
        $("#title").text("Proxy Detected");
        $("#title").addClass("bg-danger");
        
        }else {
        Loaderoff();
        BuildData(data);
        $("#title").text("Proxy Not detected");
        $("#title").addClass("bg-success");
        }
    }

  }, 'json');
 });

 function Loaderoff(){
   $("#ip-data").html("");
  $("#title").removeClass("bg-info");
  $("#title").removeClass("bg-success");
  $("#title").removeClass("bg-danger");
  $("#loader").removeClass("outer");
 }

 function BuildData(data){
  dataArry[0] = "Country: " + data[ip_input.value].country;
  dataArry[1] = "provider: " +data[ip_input.value].provider;
  dataArry[2] = "asn: " +data[ip_input.value].asn;
  dataArry[3] = "isocode: " +data[ip_input.value].isocode;
  var ul = document.createElement("ul");
  
  for (let i = 0; i < dataArry.length; i++) {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(dataArry[i]));
      if(i === 3){
        var flag = document.createElement("i");
        flag.setAttribute("class","flag flag-"+ data[ip_input.value].isocode.toLowerCase())
        li.appendChild(flag);
      }
      
      ul.appendChild(li);
  }
  $("#ip-data").html(ul);
 }