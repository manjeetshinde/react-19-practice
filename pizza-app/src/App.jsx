import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Pixel Perfect Pizza</h1>
      <Pizza
        name="Margherita"
        description="A classic pizza with basil and mozzarella."
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Pepperoni"
        description="A pizza with spicy sausage."
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="A pizza with pineapple and ham."
        image={"/public/pizzas/hawaiian.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
