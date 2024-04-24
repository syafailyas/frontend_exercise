import * as readline from 'readline';

class RectangleArea
{
    static calculateRectangleArea(length : number, width : number) : number
    {
        return length * width;
    }

    static main( args : string[] ) : void
    {
        const rl = readline.createInterface(
            {
                input: process.stdin,
                output: process.stdout
            }
        );

        rl.question('Enter length of the rectangle: ', (lengthInput) =>
            {
                const length = parseInt(lengthInput);

                rl.question('Enter width of the rectangle: ', (widthInput) =>
                    {
                        const width = parseInt(widthInput);

                        const area = RectangleArea.calculateRectangleArea(length, width);
                        console.log(`Area of the rectangle: ${area}`);

                        rl.close();
                    }
                );
            }
        );
    }
}

RectangleArea.main( process.argv.slice(2) );