import SectionLayout from "@/components/Shared/SectionLayout";
import { BsFillCpuFill, BsMotherboard } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import React, { useState } from "react";
import Modal from "@/components/PcPage/Modal";
import PcComponentList from "@/components/PcPage/PcComponentList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeBuildPc } from "../../redux/services/buildPcSlice";

const categoryNamesArr = [
  {
    icon: <BsFillCpuFill size={40} />,
    apiValue: "processor",
    name: "CPU",
  },
  {
    icon: <BsMotherboard size={40} />,
    apiValue: "motherboard",
    name: "Motherboard",
  },
  {
    icon: <CgSmartphoneRam size={40} />,
    apiValue: "ram",
    name: "Ram",
  },
  {
    icon: <ImPower size={40} />,
    apiValue: "power-supply-unit",
    name: "Power Supply Unit",
  },
  {
    icon: <MdStorage size={40} />,
    apiValue: "storage-device",
    name: "Storage Device",
  },
  {
    icon: <FiMonitor size={40} />,
    apiValue: "monitor",
    name: "Monitor",
  },
];
const pc = ({ productData }) => {
  const products = useSelector((state) => state.buildPc.builder);
  const [showModal, setShowModal] = useState(false);
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  if (status === "unauthenticated") router.push("/");
  const handleSubmit = () => {
    const confirm = window.confirm("Your pc build complete");
    confirm && dispatch(removeBuildPc());
    router.push("/");
  };

  return (
    <>
      {status === "loading" && "Loading..."}
      {status !== "loading" && status !== "unauthenticated" && (
        <SectionLayout>
          <h3 className="text-5xl py-8 text-center ">PC Builder</h3>
          <ul className="divide-y-2 divide-gray-300">
            {categoryNamesArr &&
              categoryNamesArr?.map((cat, i) => (
                <PcComponentList
                  cat={cat}
                  key={i}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              ))}
          </ul>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            products={productData?.data}
          />
          {products.length === 6 && (
            <div>
              <button
                onClick={handleSubmit}
                className="w-full py-5 bg-[#facc15] rounded-lg"
              >
                Submit
              </button>
            </div>
          )}
        </SectionLayout>
      )}
    </>
  );
};

export default pc;
export async function getServerSideProps({ query }) {
  const { category } = query;
  // Fetch data from external API
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/products?category=${category}`
  );
  const productData = await res.json();

  // Pass data to the page via props
  return { props: { productData } };
}
