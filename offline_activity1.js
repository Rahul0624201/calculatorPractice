//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtnumber.value = num;
        }
}
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtnumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}
function Subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}
function Multiplication() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiplication";
        }
}
function Division() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Division";
        }
}
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "power";
        }
    }
    function power2() {
        var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!isNaN(num)) {
            num = num ** 2;
            document.frmCalc.txtNumber.value = num;
        }
    }
    
    function Round() {
        var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!isNaN(num)) {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
        }
    }
    
    function Floor() {
        var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!isNaN(num)) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
        }
    }
    
//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
        }
         if (!(isNaN(num))) 
            if (calc == "Subtract"){
                 var total = prevCalc - num;
                 document.frmCalc.txtNumber.value = total;
                }
         if (!(isNaN(num))) {
            if (calc == "Multiplication"){
                 var total = prevCalc * num;
                 document.frmCalc.txtNumber.value = total;
                }
        }
         if (!(isNaN(num))) {
            if (calc == "Division"){
                 var total = prevCalc / num;
                 document.frmCalc.txtNumber.value = total;
            }
         }
          if (!(isNaN(num))) {
             if (calc == "power"){
                 var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }
        
        }
    
         
function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}
}
