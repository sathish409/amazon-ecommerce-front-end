import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Link, useParams } from "react-router-dom";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAProductAction, postToCart } from "../product/ProductAction";
import { FaStar, FaVolumeHigh } from "react-icons/fa6";
import { ReviewStars } from "../../components/review-stars/ReviewStars";
import { Image } from "react-bootstrap";

const ProductLanding = () => {
  const [qty, setQty] = useState(1);
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { product, reviewsList } = useSelector((state) => state.productInfo);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { images, productname, producttype, price, quantity, description } =
    product;
  console.log(product, reviewsList);
  const handleOnChange = (e) => {
    const { value } = e.target;
    setQty(value);
    console.log(qty);
  };

  const handleOnAddToCart = (product) => {
    // setForm(
    //  [ ...form,
    //   product,]
    // )
    //get product id, quantity
    if (quantity > qty) {
      dispatch(postToCart({ product, qty }));
    } else {
      alert("Sorry for the inconvenience, product is not available");
    }
  };
  useEffect(() => {
    _id && dispatch(getAProductAction(_id));
  }, [_id]);

  console.log(_id);
  const productSpecificReview = reviewsList.filter(
    (review) => review.status === "active" && review.productId === _id
  );
  const avgRating =
    productSpecificReview.reduce((acc, item) => acc + item.num, 0) /
    productSpecificReview.length;
  console.log(avgRating);
  return (
    <MainLayout title="cart list">
      <div className="wrapper">
        <div className="bottom p-3 d-flex justify-content-between gap-2">
          <div className="main-image p-4 mt-3 rounded shadow">
            <Image
           
    src ={images?.length > 0
      ? `http://localhost:8000${images[selectedIndex]}`
      : "/placeholder.png" // <-- add a fallback image
  }
              alt="product"
              style={{ width: "400px", height: "400px", objectFit: "cover" }}
              className="shadow rounded"
            />
          </div>

          {/* Thumbnails */}
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {images?.map((img, i) => (
              <Image
                key={i}
                src={`http://localhost:8000${img}`}
                alt={`thumb-${i}`}
                onClick={() => setSelectedIndex(i)}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  border:
                    selectedIndex === i
                      ? "2px solid #f0ad4e"
                      : "1px solid #ddd",
                }}
                className="rounded"
                thumbnail
              />
            ))}
          </div>
          <div className="details">
            <h5>{producttype}</h5>

            <p>only {quantity} left stock (more on the way)</p>

            <ReviewStars avgRating={avgRating} />
            <hr />
            <p className="co">Price: {price}$</p>
            <input onChange={handleOnChange} value={qty} type="number" />

            <div className="add text-center mb-2">
              <Link to={`/cart/${_id}`}>
                <Button
                  onClick={() => handleOnAddToCart(product)}
                  variant="warning"
                  type="submit"
                >
                  Add to cart
                </Button>
              </Link>
            </div>
            <div className="add text-center mb-2">
              <Button variant="warning" type="submit">
                Buy now
              </Button>
            </div>
            <hr />
            <div className="description">
              <h4>About this item</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="recco">
        <h3>Reccommondations</h3>
        <hr />
      </div>
    </MainLayout>
  );
};

export default ProductLanding;
