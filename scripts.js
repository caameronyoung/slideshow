let one = "<img src='https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75'>";
let two = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEMERLotpBt9buY5OFK9Iu17UKhbQ_u-vN1V2czS-gA&s'>";
let three = "<img src='https://i.redd.it/s3wr054razbb1.jpg'>"

let slide = 1;
let picture = document.getElementById('frame');
let buttonOne = document.getElementById('dotOne');
let buttonTwo = document.getElementById('dotTwo');
let buttonThree = document.getElementById('dotThree');

let selected = 'lightblue';
let unselected = '#bbb';

function highlightDots()
{
    if (slide == 1)
    {
        buttonOne.style.backgroundColor = selected;
        buttonTwo.style.backgroundColor = unselected;
        buttonThree.style.backgroundColor = unselected;
    }

    else if (slide == 2)
    {
        buttonOne.style.backgroundColor = unselected;
        buttonTwo.style.backgroundColor = selected;
        buttonThree.style.backgroundColor = unselected;
    }

    else if (slide == 3)
    {
        buttonOne.style.backgroundColor = unselected;
        buttonTwo.style.backgroundColor = unselected;
        buttonThree.style.backgroundColor = selected;
    }
}

function alignSlides()
{
    if (slide == 1)
    {
        highlightDots();
        picture.innerHTML = one;
    }
}

function left()
{
    if (slide == 1) //leftmost
    {
        slide = 3;
        highlightDots();
        picture.innerHTML = three;
    }

    else if (slide == 2)
    {
        slide = 1;
        highlightDots();
        picture.innerHTML = one;
    }

    else if (slide == 3)
    {
        slide = 2;
        highlightDots();
        picture.innerHTML = two;
    }
}

function right()
{
    if (slide == 1) //leftmost
    {
        slide = 2;
        highlightDots();
        picture.innerHTML = two;
    }

    else if (slide == 2)
    {
        slide = 3;
        highlightDots();
        picture.innerHTML = three;
    }

    else if (slide == 3)
    {
        slide = 1;
        highlightDots();
        picture.innerHTML = one;
    }
}