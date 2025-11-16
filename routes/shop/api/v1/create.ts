mport { define } from "../../../../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    const form = await ctx.req.formData();

    const item = {};
    const Price = form.get("Price");
    const Quantity = form.get("Quantity");
    const Category = form.get("Category");
    const Attributes = form.get("Attributes"); //Processor, Ram, Capacity, Color, Size, YOM, PartNumbers
    const Condition = form.get("Condition");
    const SKU = form.get("SKU");

    //await client.connect();
    //const db = client.db("enomshop");
    //const collection = db.collection("shop");
    //const res = await collection.insertOne(item);

    //await client.close();

    return Response.json({
      res: "ok",
      message: "Product created",
      //id: res.insertedId,
    });
  },
});
