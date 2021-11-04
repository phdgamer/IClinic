import { Request, Response } from "express";
import { createLaboratoryService } from "../services/laboratory/createLaboratory.service";
import { deleteLaboratoryService } from "../services/laboratory/deleteLaboratory.service";
import { listLaboratoryService } from "../services/laboratory/listLaboratory.service";
import { updateLaboratoryService } from "../services/laboratory/updateLaboratory.service";

const laboratoryController = {
  async create(request: Request, response: Response) {
    const { name, address } = request.body;

    await createLaboratoryService({ name, address });

    return response.status(201).json();
  },
  async list(request: Request, response: Response) {
    const laboratories = await listLaboratoryService();

    return response.json(laboratories);
  },
  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, address } = request.body;

    const laboratory = await updateLaboratoryService({
      id: Number(id),
      address,
      name,
    });

    return response.json(laboratory);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const laboratory = await deleteLaboratoryService({
      id: Number(id),
    });

    return response.json(laboratory);
  },
};

export { laboratoryController };
