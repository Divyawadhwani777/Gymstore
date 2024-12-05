


export function ProductCard({product, cart, setCart}) {
    console.log(product)
    console.log(cart.cart)

    function handleClick() {
        setCart([...cart, product])

    }
    return(
        <>
            <h2>{product.title}</h2>
                <p>{product.desc}</p>
                <button>${product.price}</button>
                <button onClick={() => handleClick()}>
                    {cart.find((item) => item.title == product.title)? "Added to cart" : "Add to cart"}
                </button>
        </>
    )
}