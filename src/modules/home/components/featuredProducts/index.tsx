import React, { useContext, useEffect } from "react";
import { ProductsListContext } from "@contexts/productsListContext";
import Card from "@components/card";
import styles from "./featuredProducts.module.sass";
import Messages from "@components/messages";
import Spinner from "@components/spinner";
import { useGetProductList } from "@services/list";
import { messages } from "@modules/list/components/cards/constants";

interface FeaturedProductsProps {
  limit?: number
}

export default function FeaturedProducts({ limit = 6 }: FeaturedProductsProps) {
  const { setProductsList, productsList } = useContext(ProductsListContext);

  const { isLoading, isError, data } = useGetProductList(
    { search: "", limit, offset: 0 },
    {
      onSuccess: (data) => {
        setProductsList(data);
      },
    }
  );

  useEffect(() => {
    if (data) {setProductsList(data);}
  }, [data, setProductsList]);

  if (isError) {return <Messages message={messages.error} isError />;}
  if (isLoading) {return <Spinner />;}
  if (!productsList.length) {return <Messages message={messages.empty} />;}

  return (
    <div className={styles.wrapper} aria-label="featured-products-cards" role="list">
      {productsList.map((phone, i) => (
        <Card
          key={`${phone.id}-${i}`}
          id={phone.id}
          imageUrl={phone.imageUrl}
          name={phone.name}
          brand={phone.brand}
          basePrice={phone.basePrice}
        />
      ))}
    </div>
  );
}
