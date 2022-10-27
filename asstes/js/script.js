let pdf = document.querySelector('.showpdf');
let inres = document.querySelector('.input-result');
let exam = document.querySelector('#exam');
let heading = document.querySelector('.heading');





//UI selector

let resform = document.querySelector('#resform');
let ban = document.querySelector('#ban');
let eng = document.querySelector('#eng');
let math = document.querySelector('#math');
let soc = document.querySelector('#soc');
let sci = document.querySelector('#sci');
let isl = document.querySelector('#isl');



//INFORMATION INPUT
let roll = document.querySelector('#roll');
let stname = document.querySelector('#stname');
let fname = document.querySelector('#fname');
let mname = document.querySelector('#mname');
let school = document.querySelector('#school');
//INFORMATION OUTPUT
let resroll = document.querySelector('#resroll');
let ressutdnm = document.querySelector('#ressutdnm');
let resfname = document.querySelector('#resfname');
let resmname = document.querySelector('#resmname');
let resschool = document.querySelector('#resschool');







let table = document.querySelector('.output-result .data-table');
let loader = document.querySelector('.output-result img');


let cgpa = document.querySelector('#cgpa');
let grad = document.querySelector('#grad');

    
//Bangla UI

let bannum = document.querySelector('#bannum');
let bangpa = document.querySelector('#bangpa');
let bangrad = document.querySelector('#bangrad');


//Bangla UI

let engnum = document.querySelector('#engnum');
let enggpa = document.querySelector('#enggpa');
let enggrad = document.querySelector('#enggrad');

//Bangla UI

let mathnum = document.querySelector('#mathnum');
let mathgpa = document.querySelector('#mathgpa');
let mathgrad = document.querySelector('#mathgrad');

//Bangla UI

let socnum = document.querySelector('#socnum');
let socgpa = document.querySelector('#socgpa');
let socgrad = document.querySelector('#socgrad');

//Bangla UI

let scinum = document.querySelector('#scinum');
let scigpa = document.querySelector('#scigpa');
let scigrad = document.querySelector('#scigrad');

//Bangla UI

let islnum = document.querySelector('#islnum');
let islgpa = document.querySelector('#islgpa');
let islgrad = document.querySelector('#islgrad');




//form event

resform.addEventListener('submit', function(e){
    e.preventDefault();

    //form validation

    if( ban.value == '' || eng.value == '' || math.value == ''  || soc.value == '' || sci.value == '' || isl.value == '' || roll.value == '' || stname.value == '' || fname.value == '' || mname.value == '' || school.value == '' || exam.value == ''){
        alert('Field must not be empty!!');
    }else{



        resroll.textContent = roll.value;
        ressutdnm.textContent = stname.value;
        resfname.textContent = fname.value;
        resmname.textContent = mname.value;
        resschool.textContent = school.value;




        bannum.textContent = ban.value;
        bangpa.textContent = calculetGpa(ban.value);
        bangrad.textContent = calculetGrad(ban.value);

        engnum.textContent = eng.value;
        enggpa.textContent = calculetGpa(eng.value);
        enggrad.textContent = calculetGrad(eng.value);

        mathnum.textContent = math.value;
        mathgpa.textContent = calculetGpa(math.value);
        mathgrad.textContent = calculetGrad(math.value);

        socnum.textContent = soc.value;
        socgpa.textContent = calculetGpa(soc.value);
        socgrad.textContent = calculetGrad(soc.value);

        scinum.textContent = sci.value;
        scigpa.textContent = calculetGpa(sci.value);
        scigrad.textContent = calculetGrad(sci.value);

        islnum.textContent = isl.value;
        islgpa.textContent = calculetGpa(isl.value);
        islgrad.textContent = calculetGrad(isl.value);




        let totalgpa = parseFloat(calculetGpa(ban.value)) + parseFloat(calculetGpa(eng.value)) + parseFloat(calculetGpa(math.value)) + parseFloat(calculetGpa(soc.value)) + parseFloat(calculetGpa(sci.value)) + parseFloat(calculetGpa(isl.value));
        
        
        let cgpaFinal = totalgpa / 6;

        cgpa.textContent = cgpaFinal.toFixed(2);

        

        if( calculetGpa(ban.value) == 0 || calculetGpa(eng.value) == 0 || calculetGpa(math.value) == 0 || calculetGpa(soc.value) == 0 || calculetGpa(sci.value) == 0 || calculetGpa(isl.value) == 0  ){
            grad.textContent = 'F';
        }else{
        grad.textContent = calculetGradFinal(parseFloat(cgpaFinal));
        }


        loader.style.display = 'block';
        table.style.display = 'none';
        setTimeout(function(){
            heading.textContent = 'Result of ' + exam.value +' or Equivalent Examination-2019';
            loader.style.display = 'none';
            table.style.display = 'block';
            pdf.style.display = 'block';
            inres.style.display = 'none';
        } ,3000);

    }
});


//calculet gpa

function calculetGpa(num){

    if( num >= 0 && num <= 32 ){
        return 0;
    }else if( num >= 33 && num <= 39 ){
        return 1;
    }else if(num >= 40 && num <= 49){
        return 2;
    }else if(num >= 50 && num <= 59){
        return 3;
    }else if(num >= 60 && num <= 69){
        return 3.5;
    }else if(num >= 70 && num <= 79){
        return 4;
    }else if(num >= 80 && num <= 100){
        return 5;
    }else{
        return 'Invalid';
    }
}

//calculet grad

function calculetGrad(num){

    if( num >= 0 && num <= 32 ){
        return 'F';
    }else if( num >= 33 && num <= 39 ){
        return 'D';
    }else if(num >= 40 && num <= 49){
        return 'C';
    }else if(num >= 50 && num <= 59){
        return 'B';
    }else if(num >= 60 && num <= 69){
        return 'A-';
    }else if(num >= 70 && num <= 79){
        return 'A';
    }else if(num >= 80 && num <= 100){
        return 'A+';
    }else{
        return 'Invalid';
    }
}



//calculet gradfinal

function calculetGradFinal(num){

    if( num == 0  && num <= 0.99){
        return 'F';
    }else if( num >= 1 && num <= 1.99 ){
        return 'D';
    }else if(num >= 2 && num <= 2.99){
        return 'C';
    }else if(num >= 3 && num <= 3.49){
        return 'B';
    }else if(num >= 3.50 && num <= 3.99){
        return 'A-';
    }else if(num >= 4 && num <= 4.99){
        return 'A';
    }else if(num == 5){
        return 'A+';
    }else{
        return 'Invalid';
    }
}






pdf.addEventListener('click', function(){
    inres.style.display = 'none';
    pdf.style.display = 'none';
    window.print();
});