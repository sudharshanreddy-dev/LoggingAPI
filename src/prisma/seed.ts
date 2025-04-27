import prisma from "./prisma";

async function main() {
    await prisma.incident.createMany({
        data: [
            {
                title: "AI Model Fails in Critical Task",
                description: "The AI model used for a critical task has encountered an error and needs to be fixed immediately.",
                severity: "High"

            },
            {
                title: "Data Privacy Breach",
                description: "A data privacy breach has been discovered, and sensitive information has been leaked to unauthorized parties.",
                severity: "Medium"
            }
        ]
    })
}


main()
    .then(async () => {
        console.log('Seeding complete!');
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });