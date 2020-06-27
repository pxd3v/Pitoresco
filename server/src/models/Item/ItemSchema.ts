import mongoose from "mongoose";
import { Item } from "./Item";

const ItemSchema = new mongoose.Schema<Item>({
	id: String,
	name: {type: String, required: true},
	status: {type: Boolean, required: true},
	price: {type: Number, required: true},
	description: {type: String, required: true},
	imageUrl: {type: String, required: true},
	sections: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "section"
	}]
});
export default mongoose.model("item", ItemSchema);
