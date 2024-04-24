import * as readline from 'readline';

class NameInitials
{
    static async main() : Promise<void>
    {
        const rl = readline.createInterface(
            {
                input: process.stdin,
                output: process.stdout
            }
        );

        const fullName = await NameInitials.questionAsync(rl, "Enter your full name: ");

        const initials = NameInitials.getInitials(fullName);
        console.log("Your initials in uppercase: " + initials);

        rl.close();
    }

    static questionAsync(rl : readline.Interface, question: string) : Promise<string>
    {
        return new Promise(
            resolve =>
            {
                rl.question(question, answer =>
                    {
                        resolve(answer);
                    }
                );
            }
        );
    }

    static getInitials(fullName: string) : string
    {
        let initials = '';
        const nameParts = fullName.split(" ");

        for (const part of nameParts)
        {
            initials += part.charAt(0);
        }

        return initials.toUpperCase();
    }
}

NameInitials.main();