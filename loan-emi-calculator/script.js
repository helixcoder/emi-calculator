function get_data() {
    var amount=document.getElementById("amount").value;
    var intr =document.getElementById("intr").value;
    var years =document.getElementById("years").value;
    var emi=document.getElementById("emi");
    var totalInterest=document.getElementById("totalInterest");
    

    var amountVal=parseFloat(amount);
    var intrVal=parseFloat(intr)/ 100 / 12;
    var payments=parseFloat(years) * 12;

    var x=Math.pow(1 + intrVal, payments);
    var monthly=(amountVal * intrVal * x) / (x - 1);
    if(isFinite(monthly)){
        emi.innerHTML=monthly.toFixed(2);
        totalInterest.innerHTML=(monthly * payments - amountVal).toFixed(2);
    }


}