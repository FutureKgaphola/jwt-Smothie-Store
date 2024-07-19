import Product_Mdl from "../models/ProductModel.mjs";
const getAll = (
  async (req, res) => {
    try {
      const smothie = await Product_Mdl.find({});
      res.status(200).json(smothie);
    } catch (error) {
      res.status(404).json({message:error?.message});
    }
  }
);

const getOne = (
  async (req, res) => {
    try {
      const smothie = await Product_Mdl.findById(req.params?.id);
      res.status(200).json(smothie);
    } catch (error) {
      res.status(404).json({message:error?.message});
    }
  }
);

const deleteOne = (
  async (req, res) => {
    try {
      const smothie = await Product_Mdl.findByIdAndDelete(req?.params.id);
      if (!smothie) {
        return res.status(404).json({ message: "could not find product to delete" });
      }
      res.status(200).json(smothie);
    } catch (error) {
      res.status(404).json({message:error?.message});
    }
  }
);

const updateOne = (
  async (req, res) => {
    try {
      const smothie = await Product_Mdl.findByIdAndUpdate(req?.params.id, req?.body);
      if (!smothie) {
        return res.status(404).json({ message: "could not find product to update" });
      }
      const updatedSmothie = await Product_Mdl.findById(req?.params.id);
      res.status(201).json(updatedSmothie);
    } catch (error) {
      res.status(404).json({message:error?.message});
    }
  }
);

const creteOne = (
  async (req, res) => {
    try {
      const smothie = await Product_Mdl.create(req.body);
      res.status(200).json(smothie);
    } catch (error) {
      res.status(404).json({message:error?.message});
    }
  }
);

export { getAll, getOne, deleteOne, updateOne, creteOne };
