import BaseController from "../utils/BaseController.js";
import { housesService } from "./HousesService.js";

export class HousesController extends BaseController {

    constructor() {
        super('houses')
        this.router
            .get('', this.getHouses)
    }



    async getHouses(req, res, next) {
        try {
            const query = req.query
            const houses = await housesService.getHouses(query)
        } catch (error) {
            next(error)
        }
    }




}