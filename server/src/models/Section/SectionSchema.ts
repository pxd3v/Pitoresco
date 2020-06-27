import mongoose from "mongoose";
import { Section } from "./Section";

const SectionSchema = new mongoose.Schema<Section>({
	id: String,
	name: {type: String, required: true},
	status: {type: Boolean, required: true},
	items: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "item"
	}],
	menus: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "menu"
	}]
});
export default mongoose.model("section", SectionSchema);
