import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HousesService {
    async getHouseId(houseId) {
        const house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('Invalid House ID')
        }
        return house
    }

    async createHouse(houseData) {
        const house = await dbContext.Houses.create(houseData)
        return house
    }
    async getHouses(query) {
        const houses = await dbContext.Houses.find(query)
        return houses
    }




}

export const housesService = new HousesService()