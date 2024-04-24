import * as readline from 'readline';

class TriangleAngles
{
    public static main( args: string[] ) : void
    {
        const rl = readline.createInterface(
            {
                input: process.stdin,
                output: process.stdout
            }
        );

        rl.question('Enter the first angle (in degrees): ', (a) =>
            {
                rl.question('Enter the second angle (in degrees): ', (b) =>
                    {
                        const c = this.findThirdAngle( parseFloat(a), parseFloat(b) );
                        console.log(`The third angle is: ${c} degrees`);
                        rl.close();
                    }
                );
            }
        );
    }

    private static findThirdAngle(a: number, b: number): number
    {
        // Total sum of angles in a triangle is 180 degrees
        return 180 - a - b;
    }
}

TriangleAngles.main( process.argv.slice(2) );