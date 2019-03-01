// Цифри

    console.log(0);
    console.log(5);
    console.log(500000);
    console.log(0xfffcc); // 16
    console.log(0Xbbbccc);
    console.log(0345); // не правильно


    console.log(12.45);
    console.log(.89);
    console.log(1.25e10);
    console.log(1.25E10);
    console.log(4.5e-30);
    console.log("");


    var N = new Number(4000);
        n = 3000;
    console.log(typeof N);

    console.log(N.toFixed(2)); //кількість символів після коми
    console.log(n.toFixed(2));
    console.log(2 .toFixed(5));

    var  n = 5000;

    console.log(n.toFixed(3));
    console.log(n.toExponential(4));
    console.log(n.toPrecision(10));

    console.log(+10); // ++ - енкримент
    console.log(-10); // -- - декримент

    var i = 10;
    console.log(++i); // префіксний енкримент, ++ - збільшує значення на 1, спочатку додає а потім вертає значення
    console.log(i);
    console.log(i++); // постфіксний енкримент, спочатку вертає значення а потім додає

    console.log("");
    console.log(5 + 10);
    console.log(7 - 3);
    console.log(5 * 9);
    console.log(10 / 3);
    console.log(10 % 3);
    console.log("");



    var n = 100;
    n = n + 20;
    console.log(n);
    n = n * 2;
    console.log(n);

    var m = 100;
    m += 20;
    console.log(n);
    n *= 2;
    console.log(n);
    n /= 3;
    console.log(n);

    console.log("");
    console.log(5 > 10);
    console.log(5 < 10);
    console.log(10 >= 10);
    console.log(7 <= 10);
    console.log(10 === 10); // оператор равенства
    console.log(10 !== 10); // оператор неравенства
    console.log(10 == "10");
    console.log(10 === "10");
    console.log("");

    console.log(Math.sqrt(25));
    console.log(Math.pow(3,5));
    console.log(Math.PI);
    console.log(Math.E);
    console.log("");

    console.log(-5/0);
    console.log(0/0);
    console.log(Infinity/Infinity);
    console.log(Math.sqrt(-10));
    console.log(NaN === NaN);
    console.log("");

    console.log(0.2 + 0.1);
