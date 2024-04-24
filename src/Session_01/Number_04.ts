import * as readline from 'readline';

class DateDifference
{
    static async main() : Promise<void>
    {
        const rl = readline.createInterface(
            {
                input: process.stdin,
                output: process.stdout
            }
        );

        // Function to prompt for date input
        const promptForDate = (question: string) : Promise<Date> =>
        {
            return new Promise(
                (resolve) =>
                {
                    rl.question(question, (answer) =>
                        {
                            const date = new Date( answer.trim() );
                            resolve(date);
                        }
                    );
                }
            );
        };

        // Input date1
        const date1 = await promptForDate("Enter the first date in the format yyyy-MM-dd: ");

        // Input date2
        const date2 = await promptForDate("Enter the second date in the format yyyy-MM-dd: ");

        // Calculate difference in days
        const differenceInDays = Math.abs( ( date2.getTime() - date1.getTime() ) / (1000 * 3600 * 24) );

        // Output the result
        console.log("Difference between the dates in days:", differenceInDays);

        rl.close();
    }
}

DateDifference.main();