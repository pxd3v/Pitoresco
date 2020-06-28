import Menu, { Menu as MenuType } from "models/Menu";
import { Document } from "mongoose";
import { Request, Response } from "express";
import Section from "models/Section";

class MenuController {
	async store (req: Request, res: Response): Promise<Response<Document>> {
		const { status, name, sections }: MenuType = req.body;

		const menu = await Menu.create({
			status,
			name,
			sections
		});

		await menu.populate({path: "sections", model: Section}).execPopulate();

		return res.json(menu);
	}

	async index (req: Request, res: Response): Promise<Response<Document[]>> {
		const menus = await Menu.find();

		return res.json(menus);
	}

	async show(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const menu = await Menu.findById(id);
		return res.json(menu);
	}

	async delete(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const menu = await Menu.findByIdAndDelete(id);
		return res.json(menu);
	}

	async update(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const { status, name}: MenuType = req.body;
		const menu = await Menu.findByIdAndUpdate(id, {status, name}, {new: true, omitUndefined: true});
		return res.json(menu);
	}
}

export default MenuController;
