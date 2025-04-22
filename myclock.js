const hr=document.querySelector(".hnum")
const mn=document.querySelector(".mnum")
const sec=document.querySelector(".snum")
const msec=document.querySelector(".milinum")
const apm=document.querySelector(".ampm")

function uptime(){
    const time=new Date();
    const hrr=time.getHours();
    // hr.innerText=time.getHours();
    mn.innerText=time.getMinutes();
    sec.innerText=time.getSeconds();
    msec.innerText=time.getMilliseconds();
  
    hr.innerText=hrr;
    
     if(hrr>12){
        hr.innerText=(hrr-12);
        apm.innerText="pm";
    }
    else{
        hr.innerText=hrr;
        apm.innerText="am";
        // hrr=hrr-12;
    }
    setTimeout(() => {
        uptime();
    }, 0);
}

uptime();