// lesson 4 - типи данних і змінні

// можна декілька через кому, можна присвоїти значення.
var myVariable = 20, myAnotherVariable = 30;

// першим символом не може бути цифра, є список зарезервіруваних слів.
var variable, _var, $var, Variable;


// Типи данних:                             (ПАРСЕР - http://esprima.org/demo/parse.html)

    // 1) Прості

        var myNumber = 2525,                    // Літерал
            myString = "Some string",           // Літерал
            myBool = true,                      // Літерал
            myNull = null,                      // Літерал
            myUndef = undefined;                // Ідентифікатор

        // console.log(typeof myNumber); typeof - унарний оператор для визначення типу виразу

        console.log(myNumber);
        console.log(myString);
        console.log(myBool);
        console.log(myNull);
        console.log(myUndef);

        console.log(typeof myNumber);
        console.log(typeof myString);
        console.log(typeof myBool);
        console.log(typeof myNull);
        console.log(typeof myUndef);

    // 2) Обєктні:

        var obj = {name: "WEB"},    // Обєкти
            array = [1, 2, 3],      // Массиви
            regexp = /w+/g,         // Регулярні вирази
            func = function(){};    // Функція

        console.log("");
        console.log(typeof obj);
        console.log(typeof array);
        console.log(typeof regexp);
        console.log(typeof func);

        // Ще типи данних можна поділити на - які можна змінювати(mutable) і неможна(immutable). Всі прості - immutable!
        obj.name = "BEW";
        array[0] = 12345;

        console.log(array);

        console.log(myString.toUpperCase());
        console.log(myString);

// Оператор присвоєння

   var a;
   a = 5;

   var a, b, c, d;
   a = b = c = d = 5;  // присвоєння проісходит зліва на право, спочатку d потім c і т.д.
