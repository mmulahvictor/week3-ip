function myFunction(){
    let ans = 0;
    let question1 = document.quizTest.ans1.value;
    let question2 = document.quizTest.ans2.value;
    let question3 = document.quizTest.ans3.value;
    let question4 = document.quizTest.ans4.value;
    let question5 = document.quizTest.ans5.value;

    let result = document.getElementsByClassName("result");

    if (question1 == "A high level language."){
        ans++;
    }

    if (question2 == "A high level language."){
        ans++;
    }

    if (question3 == "A high level language."){
        ans++;
    }

    if (question4 == "A high level language."){
        ans++;
    }

    if (question5 == "A high level language."){
        ans++;
    }
    
    document.getElementById("outcome").innerHTML = "You got " + ans + " correct"
}