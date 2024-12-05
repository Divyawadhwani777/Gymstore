import { ProductCard } from "../components/ProductCard"

export function Products({cart, setCart}) {

    const protein = {title: "Protein Powder", desc: "protein powder is used for building muscle" , price: 40}
    const creatine= {title: "Creatine", desc: "Creatine monohydrate used to suppliment your athleticism" , price: 25}
    const massGainer = {title: "Mass Gainer", desc: "Dense carb-loaded powder for packing on weight" , price: 50}


    const products = [protein ,creatine, massGainer]
    // these are objects

    return (
        <>
            {products.map((product) => {
                return(
                    <ProductCard product={product} cart={cart} setCart={setCart}/>
                )
            })}
        </>
    )

}
