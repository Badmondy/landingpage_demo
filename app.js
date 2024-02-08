
document.addEventListener('DOMContentLoaded', function () {

    const expand_btn1 = document.getElementById('faq-btn1');
    const expan_ans1 = document.getElementById('answer1');

    const expand_btn2 = document.getElementById('faq-btn2');
    const expan_ans2 = document.getElementById('answer2');

    const expand_btn3 = document.getElementById('faq-btn3');
    const expan_ans3 = document.getElementById('answer3');

    const expand_btn4 = document.getElementById('faq-btn4');
    const expan_ans4 = document.getElementById('answer4');

    const expand_btn5 = document.getElementById('faq-btn5');
    const expan_ans5 = document.getElementById('answer5');

    expand_btn1.addEventListener('click', function () {


        expan_ans1.style.display = 'block';

    });

    expand_btn1.addEventListener('dblclick', function () {


        expan_ans1.style.display = 'none';

    });




    expand_btn2.addEventListener('click', function () {


        expan_ans2.style.display = 'block';

    });

    expand_btn2.addEventListener('dblclick', function () {


        expan_ans2.style.display = 'none';

    });


    expand_btn3.addEventListener('click', function () {


        expan_ans3.style.display = 'block';

    });

    expand_btn3.addEventListener('dblclick', function () {


        expan_ans3.style.display = 'none';

    });

    expand_btn4.addEventListener('click', function () {


        expan_ans4.style.display = 'block';

    });

    expand_btn4.addEventListener('dblclick', function () {


        expan_ans4.style.display = 'none';

    });


    expand_btn5.addEventListener('click', function () {


        expan_ans5.style.display = 'block';

    });

    expand_btn5.addEventListener('dblclick', function () {


        expan_ans5.style.display = 'none';

    });

});
