import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
const Card = ({ product }) => {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        bounce: 0.4,

        duration: 0.8,
      },
    },
  };
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const totalRating = product?.reviews.reduce(
    (sum, value) => sum + value.rating,
    0
  );
  return (
    <>
      <motion.div
        initial="offscreen"
        variants={container}
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <div className="splash" /> */}
        <motion.div
          variants={cardVariants}
          className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
        >
          <Link
            className="relative mx-auto mt-3 flex h-60 overflow-hidden rounded-xl"
            href={`/product/${product?._id}`}
          >
            <Image
              width={200}
              height={200}
              className="object-cover"
              src={product?.image}
              alt={`PCInnovateHub  | ${product?.productName}`}
            />
          </Link>
          <div className="mt-4 px-5 pb-5">
            <Link href={`/product/${product?._id}`}>
              <h5 className="text-xl tracking-tight text-slate-900">
                {product?.productName?.length > 23
                  ? `${product?.productName.slice(0, 23)}...`
                  : product?.productName}
              </h5>
            </Link>
            <p>
              <small>
                <strong>Category:</strong> {product?.category}
              </small>
            </p>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  $ {product?.price}
                </span>
              </p>
              <div className="flex items-center">
                <span className=" ml-3 rounded px-2.5 py-0.5 text-xs font-semibold">
                  <Rating
                    initialRating={totalRating / product.reviews.length}
                    emptySymbol={<AiOutlineStar color="#ffa31a" />}
                    fullSymbol={<AiFillStar color="#ffa31a" />}
                    readonly
                  />
                </span>
              </div>
            </div>
            <div className="my-4 text-right">
              {product?.status ? (
                <span className="rounded bg-green-200 px-2.5 py-0.5 text-sm font-semibold">
                  In stock
                </span>
              ) : (
                <span className="rounded bg-red-200 px-2.5 py-0.5 text-sm font-semibold">
                  Out of stock
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
