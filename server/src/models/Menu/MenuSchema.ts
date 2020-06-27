import mongoose from "mongoose";
import { Menu } from "./Menu";

const MenuSchema = new mongoose.Schema<Menu>({
	id: String,
	status: {type: Boolean, required: true},
	name: {type: String, required: true},
	sections: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "section"
	}]
});
export default mongoose.model("menu", MenuSchema);
