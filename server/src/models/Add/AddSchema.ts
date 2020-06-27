import mongoose from "mongoose";
import { Add } from "./Add";

const AddSchema = new mongoose.Schema<Add>({
	id: String,
	name: {type: String, required: true},
	status: {type: Boolean, required: true},
	price: {type: Number, required: true},
	imageUrl: {type: String, required: true},
	items: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "item",
	}],
});

export default mongoose.model("add", AddSchema);
