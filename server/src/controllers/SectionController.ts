import Section, { Section as SectionType} from "models/Section";
import { Document } from "mongoose";
import { Request, Response } from "express";
import Menu from "models/Menu";
import Item from "models/Item";

class SectionController {
	async store (req: Request, res: Response): Promise<Response<Document>> {
		const { status, name, items, menus }: SectionType = req.body;

		const section = await Section.create({
			status,
			name,
			items,
			menus
		});
		await section.populate({path: "items", model: Item}).populate({path: "menus", model: Menu}).execPopulate();

		return res.json(section);
	}

	async index (req: Request, res: Response): Promise<Response<Document[]>> {
		const sections = await Section.find();

		return res.json(sections);
	}

	async show(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const section = await Section.findById(id);
		return res.json(section);
	}

	async delete(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const section = await Section.findByIdAndDelete(id);
		return res.json(section);
	}

	async update(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const { status, name}: SectionType = req.body;
		const section = await Section.findByIdAndUpdate(id, {status, name}, {new: true, omitUndefined: true});
		return res.json(section);
	}
}

export default SectionController;
