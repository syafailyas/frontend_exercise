import * as readline from 'readline';

class CircleProperties
{
    static calculateDiameter(radius : number) : number
    {
        return 2 * radius;
    }

    static calculateCircumference(radius : number) : number
    {
        return 2 * Math.PI * radius;
    }

    static calculateArea(radius : number) : number
    {
        return Math.PI * radius * radius;
    }

    static main( args : string[] ) : void
    {
        const rl = readline.createInterface(
            {
                input: process.stdin,
                output: process.stdout
            }
        );

        rl.question('Enter the radius of the circle: ', (radiusInput) =>
            {
                const radius = parseFloat(radiusInput);

                const diameter = this.calculateDiameter(radius);
                const circumference = this.calculateCircumference(radius);
                const area = this.calculateArea(radius);

                console.log(`Diameter of the circle: ${diameter}`);
                console.log(`Circumference of the circle: ${circumference}`);
                console.log(`Area of the circle: ${area}`);

                rl.close();
            }
        );
    }
}

CircleProperties.main( process.argv.slice(2) );