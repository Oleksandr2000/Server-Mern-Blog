import ProgramsModel from '../models/Programs.js';

export const getAllPrograms = async (req, res) => {
  try {
    const fullPrograms = await ProgramsModel.find('title, description, price, coach');

    res.json(fullPrograms);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить програму',
    });
  }
};

export const getOnePrograms = async (req, res) => {
  try {
    const programsId = req.params.id;

    const data = await ProgramsModel.find({ _id: programsId });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить програму',
    });
  }
};

export const filterPrograms = async (req, res) => {
  try {
    const filterId = req.params.id;

    const data = await ProgramsModel.find({ filter: filterId });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить програму',
    });
  }
};
