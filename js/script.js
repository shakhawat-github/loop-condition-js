function setduration(){
    let select = document.querySelector('#select');
    let time = document.querySelector('#time');
        time.value = '0 0 0'
    select.addEventListener('change' , ()=>{
        if(select.value = 'MERN' && select.value != 'FDR' ){
            time.value = '1 Year';
            select.value = 'MERN'
        }
        else if( select.value = "FDR" && select.value != 'MERN' ){
            time.value = '8 Month'
            select.value = 'FDR'
        }
    });
}
setduration();