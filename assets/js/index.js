function myFunction(){
    let ans = 0;
    let question1 = document.quizTest.ans1.value;
    let question2 = document.quizTest.ans2.value;
    let question3 = document.quizTest.ans3.value;
    let question4 = document.quizTest.ans4.value;
    let question5 = document.quizTest.ans5.value;
    let question6 = document.quizTest.ans6.value;


    let result = document.getElementsByClassName("result");

    //Assignng the correct answers for the questions.
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

    if (question6 == "val21"){
        ans++;
    }

    //calculating the percentage.
    ans = (ans/6)*100;
    ans = Math.round(ans)


    //Determining the message depending on the score
    let message = ["Excellently passed", "Fairly passed", "Scored poorly, retake the test"];

    let range;

    if(ans < 50){
        range = 2;
    }
    if(ans >=50){
        range = 1;
    }

    if(ans >80){
        range = 0;
    }


    //Final output to be displayed on HTML page.
    document.getElementById("message").innerHTML = message[range];
    document.getElementById("outcome").innerHTML = "You got " + ans +"%" + " correct";
}