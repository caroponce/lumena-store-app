const products = [
    { id: '1', name: 'Kika', price: 3000, category: 'top', img:'https://i.ibb.co/DRmY8Jy/topkika.webp', stock: 20, description:'Top tejido color verde'},
    { id: '2', name: 'Lisa', price: 4000, category: 'top', img:'https://i.ibb.co/9Tq5Pvv/toplisa.webp', stock: 20, description:'top con moño color verde claro'},
    { id: '3', name: 'Nina', price: 3500, category: 'top', img:'https://i.ibb.co/2KxNs5v/topnina.webp', stock: 25, description:'top floreado con volados'},
    { id: '4', name: 'Eva', price: 6000, category: 'vestido', img:'https://i.ibb.co/vknkMV5/vestidoeva.webp', stock: 20, description:'vestido floreado con espalda cruzada'},
    { id: '5', name: 'Bianca', price: 6000, category: 'vestido', img:'https://i.ibb.co/7NNrXVF/vestidobianca.webp', stock: 22, description:'vestido bordo, con nudo en los breteles'},
    { id: '6', name: 'Nuri', price: 5500, category: 'camisa', img:'https://i.ibb.co/W6fkQLS/camisanuri.webp', stock: 22, description:'camisa over color verde'},
    { id: '7', name: 'Tita', price: 6500, category: 'camisa', img:'https://i.ibb.co/Ptmxt1g/camisatita.webp', stock: 22, description:'camisa over de ecocuero'},
    { id: '8', name: 'Lola', price: 4500, category: 'falda', img:'https://i.ibb.co/4ZLGCrZ/faldalola.webp', stock: 22, description:'falda estampada, larga con tajo'},
    { id: '9', name: 'Chofa', price: 5000, category: 'falda', img:'https://i.ibb.co/myJSkZ8/faltachofa.webp', stock: 22, description:'mini rosa, con botones y tajo'},

]

export const getProducts = () => {
    console.log()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}