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
routes.delete("/add/:id", addController.delete);
routes.patch("/add/:id", addController.update);

routes.post("/menu", menuController.store);
routes.get("/menu", menuController.index);
routes.get("/menu/:id", menuController.show);
routes.delete("/menu/:id", menuController.delete);
routes.patch("/menu/:id", menuController.update);

routes.post("/item", itemController.store);
routes.get("/item", itemController.index);
routes.get("/item/:id", itemController.show);
routes.delete("/item/:id", itemController.delete);
routes.patch("/item/:id", itemController.update);

routes.post("/section", sectionController.store);
routes.get("/section", sectionController.index);
routes.get("/section/:id", sectionController.show);
routes.delete("/section/:id", sectionController.delete);
routes.patch("/section/:id", sectionController.update);

export default routes;
