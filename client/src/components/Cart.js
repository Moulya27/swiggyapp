import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../redux/cartSlice";
import "./styles/Cart.css";
function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  //Remove items
  const removeFromCartHandler = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  //Decrease the quantity of an item
  const decreaseCartHandler = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  //Increase the quantity of an item
  const increaseCartHandler = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  //Dispatch totalqty
  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  return (
    <div className="container-fluid">
      {cart.cartItems.length === 0 ? (
        <div className="row">
          <div className="col-md-10 col-lg-5 col-11 mx-auto mb-lg-0 mb-5 cartEmptyContainer">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/food-delivery-application-3707889-3098744.png"
              className="img-fluid cartEmptyImage"
              alt="cart is empty"
            />
            <h4 className="mt-5">Your cart is empty</h4>
            <p>You can go to home page to order food</p>
            <Link to="/home">
              <button className="mt-3 px-2 backToHomeBtn">
                See Restaurants near you
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
              <div className="col-md-12 col-lg-8 col-11 mx-auto mb-lg-0 mb-5 shadow">
                {cart.cartItems?.map((cartItem) => (
                  <div key={cartItem.id} className="card py-4">
                    <div className="row">
                      <div className="col-md-5 col-11 mx-auto  d-flex justify-content-center align-items-center">
                        <img
                          src={cartItem.imgSrc}
                          alt={cartItem.name}
                          className="img-fluid mealImages"
                        />
                      </div>

                      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div className="row">
                          <div className="col-6 cardTitle">
                            <h4 className="mb-4 meal">{cartItem.name}</h4>
                            <p>
                              ₹<span>{cartItem.price * cartItem.cartQty}</span>
                            </p>
                          </div>
                          <div className="col-6 d-flex justify-content-center align-items-center cartQty">
                            <button
                              onClick={() => decreaseCartHandler(cartItem)}
                            >
                              -
                            </button>
                            <div>{cartItem.cartQty}</div>
                            <button
                              onClick={() => increaseCartHandler(cartItem)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-10 d-flex justify-content-end">
                            <button
                              onClick={() => removeFromCartHandler(cartItem)}
                              className="btnRemove"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div class="right_side p-3 shadow bg-white">
                  <h2 class="product_name mb-5">Bill Details</h2>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Item Total</p>
                    <p>
                      ₹
                      <span id="product_total_amt">{cart.cartTotalAmount}</span>
                    </p>
                  </div>
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Delivery partner fee</p>
                    <p>
                      ₹<span id="shipping_charge">50.00</span>
                    </p>
                  </div>
                  <hr />
                  <div class="price_indiv d-flex justify-content-between">
                    <p>Taxes and Charges</p>
                    <p>
                      ₹<span id="shipping_charge">12.60</span>
                    </p>
                  </div>
                  <hr />
                  <div class="total-amt d-flex justify-content-between font-weight-bold">
                    <h6>To Pay</h6>
                    <h6>
                      ₹
                      <span id="total_cart_amt">
                        {cart.cartTotalAmount + 50.0 + 12.6}
                      </span>
                    </h6>
                  </div>
                  <button class="btn btn-light text-uppercase btnOrder ">
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
