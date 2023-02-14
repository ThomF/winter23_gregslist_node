import BaseController from "../utils/BaseController.js";
import { housesService } from "../services/HousesService.js";

export class HousesController extends BaseController {

    constructor() {
        super('api/houses')
        this.router
            .get('', this.getHouses)
            .get('/:houseId', this.getHouseId)
            .post('', this.createHouse)
            .put('/:houseId', this.updateHouseById)
            .delete('/:houseId', this.destroyHouseId)
    }



    async getHouses(req, res, next) {
        try {
            const query = req.query
            const houses = await housesService.getHouses(query)
            res.send(houses)
        } catch (error) {
            next(error)
        }
    }

    async createHouse(req, res, next) {
        try {
            const houseData = req.body
            const house = await housesService.createHouse(houseData)
            res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async getHouseId(req, res, next) {
        try {
            const houseId = req.params.houseId
            const house = await housesService.getHouseId(houseId)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }

    async updateHouseById(req, res, next) {
        try {
            const houseId = req.params.houseId
            const houseData = req.body
            const updatedHouse = await housesService.updateHouse(houseId, houseData)
            return res.send(updatedHouse)

        } catch (error) {
            next(error)
        }
    }

    async destroyHouseId(req, res, next) {
        try {
            const houseId = req.params.houseId
            const house = await housesService.destroyHouseId(houseId)
            return res.send(house)
        } catch (error) {
            next(error)
        }
    }


}