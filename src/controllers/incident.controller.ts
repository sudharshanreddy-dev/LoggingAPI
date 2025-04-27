import { Request, Response, RequestHandler } from "express"
import prisma from "../prisma/prisma"

// Get all incidents
export const get_all_incidents: RequestHandler = async (req: Request, res: Response) => {
    try {
        const data = await prisma.incident.findMany()
        res.status(200).json(data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Something went wrong" })
    }
}

// Create a new incident
export const create_incident: RequestHandler = async (req: Request, res: Response) => {
    const { title, description, severity } = req.body

    try {
        const data = await prisma.incident.create({
            data: {
                title,
                description,
                severity
            }
        })

        res.status(201).json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// Get a specific incident by ID
export const get_incident: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const data = await prisma.incident.findUnique({
            where: { id }
        })

        if (!data) {
            res.status(404).json({ message: "Incident not found" })
            return
        }
        res.status(200).json(data)

    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// Delete an incident by ID
export const delete_incident: RequestHandler = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const deletedIncident = await prisma.incident.delete({
            where: { id }
        });

        res.status(200).json({ message: "Incident deleted successfully", data: deletedIncident });
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: "Incident not found" });
    }

}
