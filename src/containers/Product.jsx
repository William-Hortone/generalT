import { LayoutGridView, TextEffect } from "../components";
import images from "../constants/images";

const Product = () => {
  return (
    <>
      <section className="flex flex-col w-full h-auto">
        <div className="flex w-full ">
          <div className="flex flex-col justify-center w-1/2 h-auto">
            <TextEffect
              textContent="We build bridges between China and Africa, offering a 
diverse range of products tailored to meet various needs."
            />
            <TextEffect
              textContent="Whether it’s cutting-edge electronics, luxurious beauty 
products, or innovative agricultural machinery, we 
meticulously source items to ensure quality and reliability"
            />
          </div>
          <div className="w-1/2 ">
            <LayoutGridView
              img1={images.product1}
              img2={images.pic1}
              img3={images.pic3}
              img4={images.product6}
            />
          </div>
        </div>

        <div className="flex flex-row-reverse w-full ">
          <div className="flex flex-col justify-center w-1/2 h-auto">
            <TextEffect
              textContent="General techniques and trade 
Kouta offers a range of highquality electronic products, 
including home appliances, smart 
devices, communication tools and 
office equipment."
            />
            <TextEffect
              textContent="·Our products are sourced from 
leading manufacturers in China, 
ensuring excellent performance 
and stylish design to meet the 
diverse needs of modern life."
            />
          </div>
          <div className="w-1/2 h-auto">
            <LayoutGridView
              img1={images.pic5}
              img2={images.product7}
              img3={images.product8}
              img4={images.product9}
            />
          </div>
        </div>
        <div className="flex w-full ">
          <div className="flex flex-col justify-center w-1/2 h-auto">
            <TextEffect
              textContent="General techniques and 
trade Kouta offers a range of 
high-quality beauty products, 
including skincare, makeup, 
haircare, and personal care 
categories"
            />
            <TextEffect
              textContent="Our products are sourced from 
leading manufacturers in China, 
ensuring excellent performance 
and stylish design to meet the 
diverse needs of modern life."
            />
          </div>
          <div className="w-1/2 h-auto">
            <LayoutGridView
              img1={images.product13}
              img2={images.product11}
              img3={images.product10}
              img4={images.product14}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
