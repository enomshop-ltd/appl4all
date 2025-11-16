import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../../utils.ts";
import Counter from "../../islands/Counter.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="container mx-auto px-18 bg-blue-100">
      <div class="px-6 py-3">
        <div class="grid grid-cols-4 gap-4">
          <div class="rounded-md min-h-64 shadow-md bg-white">
            <div className="card size-full p-2.5 pt-6">
              <figure className="w-full min-h-40 bg-no-repeat bg-contain bg-center bg-[url(https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/4d36d66a-1b74-4b56-995a-29bf91fea67d-1_9edba1a8-057e-4344-9890-90ded271f1e9.jpg)]">
              </figure>
              <div className="card-body px-2 text-left items-center w-full">
                <h2 className="card-title m-auto text-base text-center">
                  iPad Air M2 11" (2022)
                </h2>
                <div className="divider"></div>
                <p class="w-full text-xs whitespace-break-spaces pb-2">
                  <span class="text-gray-500 text-[11px]">Starting at</span>
                  <br />
                  <span class="font-bold text-[14px]">KES 70,000/=</span>
                  <br />
                  <span class="line-through text-[12px] text-gray-500">
                    KES 90,000/=
                  </span>{" "}
                  <span class="text-[12px] text-red-500">New</span>
                </p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md min-h-64 shadow-md bg-white">
            <div className="card size-full p-2.5 pt-6">
              <figure className="w-full min-h-40 bg-no-repeat bg-contain bg-center bg-[url(https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/4d36d66a-1b74-4b56-995a-29bf91fea67d-1_9edba1a8-057e-4344-9890-90ded271f1e9.jpg)]">
              </figure>
              <div className="card-body px-2 text-left items-center w-full">
                <h2 className="card-title m-auto text-base text-center">
                  iPad Air M2 11" (2022)
                </h2>
                <div className="divider"></div>
                <p class="w-full text-xs whitespace-break-spaces pb-2">
                  <span class="text-gray-500 text-[11px]">Starting at</span>
                  <br />
                  <span class="font-bold text-[14px]">KES 70,000/=</span>
                  <br />
                  <span class="line-through text-[12px] text-gray-500">
                    KES 90,000/=
                  </span>{" "}
                  <span class="text-[12px] text-red-500">New</span>
                </p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md min-h-64 shadow-md bg-white">
            <div className="card size-full p-2.5 pt-6">
              <figure className="w-full min-h-40 bg-no-repeat bg-contain bg-center bg-[url(https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/4d36d66a-1b74-4b56-995a-29bf91fea67d-1_9edba1a8-057e-4344-9890-90ded271f1e9.jpg)]">
              </figure>
              <div className="card-body px-2 text-left items-center w-full">
                <h2 className="card-title m-auto text-base text-center">
                  iPad Air M2 11" (2022)
                </h2>
                <div className="divider"></div>
                <p class="w-full text-xs whitespace-break-spaces pb-2">
                  <span class="text-gray-500 text-[11px]">Starting at</span>
                  <br />
                  <span class="font-bold text-[14px]">KES 70,000/=</span>
                  <br />
                  <span class="line-through text-[12px] text-gray-500">
                    KES 90,000/=
                  </span>{" "}
                  <span class="text-[12px] text-red-500">New</span>
                </p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md min-h-64 shadow-md bg-white">
            <div className="card size-full p-2.5 pt-6">
              <figure className="w-full min-h-40 bg-no-repeat bg-contain bg-center bg-[url(https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d2e6ccujb3mkqf.cloudfront.net/4d36d66a-1b74-4b56-995a-29bf91fea67d-1_9edba1a8-057e-4344-9890-90ded271f1e9.jpg)]">
              </figure>
              <div className="card-body px-2 text-left items-center w-full">
                <h2 className="card-title m-auto text-base text-center">
                  iPad Air M2 11" (2022)
                </h2>
                <div className="divider"></div>
                <p class="w-full text-xs whitespace-break-spaces pb-2">
                  <span class="text-gray-500 text-[11px]">Starting at</span>
                  <br />
                  <span class="font-bold text-[14px]">KES 70,000/=</span>
                  <br />
                  <span class="line-through text-[12px] text-gray-500">
                    KES 90,000/=
                  </span>{" "}
                  <span class="text-[12px] text-red-500">New</span>
                </p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-4 rounded-md h-74 shadow-md bg-white">06</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
          <div class="rounded-md h-64 shadow-md bg-white">01</div>
        </div>
      </div>
    </div>
  );
});
