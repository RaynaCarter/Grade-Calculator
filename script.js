


function calcGrade(){
    var homework = document.getElementById("homework").value;
    var hwweight= parseInt(document.getElementById("homeworkWeight").value);
    var hwarry = strToArr(homework);
    var hwavg = avgArray(hwarry);
    var hwpercent = convertpercent(hwweight);
    var hwpart= hwavg * hwpercent;

    var classwork = document.getElementById("classwork").value;
    var cwweight= parseInt(document.getElementById("classworkWeight").value);
    var cwarry = strToArr(classwork);
    var cwavg = avgArray(cwarry);
    var cwpercent = convertpercent(cwweight);
    var cwpart= cwavg * cwpercent;

    var assessment = document.getElementById("assessment").value;
    var assweight= parseInt(document.getElementById("assessmentWeight").value);
    var assarry = strToArr(assessment);
    var assavg = avgArray(assarry);
    var asspercent = convertpercent(assweight);
    var asspart= assavg * asspercent;

    var participation = document.getElementById("participation").value;
    var parweight= parseInt(document.getElementById("participationWeight").value);
    var pararry = strToArr(participation);
    var paravg = avgArray(pararry);
    var parpercent = convertpercent(parweight);
    var parpart= paravg * parpercent;
    document.getElementById("currGrade").innerHTML = Math.round(hwpart + cwpart + asspart + parpart) + "%";


}
 function calcFinal(){
     var homework = document.getElementById("homework").value;
     var hwweight= parseInt(document.getElementById("homeworkWeight").value);
     var hwarry = strToArr(homework);
     var hwavg = avgArray(hwarry);
     var hwpercent = convertpercent(hwweight);
     var hwpart= hwavg * hwpercent;

     var classwork = document.getElementById("classwork").value;
     var cwweight= parseInt(document.getElementById("classworkWeight").value);
     var cwarry = strToArr(classwork);
     var cwavg = avgArray(cwarry);
     var cwpercent = convertpercent(cwweight);
     var cwpart= cwavg * cwpercent;

     var assessment = document.getElementById("assessment").value;
     var assweight= parseInt(document.getElementById("assessmentWeight").value);
     var assarry = strToArr(assessment);
     var assavg = avgArray(assarry);
     var asspercent = convertpercent(assweight);
     var asspart= assavg * asspercent;

     var participation = document.getElementById("participation").value;
     var parweight= parseInt(document.getElementById("participationWeight").value);
     var pararry = strToArr(participation);
     var paravg = avgArray(pararry);
     var parpercent = convertpercent(parweight);
     var parpart= paravg * parpercent;


     var currgrade = hwpart + cwpart + asspart + parpart;
     var gradeNeed = nessfinal(currgrade,(parseInt(document.getElementById("finweight").value))/100, parseInt(document.getElementById("desgrade").value), (100-parseInt(document.getElementById("finweight").value))/100)



     document.getElementById("gradeNeed").innerHTML = Math.round(gradeNeed)+"%";
 }

function strToArr(str){
    var stringindiv = str.split(",");
    for(var i=0; i< stringindiv.length; i++){
        stringindiv[i]=parseInt(stringindiv[i]);
    }
    return stringindiv;
}
function avgArray(arr){
    var sum = 0
    for(var x =0; x < arr.length; x++){
        sum += arr[x];
    }
    sum=(sum/arr.length);
    return sum;
}
function convertpercent(x){
    var sum=0;
    sum = sum + (x/100);
    return sum;
}
function nessfinal(x,y,z,v){
    var sum =0;
    var currgrade = x;
    var finweight= y ;
    var desgrade = z ;
    var currgradeweight = v ;
     sum = sum + (desgrade - (currgrade * currgradeweight))/finweight;
    return sum;

}