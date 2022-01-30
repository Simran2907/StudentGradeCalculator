function getMarks(){
    let math = Number(document.getElementById("math").value);
    let phy = Number(document.getElementById("physics").value);
    let chem = Number(document.getElementById("chemistry").value);
    let eng = Number(document.getElementById("english").value);
    let pedu = Number(document.getElementById("pedu").value);
    let totalMarks=500;
    let marksObtained = math+phy+chem+eng+pedu;
    let pec = (marksObtained/totalMarks )*100;
    let grade;
    document.getElementById("percentage").innerHTML= pec+"%";
    if(pec>90){
        grade="A+";
    }else if(pec>80 && pec<90){
        grade="A";
    }else if(pec>70 && pec<80){
        grade="B";
    }else if(pec>60 && pec<70){
        grade="C";
    }else if(pec>50 && pec<60){
        grade="D";
    }else if( pec<50){
        grade="F";
    }

    document.getElementById("grade").innerHTML = grade;
    if(pec<50){
        document.getElementById("pass").innerHTML="Sorry, you failed! Please try next time.";
    }else{
        document.getElementById("pass").innerHTML="Congratulations , you are passed."
    }

    
}