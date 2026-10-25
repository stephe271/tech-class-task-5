!   ‎let firstName = "Okechukwu";
‎let lastName = "Ikemefuna";
‎let mathematics = 25;
‎let english = 30;
‎let biology = 20;
‎let totalScore = mathematics + english + biology;
‎let remark;
‎
‎if (totalScore >= 70) {
‎    remark = "Excellent";
‎} else if (totalScore >= 50 && totalScore <= 69) {
‎    remark = "Good";
‎} else if (totalScore >= 35 && totalScore <= 49) {
‎    remark = "You can do better";
‎} else {
‎    remark = "Fail";
‎}
‎
‎console.log("STUDENT EXAMINATION RESULT");
‎console.log("Full Name: " + firstName + " " + lastName);
‎console.log("Mathematics: " + mathematics);
‎console.log("English: " + english);
‎console.log("Biology: " + biology);
‎console.log("Total Score: " + totalScore);
‎console.log("Remark: " + remark);


// FizzBuzz Challenge
‎
‎for (let number = 1; number <= 100; number++) {
‎
‎    if (number % 3 === 0 && number % 5 === 0) {
‎        console.log("FizzBuzz");
‎    } else if (number % 3 === 0) {
‎        console.log("Fizz");
‎    } else if (number % 5 === 0) {
‎        console.log("Buzz");
‎    } else {
‎        console.log(number);
‎    }
‎}
‎
