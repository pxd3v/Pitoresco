import express from "express";
import MenuController from "./controllers/MenuController";
import ItemController from "./controllers/ItemController";
import SectionController from "./controllers/SectionController";
import AddController from "controllers/AddController";

const menuController = new MenuController();
const itemController = new ItemController();
const sectionController = new SectionController();
const addController = new AddController();

const routes = express.Router();

routes.get("/", (request, response) => {
	return response.json({ message: "Hello World" });
});

routes.post("/add", addController.store);
routes.get("/add", addController.index);
routes.get("/add/:id", addController.show);

routes.post("/menu", menuController.store);
routes.get("/menu", menuController.index);

routes.post("/item", itemController.store);
routes.get("/item", itemController.index);

routes.post("/section", sectionController.store);
routes.get("/section", sectionController.index);

export default routes;
