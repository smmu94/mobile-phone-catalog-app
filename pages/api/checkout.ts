import { SelectedProduct } from "@contexts/selectedProductsContext/types";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const orderId = `ORD-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { products } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((item: SelectedProduct) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: [item.color.imageUrl],
          },
          unit_amount: Math.round(item.storage.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${req.headers.origin}/success?order_id=${orderId}`,
      cancel_url: `${req.headers.origin}/cart`,
      metadata: {
        orderId,
      }
    });

    res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    res.status(500).json({
      error: "Stripe checkout session failed",
      message: error.message
    });
  }
}