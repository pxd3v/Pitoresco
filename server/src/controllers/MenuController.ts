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
}

export default MenuController;
