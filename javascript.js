


function addNewAQField(){
    // console.log("new function ");
     let newNode=document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("eqField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder","Enter here");
 
     let aqob = document.getElementById("aq");
     let aqAddButtonob = document.getElementById("aqAddButton");
 
     aqob.insertBefore(newNode, aqAddButtonob);
 }
 
 function addNewWEField(){
     let newNode=document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder","Enter here");
 
     let weob = document.getElementById("we");
     let weAddButtonob = document.getElementById("weAddButton");
 
     weob.insertBefore(newNode, weAddButtonob);
 
 }



 function next(){



    document.getElementById('form').style.display="none";
 
    document.getElementById('form3').style.display="none";
    document.getElementById('template').style.display="none";
    document.getElementById('form1').style.display="block";

 }

 function next1()
 {

    document.getElementById('form').style.display="none";
    
    document.getElementById('form3').style.display="block";
    document.getElementById('template').style.display="none";
    document.getElementById('form1').style.display="none";

 }








 function generateCV(){
    console.log("hii")
    let namefield=document.getElementById("namefield").value;
    let namet1=document.getElementById("namet1");
    namet1.innerHTML= namefield;



    let file=document.getElementById("photofield").files [0];
    
let reader= new FileReader();
reader.readAsDataURL(file);


reader.onloadend = function(){
    document.getElementById("photo").src=reader.result;
    
    };

    let namefield1=document.getElementById("namefield1").value;
    let namet2=document.getElementById("namet2");
    namet2.innerHTML= namefield1;

    let contactfield=document.getElementById("contactfield").value;
    let contact1=document.getElementById("contact1");
    contact1.innerHTML= contactfield;

    let addressfield=document.getElementById("addressfield").value;
    let address1=document.getElementById("address1");
    address1.innerHTML= addressfield;

    let emailfield=document.getElementById("emailfield").value;
    let email1=document.getElementById("email1");
    email1.innerHTML= emailfield;

    let linkfield=document.getElementById("linkfield").value;
    let link=document.getElementById("link");
    link.innerHTML= linkfield;

    let instafield=document.getElementById("instafield").value;
    let insta=document.getElementById("insta");
    insta.innerHTML= instafield;

    let fbfield=document.getElementById("fbfield").value;
    let face=document.getElementById("face");
    face.innerHTML= fbfield;

    let dobfield=document.getElementById("dobfield").value;
    let dob=document.getElementById("dob");
    dob.innerHTML= dobfield;

    let genfield1=document.getElementById("genfield1").value;
    
        let gen=document.getElementById("gen");
        gen.innerHTML= genfield1;
   
        let proffield=document.getElementById("proffield").value;
        let prof=document.getElementById("prof");
        prof.innerHTML= proffield;

        let periodfield=document.getElementById("periodfield").value;
        let period=document.getElementById("period");
        period.innerHTML= periodfield;
   
        let locationfield=document.getElementById("locationfield").value;
        let location=document.getElementById("location");
        location.innerHTML= locationfield;
        let positionfield=document.getElementById("positionfield").value;
        let position=document.getElementById("position");
        position.innerHTML= positionfield;

        let companyfield=document.getElementById("companyfield").value;
        let company=document.getElementById("company");
        company.innerHTML= companyfield;

        let reviewfield=document.getElementById("reviewfield").value;
        let review=document.getElementById("review");
        review.innerHTML= reviewfield;



        let pe1field=document.getElementById("pe1field").value;
        let pe1=document.getElementById("pe1");
        pe1.innerHTML= pe1field;
   
        let lo1field=document.getElementById("lo1field").value;
        let lo1=document.getElementById("lo1");
        lo1.innerHTML= lo1field;
        let po1field=document.getElementById("po1field").value;
        let po1=document.getElementById("po1");
        po1.innerHTML= po1field;

        let co1field=document.getElementById("co1field").value;
        let co1=document.getElementById("co1");
        co1.innerHTML= co1field;

        let re1field=document.getElementById("re1field").value;
        let re1=document.getElementById("re1");
        re1.innerHTML= re1field;
        let pe2field=document.getElementById("pe2field").value;
        let pe2=document.getElementById("pe2");
        pe2.innerHTML= pe2field;
   
        let lo2field=document.getElementById("lo2field").value;
        let lo2=document.getElementById("lo2");
        lo2.innerHTML= lo2field;
        let po2field=document.getElementById("po2field").value;
        let po2=document.getElementById("po2");
        po2.innerHTML= po2field;

        let co2field=document.getElementById("co2field").value;
        let co2=document.getElementById("co2");
        co2.innerHTML= co2field;

        let re2field=document.getElementById("re2field").value;
        let re2=document.getElementById("re2");
        re2.innerHTML= re2field;




        let afield=document.getElementById("afield").value;
        let a=document.getElementById("a");
        a.innerHTML= afield;
   
        let bfield=document.getElementById("bfield").value;
        let b=document.getElementById("b");
        b.innerHTML= bfield;
        let cfield=document.getElementById("cfield").value;
        let c=document.getElementById("c");
        c.innerHTML= cfield;

        let dfield=document.getElementById("dfield").value;
        let d=document.getElementById("d");
        d.innerHTML= dfield;

        let efield=document.getElementById("efield").value;
        let e=document.getElementById("e");
        e.innerHTML= efield;

        let a1field=document.getElementById("a1field").value;
        let a1=document.getElementById("a1");
        a1.innerHTML= a1field;
   
        let b1field=document.getElementById("b1field").value;
        let b1=document.getElementById("b1");
        b1.innerHTML= b1field;
        let c1field=document.getElementById("c1field").value;
        let c1=document.getElementById("c1");
        c1.innerHTML= c1field;

        let d1field=document.getElementById("d1field").value;
        let d1=document.getElementById("d1");
        d1.innerHTML= d1field;

        let e1field=document.getElementById("e1field").value;
        let e1=document.getElementById("e1");
        e1.innerHTML= e1field;

        let html1=document.getElementById("html1").value;
        let aa=document.getElementById("aa");
        aa.innerHTML= html1;

        let html2=document.getElementById("html2").value;
        let aa1=document.getElementById("aa1");
        aa1.innerHTML= html2;

        let html3=document.getElementById("html3").value;
        let aa2=document.getElementById("aa2");
        aa2.innerHTML= html3;

        let html4=document.getElementById("html4").value;
        let aa3=document.getElementById("aa3");
        aa3.innerHTML= html4;

        let htm1=document.getElementById("htm1").value;
        let bb=document.getElementById("bb");
        bb.innerHTML= htm1;

        let htm2=document.getElementById("htm2").value;
        let bb1=document.getElementById("bb1");
        bb1.innerHTML= htm2;

        let htm3=document.getElementById("htm3").value;
        let bb2=document.getElementById("bb2");
         bb2.innerHTML= htm3;

        let htm4=document.getElementById("htm4").value;
        let bb3=document.getElementById("bb3");
        bb3.innerHTML= htm4;






        document.getElementById('form').style.display="none";
      
        document.getElementById('form3').style.display="none";
        document.getElementById('template').style.display="block";
        document.getElementById('form1').style.display="none";
        
 }

 function printCV()
 {
    window.print();
 }