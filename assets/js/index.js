function myFunction(){
    let ans = 0;
    let question1 = document.quizTest.ans1.value;
    let question2 = document.quizTest.ans2.value;
    let question3 = document.quizTest.ans3.value;
    let question4 = document.quizTest.ans4.value;
    let question5 = document.quizTest.ans5.value;

    let result = document.getElementsByClassName("result");

    if (question1 == "val1"){
        ans++;
    }

    if (question2 == "val8"){
        ans++;
    }

    if (question3 == "val10"){
        ans++;
    }

    if (question4 == "val15"){
        ans++;
    }

    if (question5 == "val18"){
        ans++;
    }
    ans = (ans/5)*100;
    let message = ["Excellently passed", "Fairly passed", "Scored poorly, retake the test"];
    let range;

    if(ans < 50){
        range = 2;
    }
    else if(ans >=50){
        range = 1;
    }

    else {
        range = 0;
    }

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("outcome").innerHTML = "You got " + ans +"%" + " correct";
}