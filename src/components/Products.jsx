import "./Products.css";

const coffeeProducts = [
    {
        id: 1,
        name: "Эспресо",
        description: "Крепкий и насыщенный вкус, идеально для начала дня.",
        price: "250 ₽",
        image: "https://images.unsplash.com/photo-1506372023823-741c83b836fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHwy"
    },
    {
        id: 2,
        name: "Латте",
        description: "Мягкий вкус с молочной пенкой.",
        price: "300 ₽",
        image: "https://images.unsplash.com/photo-1587080413959-06b859fb107d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8Mg%3D%3D"
      },
      {
        id: 3,
        name: "Капучино",
        description: "Баланс молока и кофе, любимая классика.",
        price: "280 ₽",
        image: "https://images.unsplash.com/photo-1486122151631-4b5aaa3ac70d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8Mg%3D%3D"
      }
];

function Products(){
    return (
        <section className="products">
            <h2>Наш кофе</h2>
            <div className="product-grid">
                {coffeeProducts.map((coffee) => (
                    <div className="product-card" key={coffee.id}>
                        <img src={coffee.image} alt={coffee.name} />
                        <h3>{coffee.name}</h3>
                        <p>{coffee.description}</p>
                        <span>{coffee.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Products;