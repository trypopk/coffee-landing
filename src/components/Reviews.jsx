import { useState } from "react";
import "./Reviews.css"

const reviews = [
    {
        name: "Алексей",
        text: "Кофе просто супер! Заказываю каждое утро. Обожаю Эспрессо.",
        rating: 5
    },
    {
        name: "Мария",
        text: "Очень вкусный латте, нежный и ароматный. Курьер всегда вовремя!",
        rating: 4
      },
      {
        name: "Ольга",
        text: "Давно искала хороший кофе — нашла вас, и это любовь :)",
        rating: 5
      }
];

function Reviews() {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1) % reviews.length);
    };

    const review = reviews[current];

    return(
        <section className="reviews">
            <h2>Отзывы</h2>
            <div className="review-card">
                <p className="text">"{review.text}"</p>
                <p className="autor">- {review.name}</p>
                <p className="reting">Оценка: {"⭐".repeat(review.rating)}</p>
                <div className="buttons">
                    <button onClick={handlePrev}>←</button>
                    <button onClick={handleNext}>→</button>
                </div>
            </div>
        </section>
    );
}

export default Reviews;