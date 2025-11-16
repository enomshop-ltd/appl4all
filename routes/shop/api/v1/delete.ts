import { define } from "../../../../utils.ts";
//import { default as client } from "../../_utils/mongoDb.ts";

export const handler = define.handlers({
  async POST(ctx) {
    return new Response(
      `Hello!`,
    );
  },
});
