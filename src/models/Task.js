import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  id: {
    type: Number,
  },
  nombre: {
    type: String,
    required: [true, "nombre requerido"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true,
  },
  barrio: {
    type: String,
    trim: true,
  },
  direccion: {
    type: String,
    trim: true,
  },
});

export default models.Task || model("Task", taskSchema);
