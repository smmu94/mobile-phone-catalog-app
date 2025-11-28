import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
export const config = {
  api: {
    bodyParser: false, 
  },
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = await getRawBody(req);
  const sig = req.headers["stripe-signature"];

  if (!sig) {
    console.error("Missing stripe-signature header");
    return res.status(400).send("Missing stripe-signature header");
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (error: any) {
    console.log(error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
  switch (event.type) {
  case "checkout.session.completed":
    const checkoutSessionCompleted = event.data.object;
    console.log({ checkoutSessionCompleted });
    break;
  default:
    console.log(`Unhandled event type ${event.type}`);
  }
  return res.status(200).send("OK");
}

function getRawBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });
    req.on("error", (err: Error) => {
      reject(err);
    });
  });
}