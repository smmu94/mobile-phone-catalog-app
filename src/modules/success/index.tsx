import React from "react";
import Button from "@components/button";
import { SelectedProductsContext } from "@contexts/selectedProductsContext";
import routes from "@utils/routes";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./success.module.sass";

export default function SuccessView() {
  const router = useRouter();
  const { order_id } = router.query;
  const { setSelectedProducts } = useContext(SelectedProductsContext);

  useEffect(() => {
    setSelectedProducts([]);
    localStorage.removeItem("selectedProducts");
  }, []);

  const goToHome = () => {
    router.push(routes.home.main);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.success}>
        <FaCheckCircle size={60} color="#008000" />
        <h2>Payment Successful!</h2>
        <p>Your order has been processed successfully.</p>
        {order_id && (
          <p className={styles.orderId}>
            Order reference: <strong>{order_id}</strong>
          </p>
        )}
        <Button onClick={goToHome} style="Primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
