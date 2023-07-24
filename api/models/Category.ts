
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const Category = mongoose.models.category || mongoose.model('Category', categorySchema);

export default Category;