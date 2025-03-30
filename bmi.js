function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    
    height=height/100;
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height ** 2)).toFixed(2);
        let message = "Your BMI is: " + bmi + " - ";
        
        if (bmi < 18.5) {
            message += "You are Underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            message += "Healthy Weight";
        } else if (bmi >= 25 && bmi < 30) {
            message += "Overweight";
        } else {
            message += "Obesity";
        }
        
        document.getElementById("result").innerHTML = message;
        alert(message);
    } else {
        alert("Please enter valid values for weight and height");
        document.getElementById("result").innerHTML = "Please enter valid values";
    }
}