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

	async show(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const item = await Item.findById(id);
		return res.json(item);
	}

	async delete(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const item = await Item.findByIdAndDelete(id);
		return res.json(item);
	}

	async update(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const { status, name, price, imageUrl, description}: ItemType = req.body;
		const item = await Item.findByIdAndUpdate(id, {status, name, price, imageUrl, description}, {new: true, omitUndefined: true});
		return res.json(item);
	}
}

export default ItemController;
