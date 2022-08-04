import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, getTotal } from "../redux/cartSlice";
import authService from "../services/auth.service";
import postService from "../services/post.service";

function Home() {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCartHandler = (meal) => {
    dispatch(addToCart(meal));
  };

  //console.log(posts);
  useEffect(() => {
    postService.getAllPublicPosts().then(
      (response) => {
        console.log(response.data);
        setMeals(response.data);
      },
      (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response && error.response.status === 403) {
          authService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <div className="container">
      <div className="row">
        {meals?.map((meal) => (
          <div className="col-12 col-md-6 col-lg-4">
            <div key={meal.id} className="card mt-4">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                className="card-img-top"
                src={meal.imgSrc}
                alt="food"
              />
              <div className="card-body">
                <h4>{meal.name}</h4>
                <span>₹ {meal.price}</span>
                <button
                  className="addBtn"
                  onClick={() => addToCartHandler(meal)}
                  style={{ float: "right" }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
