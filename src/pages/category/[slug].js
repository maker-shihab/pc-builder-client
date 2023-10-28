import Card from "@/components/Card/Card";
import SectionLayout from "@/components/Shared/SectionLayout";
import Link from "next/link";
import React from "react";

const SingleCategoryPage = ({ data }) => {
  // console.log(data);
  return (
    <SectionLayout>
      <h3 className="text-5xl py-8 text-center ">Category Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {data &&
          data.map(
            (product) => product && <Card product={product} key={product._id} />
          )}
      </div>
      {data?.length < 1 && (
        <div className="text-3xl text-red-400 text-center">
          No Products here
          <div className="mt-8">
            <Link
              href={"/"}
              className="px-3 py-1 bg-[#ffa31a] text-white rounded-lg"
            >
              Go Home
            </Link>
          </div>
        </div>
      )}
    </SectionLayout>
  );
};

export default SingleCategoryPage;

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
    `${process.env.NEXT_PUBLIC_SERVER}/products?category=${params.slug}`
  );
  const repo = await res.json();
  return { props: { data: repo.data }, revalidate: 60 };
};
