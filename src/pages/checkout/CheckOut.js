import React, { useEffect, useState } from "react";
import { GoLock } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/custom_input/CustomInput";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../../components/checkout-form/CheckoutForm";
import { CustomModel } from "../../components/custom-modal/CustomModel";
import { setShowModal } from "../../system-input/systemSlice";
import { clearCart } from "../product/Productslice";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Q2NqPRqmABuaXCPVVD0GQFIpRp9wou8LJPxuI6Lssp8aZlhvQvNmDlEqlevqKm3oIbjAHcgC5bDTIYK0szuuRKV00VPPLHmKz"
);

const CheckOut = () => {
  const { showModal } = useSelector((state) => state.systemInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true);
  const [form, setForm] = useState();
  const { user } = useSelector((state) => state.userInfo);
  const { cartList } = useSelector((state) => state.productInfo);
  console.log(cartList);
  useEffect(() => {
    if (!user._id) {
      navigate("/");
      dispatch(clearCart());
    }
  }, [user._id, dispatch, navigate]);

  const { _id, email, fname, lname } = user;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnAddCard = (e) => {
    dispatch(setShowModal(true));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(false);
  };
  console.log(form);

  const addressInput = [
    {
      label: "Address",
      name: "address1",
      placeholder: "unit-3",
      type: "text",
      required: true,
    },
    {
      name: "address2",
      placeholder: "8 lower",
      type: "text",
    },
    {
      label: "Postcode",
      name: "postcode",
      placeholder: "2145",
      type: "text",
      required: true,
    },
    {
      label: "City/Suburb",
      name: "city",
      placeholder: "wenty",
      type: "text",
      required: true,
    },
    {
      label: "State/Territory",
      name: "state",
      placeholder: "8 lower",
      type: "text",
      required: true,
    },
  ];

  const inputs = [
    {
      label: "Fisrt Name",
      name: "fname",
      placeholder: "sathish",
      type: "text",
      required: true,
      value: user.fname,
    },
    {
      label: "Last Name",
      name: "lname",
      placeholder: "Boga",
      type: "text",
      required: true,
      value: user.lname,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "sat@boga",
      type: "email",
      required: true,
      value: user.email,
      readOnly: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      placeholder: "456789",
      type: "text",
      required: true,
      value: user.phone,
    },
  ];
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{CLIENT_SECRET}}",
  };
  return (
    <div className="wrapper">
      <div className="am-box">
        <div className="nav-bar d-flex border">
          <div className="am-img">
            <Link to="/">
              <img
                src="https://m.media-amazon.com/images/I/413Ais4J2uL.jpg"
                alt=""
                width={150}
              />
            </Link>
          </div>
          <div className="checkout">
            <h4>Checkout({cartList.length})</h4>
          </div>
          <div className="signin">
            <Link to="/">
              {" "}
              <GoLock />
            </Link>
          </div>
        </div>
      </div>

      <div className="container d-flex mt-4">
        {showSpinner && (
          <div className="left border p-4">
            <span>Customer account details</span>
            <hr />
            <Form onSubmit={handleOnSubmit} className="rounded ">
              {inputs.map((item, i) => (
                <CustomInput onChange={handleOnChange} key={i} {...item} />
              ))}
            </Form>
            <Form onSubmit={handleOnSubmit} className="rounded ">
              <span>Delivery address details</span>
              {addressInput.map((item, i) => (
                <CustomInput onChange={handleOnChange} key={i} {...item} />
              ))}
              <input type="checkbox" name="" id="" />
              <Button variant="warning" type="submit">
                Use this address
              </Button>
            </Form>
          </div>
        )}
        {!showSpinner && (
          <div className="deliver-address d-flex">
            <div className="delivery">
              <h4>1 Delivery Address</h4>
            </div>
            <div className="address">
              <p>{form.fname}</p>
              <p>{form.address1}</p>
              <p>{form.postcode}</p>
              <p>{form.city}</p>
              <p>{form.state}</p>
            </div>
          </div>
        )}
      </div>

      {!showSpinner && (
        <div className="method ">
          <hr />

          <div className="payment-method">
            2 {""} Add Payment Method
            <div className="">
              <Button
                variant="warning"
                onClick={() => dispatch(setShowModal(true))}
              >
                Add Card Details
              </Button>
              <Elements stripe={stripePromise}>
                <CustomModel title="Add credit card details" show={showModal}>
                  {console.log(showModal)}
                  <CheckoutForm add={form} />
                </CustomModel>
              </Elements>
            </div>
          </div>

          <hr />

          <div className="items-delivery">
            3 Items and delivery
            <div className=""> delivery to ....</div>
          </div>

          <hr />
        </div>
      )}
    </div>
  );
};

export default CheckOut;
