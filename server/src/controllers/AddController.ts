import { Request, Response } from "express";
import Add, { Add as AddType } from "models/Add";
import { Document } from "mongoose";
import Item from "models/Item";
class AddController {
	async store(req: Request, res: Response): Promise<Response<Document>> {
		const { status, name, price, imageUrl, items }: AddType = req.body;
		const add = await Add.create({
			status,
			name,
			price,
			imageUrl,
			items,
		});

		await add.populate({ path: "items", model: Item }).execPopulate();

		return res.json(add);
	}

	async index(req: Request, res: Response): Promise<Response<Document[]>> {
		const adds = await Add.find();

		return res.json(adds);
	}

	async show(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const add = await Add.findById(id);
		return res.json(add);
	}

	async delete(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const add = await Add.findByIdAndDelete(id);
		return res.json(add);
	}

	async update(req: Request, res: Response): Promise<Response<Document>> {
		const { id } = req.params;
		const { status, name, price, imageUrl }: AddType = req.body;
		const add = await Add.findByIdAndUpdate(
			id,
			{ status, name, price, imageUrl },
			{ new: true, omitUndefined: true }
		);
		return res.json(add);
	}
}

export default AddController;
