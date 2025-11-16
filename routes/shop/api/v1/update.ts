import { define } from "../../../../utils.ts";

export const handler = define.handlers({
  async POST(ctx) {
    return new Response(
      `Hello!`,
    );
  },
});
