import React, { useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { Review } from "../../components/review/Review";
import { CustomModel } from "../../components/custom-modal/CustomModel";
import { setShowModal } from "../../system-input/systemSlice";

const OrderHistory = () => {
  const { showModal } = useSelector((state) => state.systemInfo);
  const [purchaseProduct, setPurchaseProduct] = useState();
  const dispatch = useDispatch();
  const { purchaseHistory } = useSelector((state) => state.userInfo.user);
 


  console.log(purchaseHistory);
  const handleOnAddReview = (obj) => {
    dispatch(setShowModal(true));
    setPurchaseProduct(obj);
  };
  console.log(purchaseProduct)
  return (
    <UserLayout title="Order History">
      <CustomModel title="Give your review" show={showModal}>
        <Review {...purchaseProduct} />
      </CustomModel>

      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Product Id</th>
              <th>Purchase Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {purchaseHistory.map(
              ({ productId, productName, quantity, purchaseDate, _id, reviewSubmitted}, i) => (
                <tr key={_id}>
                  <td>{i + 1}</td>
                  <td>{productName}</td>
                  <td>{purchaseDate.slice(0, 10)}</td>
                  <td>{quantity}</td>
                  <td>
                    {
                      reviewSubmitted ? (
                        <span className="text-success fw-bolder">Review submitted</span>
                      )
                      :
                      (
  <Button
                      onClick={() =>
                        handleOnAddReview({ _id, productId, productName })
                      }
                      variant="warning"
                    >
                      
                      Give Review
                    </Button>
                      )
                    }
                  
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </UserLayout>
  );
};

export default OrderHistory;
