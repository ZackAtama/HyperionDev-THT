import express from 'express';
import * as readline from 'readline';

const app = express();

export const Num2Words = (number: any): String => {
    const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    if (number < 20) return num[number];
    const digit = number % 10;
    if (number < 100) return tens[~~(number / 10) - 2] + (digit ? " " + num[digit] : "");
    if (number < 1000) return num[~~(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " and " + Num2Words(number % 100));
    return Num2Words(~~(number / 1000)) + " thousand" + (number % 1000 != 0 ? " " + Num2Words(number % 1000) : "");
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const CoverNumber = (status: String) => {
    rl.question('Enter any number: ', (answer) => {
        const inWords = Num2Words(answer)
        console.log(inWords)
        rl.question("To you want to continue? (press 'y' to continue or press any key to exit): ", (answer) => {
            status = answer;
            if (status === 'y') {
                CoverNumber('y');
            } else {
                console.log("Thank you for using the application.")
                rl.close();
                process.exit(0)
            }
        });
    });
};

CoverNumber('y')

app.listen(5000);

