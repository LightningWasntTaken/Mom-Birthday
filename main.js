

var birthdaywish = ["Happy Birthday Mama!!! You are the best best best best best best best best best mom in the world, Love you :) :) :) Yours sincerely, Rowaan (: (: (:", "Happy birthday Ritcha dear wishing you long life good health success and happiness always ❤️ you dearest and i miss you enjoy your birthday,and have fun lot's of love and blessings mama🎂🍦🍫🥧☕🫖❤️❤️🌹🌹🌹🌹"
,"My Darling Wife... Wishing you a Very Happy Birthday!!! May all your wishes come true and may God always bless you with all the Happiness in this World... You are the Centre of Gravity of our family and Each one us cannot live without you.We may not say this to you everyday... but we feel it, they your the BESTEST in this world!!! BEST WIFE, MOM, DAUGHTER, FRIEND, OFFICER AND HUMAN BEING Love You Have a Great and fun filled Birthday 😊","Dear Mom , Thank you for being the most caring , understanding and loving mom in the World. I might not say it a lot but I really love you and really miss you. I can't imagine my life without you. You are the most beautiful , strongest and boldest woman I know. You are an inspiration! Love you so much and Happy Birthday ❤️ PS we shall not discuss this message as I don't like to get emo 😒 but I hope this makes you happy ❤️"];

var i = 0;

function functionone()
{
    if(i == 4)  {
        i=0;
      }

    document.getElementById("Blehhh").innerHTML = birthdaywish[i];
    i++;

    var audio = new Audio('ES_Happy Birthday (Piano Version) - Helmut Schenker');
audio.play();
}

