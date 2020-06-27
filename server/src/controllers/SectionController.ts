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
}

export default SectionController;
