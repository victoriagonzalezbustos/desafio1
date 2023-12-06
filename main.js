class ProductManager{

    static ultimoid = 0

    constructor(){
        this.products =[]
    }

    addProduct(titulo, descripcion, precio, img, codigo, stock){
        if(!titulo || !descripcion || !precio || !img ||!codigo || !stock  ){
            console.log("Todos los campos son obligatorios")
            return
        }

        if(this.products.some(item => item.codigo === codigo)){
            console.log("ya existe un producto con ese codigo")
            return
        }

        const newProduct = {
            id : ++ProductManager.ultimoid,
            titulo,
            descripcion,
            precio,
            img,
            codigo,
            stock,

        }

        this.products.push(newProduct)


    }


    getProducts(){
        console.log(this.products)
    }

    getProductByID (id){
        const producto = this.products.find(item => item.id === id)

        if(!producto){
            console.log("producto no encontrado")
        } else{
            console.log("Producto encontrado: ", producto )
        }
    }

    deleteProducts (){
        this.products = []
    }
}


// test

// creo una instancia de ProductManager

const manager = new ProductManager

// traigo el primer array vacio

manager.getProducts()

// le cargo un producto de prueba 

manager.addProduct("producto prueba", "este es un prod de prueba", 200, "sin imagen", "abc123", 25 )

manager.getProducts()

// pruebo los filtros de codigo unico y campos faltantes

manager.addProduct("producto prueba", "este es un prod de prueba", 200, "sin imagen", "abc123", 25 )

manager.addProduct("producto prueba", "este es un prod de prueba", 200, "sin imagen", "abc123" )

// id incremental automatico

manager.addProduct("cartera ", "cartera de cuero", 200, "sin imagen", "abc124", 25 )
manager.addProduct("pantalon ", "pantalon de jean", 100, "sin imagen", "abc125", 25 )
manager.addProduct("anteojos ", "anteojos de sol", 300, "sin imagen", "abc126", 25 )
manager.getProducts()


//mgete product by id

manager.getProductByID(2)
manager.getProductByID(50)