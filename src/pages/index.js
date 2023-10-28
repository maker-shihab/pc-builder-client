import Card from "@/components/Card/Card";
import Hero from "@/components/Home/Hero";
import SectionLayout from "@/components/Shared/SectionLayout";
import { motion, useScroll } from "framer-motion";

const HomePage = ({ data }) => {
  const { scrollYProgress } = useScroll();
  
  // console.log(data);
  return (
    <>
      <motion.div
        className="progress-bar z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="px-3 xl:px-0 max-w-screen-xl mx-auto ">
        <Hero />
        <SectionLayout>
          <h3 className="text-5xl py-8 text-center ">Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {data.map(
              (product) =>
                product && <Card product={product} key={product._id} />
            )}
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/products?limit=50`
  ).then((res) => res.json());

  return { props: { data: data.data }, revalidate: 60 };
}
