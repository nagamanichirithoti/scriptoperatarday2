// 1. Voting Eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}

let age = parseInt(prompt("Enter your age: "));
console.log(checkVotingEligibility(age));

// 2. Marriage Eligibility
function checkMarriageEligibility(gender, age) {
    if ((gender.toLowerCase() === "male" && age >= 21) || 
        (gender.toLowerCase() === "female" && age >= 18)) {
        return "Eligible for marriage";
    } else {
        return "Not eligible for marriage";
    }
}

let gender = prompt("Enter your gender (male/female): ");
age = parseInt(prompt("Enter your age: "));
console.log(checkMarriageEligibility(gender, age));

// 3. Driving License Eligibility
function checkDrivingLicenseEligibility(age) {
    if (age >= 18) {
        return "Eligible for a driving license";
    } else {
        return "Not eligible for a driving license";
    }
}

age = parseInt(prompt("Enter your age: "));
console.log(checkDrivingLicenseEligibility(age));

// 4. Exam Eligibility
function checkExamEligibility(attendancePercentage) {
    if (attendancePercentage >= 75) {
        return "Eligible for the exam";
    } else {
        return "Not eligible for the exam";
    }
}

let attendancePercentage = parseFloat(prompt("Enter your attendance percentage: "));
console.log(checkExamEligibility(attendancePercentage));

// 5. Senior Citizen Discount Eligibility
function checkSeniorCitizenDiscountEligibility(age) {
    if (age >= 60) {
        return "Eligible for a senior citizen discount";
    } else {
        return "Not eligible for a senior citizen discount";
    }
}

age = parseInt(prompt("Enter your age: "));
console.log(checkSeniorCitizenDiscountEligibility(age));
