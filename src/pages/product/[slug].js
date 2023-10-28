import SectionLayout from "@/components/Shared/SectionLayout";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { usePostCommentMutation } from "../../../redux/services/productApi";

const SingleProductPage = ({ data }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();
  const [postComment] = usePostCommentMutation();
  const totalRating = data?.reviews.reduce(
    (sum, value) => sum + value.rating,
    0
  );
  // console.log(session?.user);
  const onSubmit = (formData) => {
    formData = { ...formData, ...session?.user, id: data?._id };
    // console.log(formData);
    postComment(formData);
    reset();
  };
  const commentExist = data?.reviews.some(
    (review) => review.email === session?.user?.email
  );
  // console.log(data, commentExist);
  return (
    <>
      <Head>
        <title>{data?.productName}</title>
      </Head>
      <SectionLayout>
        <div>
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                width={400}
                height={400}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={data?.image}
                alt={data?.productName}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {data?.status ? "ON SALE" : "STOCK OUT"}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {data?.productName}
                </h1>
                <div className="flex mb-4 items-center">
                  <span className="flex items-center">
                    <Rating
                      initialRating={totalRating / data?.reviews.length}
                      emptySymbol={<AiOutlineStar color="#ffa31a" />}
                      fullSymbol={<AiFillStar color="#ffa31a" />}
                      readonly
                    />
                  </span>
                  <span className="flex items-center pl-5 -mt-2">
                    Reviews: {data?.reviews.length}
                  </span>
                </div>

                <ul className="list-disc ml-5 ">
                  {data?.keyFeatures.map((feature, key) => (
                    <li key={key}>{feature}</li>
                  ))}
                </ul>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ৳ {data?.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-3"> Description </h3>
              <p className="leading-relaxed">{data?.description}</p>
            </div>
            <div className="">
              <h3 className="text-2xl font-bold mb-3"> Reviews </h3>
              {!commentExist && session?.user?.email && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="review"
                    >
                      Review
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="review"
                      type="text"
                      rows={"10"}
                      columns="50"
                      placeholder="Review"
                      {...register("comment", { required: true })}
                    ></textarea>
                    {errors.comment && (
                      <div className="text-red-500">Comment is required</div>
                    )}
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      for="rating"
                    >
                      Rating
                    </label>
                    {/* <Rating
      // onChange={(rate) => alert(rate)}
      {...register("rating", { required: true })}
    /> */}
                    <Controller
                      name="rating"
                      control={control}
                      defaultValue={0} // Set the default value
                      render={({ field }) => (
                        <Rating
                          className="text-2xl"
                          {...field}
                          emptySymbol={<AiOutlineStar color="#ffa31a" />}
                          fullSymbol={<AiFillStar color="#ffa31a" />}
                        />
                      )}
                    />
                    {errors.rating && (
                      <div className="text-red-500">Rating is required</div>
                    )}
                  </div>
                  {/* errors will return when field validation fails  */}

                  <button
                    type="submit"
                    className="rounded-3xl py-2 px-12 border-2 border-[#ffa31a] 
    hover:bg-[#ffa31a] hover:border-transparent transition-all ease-in duration-200
    hover:text-white
    "
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
            <div className="">
              {data?.reviews.map((review, i) => (
                <div key={i} className="flex bg-slate-300 p-4 rounded-lg mt-5">
                  <Image
                    src={review?.image}
                    width={50}
                    className="rounded-full mr-5 w-14 h-14"
                    height={50}
                  />
                  <div className="flex flex-col">
                    <div>
                      <div>{review?.name}</div>
                      <Rating
                        initialRating={review.rating}
                        emptySymbol={<AiOutlineStar color="#ffa31a" />}
                        fullSymbol={<AiFillStar color="#ffa31a" />}
                        readonly
                      />
                    </div>
                    <div>{review?.comment}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};
export default SingleProductPage;
export const getStaticPaths = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/products`)
    .then((res) => res.json())
    .then((result) => result.data);
  const paths = data.map((post) => ({
    params: { slug: post.id },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/products/${params.slug}`
  );
  const repo = await res.json();
  return { props: { data: repo.data }, revalidate: 10 };
};
