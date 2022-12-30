function submitForm(){
    let fname=document.getElementById('firstname').value;
    let lname=document.getElementById('lastname').value;
    let email=document.getElementById('emailadd').value;
    let reason=document.getElementById('resaonforcontacting').value;
    console.log(fname,lname,email,reason);
    if(fname && lname  && email  && reason){
 alert('Submitted');
}
else{
    alert('Please fill all the fields');
}
}
