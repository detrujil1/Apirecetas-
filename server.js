import express from "express"
import recipes from "./recipes.js";
const app = express();
let products = [...recipes]
app.use(express.json());
// products = [];
//rutas 
app.get("/", (req, res) => {
    return res.json(products);
})

// get por producto por id 
// update po ptoducto por id 
// delete po ptoducto por id 


app.get("/api/products/all", (req, res) => {
    return res.json(products);
});

app.post("/api/products", (req, res) => {
    // cascaron 
    const {id, 
         title,
         description,
         preparation,
         instructions, 
         ingredients, 
         nutritionalValues } = req.body;
        //condicional
    if (!title || !description || !preparation || !instructions || !ingredients || !nutritionalValues) {
        return res.status(400).json({
            message: "Todos los campos son obligatorios."
        });
    }
    
    const newProduct = {
        id,//products.length + 1, // O usa alguna otra forma de generar IDs únicos
        title,
        description,
        preparation,
        instructions,
        ingredients,
        nutritionalValues
    };

    // Agregar el nuevo producto al array
    products.push(newProduct);

    return res.status(201).json({
        message: "Se ha creado un nuevo producto.",
        product: newProduct
    });
});










app.listen(3000, () => {
    console.log("servidor escuchando")
});