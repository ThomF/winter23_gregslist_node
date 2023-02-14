import { Schema } from "mongoose";


export const HouseSchema = new Schema(
    {
        description: { type: String, required: true, maxLength: 100 },
        bedrooms: { type: Number, required: true, minLength: 1 },
        bathrooms: { type: Number, required: true, minLength: 1 },
        price: { type: Number, required: true, minLength: 100000 }

    },
    { timestamps: true, toJSON: { virtuals: true } }
)