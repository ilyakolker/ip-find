// Working Code
$('#run').on('click',function(){
     let xhr = new XMLHttpRequest();
     let ipinput = ip_input.value;
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
     const url = "http://proxycheck.io/v2/"+ipinput+"?key=446704-298402-570002-06g06y&vpn=1&asn=1&node=1&time=1&inf=0&port=1&seen=1&days=7&tag=msg";
     xhr.open("GET",proxyurl+url); // assuming you’re hosting it locally
     xhr.send()
     xhr.onreadystatechange=(e)=>{
     let ip =  JSON.parse(xhr.responseText);
    console.log(ip[ipinput].proxy);
    if (ip[ipinput].proxy == "yes") {
        $("#title").text("Proxy Detected");
        $("#title").addClass("bg-danger");
    }else {
     $("#title").text("Proxy Not detected");
        $("#title").addClass("bg-success");
    }
         }
     });

