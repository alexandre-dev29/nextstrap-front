import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { StateProduct } from "../../UiTypes/StateProduct";
const stripeApp = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`, {
  apiVersion: "2020-08-27",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripeApp.checkout.sessions.create({
        submit_type: "pay",
        payment_method_types: ["card", "alipay"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1Kski2FuFBSPfhhSBVWimS2K" },
          { shipping_rate: "shr_1KskikFuFBSPfhhSzq3lUy6U" },
        ],
        line_items: req.body.map((item: StateProduct) => {
          const img = `http://localhost:1337${item.productImages?.data[0].attributes?.url}`;
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.productName,
                images: [img],
              },
              unit_amount: item.productPrice * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      });
      res.status(200).json(session);
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
  // res.status(200).json({ name: "John Doe" });
}
