import { Router } from "express";
import { validate } from "../middlewares/validate";
import { incident_schema } from "../schemas/incident.schema";
import { create_incident, delete_incident, get_all_incidents, get_incident } from "../controllers/incident.controller";

export const incident_router: Router = Router();


incident_router.get('/', get_all_incidents);
incident_router.post('/', validate(incident_schema), create_incident);
incident_router.get('/:id', get_incident);
incident_router.delete('/:id', delete_incident);
