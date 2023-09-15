import React from "react";
import Link from "next/link";
const PricingBox = ({ pricings }) => {
  return (
    <>
      <div className="md:flex gap-6">
        {(pricings || []).map((pricing, key) => (
          <div
            className="relative hover:top-[-8px] ease-in-out duration-[2s] transition text-center py-[50px] px-[40px] bg-white basis-1/3  border border-solid border-[#ecf0f5] rounded-lg shadow-lg"
            key={key}
          >
            <h4 className="text-uppercase">{pricing.title}</h4>
            <h1 className="pt-1 font-medium text-[36px] ">${pricing.price}0</h1>
            <h6 className="text-uppercase text-muted">
              Billing Per {pricing.duration}
            </h6>
            <hr />

            <div className="flex flex-col mt-[1.5rem]">
              {pricing.features.map((feature, key) => (
                <p key={key} className="mb-4 pt-1">
                  {feature.title}
                  <b className="text-primary">{feature.value}</b>
                </p>
              ))}
            </div>
            <Link className="mt-6" href="#">
              <button className="bg-[#fb3e3e] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Join Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingBox;
