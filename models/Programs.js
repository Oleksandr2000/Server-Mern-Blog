import mongoose from 'mongoose';

const ProgramsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    coach: {
      type: String,
      unique: false,
    },
    imageUrl: {
      type: String,
      unique: false,
    },
    price: {
      type: Number,
      required: true,
      unique: false,
    },
    preview: {
      type: Number,
      required: true,
      unique: false,
    },
    filter: {
      type: String,
      required: true,
      unique: false,
    },
    workouts: {
      type: [],
      unique: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Programs', ProgramsSchema);
