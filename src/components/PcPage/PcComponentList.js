import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const PcComponentList = ({ cat, showModal, setShowModal }) => {
  const products = useSelector((state) => state.buildPc.builder);
  const exist = products.find((obj) => obj.category === cat?.apiValue);
  // console.log(products, cat, exist);
  const router = useRouter();
  const clickBtnFunc = (value) => {
    setShowModal(!showModal);
    router.push(`/pc?category=${value}`);
  };
  return (
    <>
      <li className="p-3 items-center flex flex-col sm:grid sm:grid-cols-12">
        {exist ? (
          <div>
            <Image
              src={exist?.image}
              width={200}
              height={200}
              alt={cat?.name}
            />
          </div>
        ) : (
          <div className="bg-gray-300 col-span-3 md:col-span-1 p-4 w-[4.75rem] rounded-lg">
            {cat.icon}
          </div>
        )}

        <div className="text-2xl col-span-7  md:col-span-10">
          {exist ? (
            <>
              <h5 className="text-2xl font-bold">{cat.name}</h5>
              <div>{exist?.productName}</div>
              <h5>৳ {exist?.price}</h5>
            </>
          ) : (
            cat.name
          )}
        </div>
        <div className="col-span-2 md:col-span-1 w-full sm:w-auto">
          <button
            onClick={() => clickBtnFunc(cat.apiValue)}
            className="border-blue-500 w-full sm:w-auto border-2 py-2 px-6 rounded-lg hover:bg-blue-500 hover:border-transparent hover:text-white transition-all ease-in-out duration-300"
          >
            Choose
          </button>
        </div>
      </li>
    </>
  );
};

export default PcComponentList;
