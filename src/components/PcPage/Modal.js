import Image from "next/image";
import React from "react";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addToBuildPc } from "../../../redux/services/buildPcSlice";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Modal = ({ showModal, setShowModal, products }) => {
  const dispatch = useDispatch();

  // console.log(products);
  return (
    showModal && (
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000059] flex justify-center items-center">
        <div className="p-4 m-4 w-full md:w-[60%] max-h-[70vh] overflow-y-auto scroll-m-36 bg-white min-h-[200px] relative rounded-t-lg">
          <button
            onClick={() => setShowModal(!showModal)}
            className="sticky top-4 right-4 left-0 p-4 bg-white shadow-lg rounded-full"
          >
            <GiCrossMark />
          </button>
          <div>
            <ul className="mt-7">
              {products &&
                products.map((product) => (
                  <li
                    key={product._id}
                    className="flex flex-col md:grid gap-5 grid-cols-12 overflow-hidden p-4 items-center shadow-lg rounded-lg mb-7"
                  >
                    <div className=" md:col-span-3">
                      <Image
                        src={product?.image}
                        width={228}
                        height={228}
                        alt={product?.productName}
                      />
                    </div>
                    <div className=" md:col-span-6">
                      <h1 className="font-bold text-2xl">
                        {product?.productName}
                      </h1>
                      <p>
                        <strong>Category: </strong>
                        {product?.category}
                      </p>
                      <ul className="list-disc pl-6">
                        {product?.keyFeatures &&
                          product?.keyFeatures.map((key, i) => (
                            <li key={i}>{key}</li>
                          ))}
                      </ul>
                      <div className="flex justify-between">
                        {" "}
                        {product?.status ? (
                          <div className="bg-[#facc15] p-1 text-white rounded-md">
                            IN STOCK
                          </div>
                        ) : (
                          <div className="bg-[#fa5615] p-1 text-white rounded-md">
                            OUT OF STOCK
                          </div>
                        )}{" "}
                        <div>
                          <Rating
                            initialRating={
                              product?.reviews.reduce(
                                (sum, value) => sum + value.rating,
                                0
                              ) / product.reviews.length
                            }
                            emptySymbol={<AiOutlineStar color="#ffa31a" />}
                            fullSymbol={<AiFillStar color="#ffa31a" />}
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" md:col-span-3 flex flex-col justify-center align-middle">
                      <p className="text-center text-3xl">৳ {product?.price}</p>
                      <button
                        onClick={() => {
                          dispatch(addToBuildPc(product));
                          setShowModal(!showModal);
                        }}
                        className="border-blue-500 border-2 py-2 px-6 rounded-lg hover:bg-blue-500 hover:border-transparent hover:text-white transition-all ease-in-out duration-300"
                      >
                        Add
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
