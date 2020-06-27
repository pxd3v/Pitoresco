import { Document } from "mongoose";
import Item, { Item as ItemType } from "models/Item";
import { Request, Response } from "express";
import Section from "models/Section";

class ItemController {
	async store (req: Request, res: Response): Promise<Response<Document>> {
		const { status, name, price, description, imageUrl, sections }: ItemType = req.body;

		const item = await Item.create({
			status,
			name,
			price,
			description,
			imageUrl,
			sections
		});

		await item.populate({path: "sections", model: Section}).execPopulate();

		return res.json(item);
	}
	async index (req: Request, res: Response): Promise<Response<Document[]>> {
		const items = await Item.find();

		return res.json(items);
	}
}

export default ItemController;
