const hr=document.querySelector(".hnum")
const mn=document.querySelector(".mnum")
const sec=document.querySelector(".snum")
const msec=document.querySelector(".milinum")
const apm=document.querySelector(".ampm")

function uptime(){
    const time=new Date();
    const hrr=time.getHours();   
    const mnn=8;
    const ssec=time.getSeconds();
    msec.innerText=time.getMilliseconds();
    
    mn.innerText=(mnn<10)?"0"+mnn:mnn;
    sec.innerText=(ssec<10)?"0"+ssec:ssec;
    if(hrr>12){
        hr.innerText=(hrr-12);
        apm.innerText="pm";
    }
    else{
        apm.innerText="am";
        hr.innerText=(hrr<10)?"0"+hrr:hrr;
        // hrr=hrr-12;
    }
    setTimeout(() => {
        uptime();
    },1000);
}

uptime();