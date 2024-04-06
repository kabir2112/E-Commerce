import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Who We Are A leading online destination for all your shopping needs.
            A team of passionate and experienced professionals in the e commerce
            industry. Dedicated to providing the best shopping experience to our
            customers. Our Mission To offer a wide range of high quality
            products at affordable prices. To simplify the online shopping
            process and make it enjoyable for everyone. To exceed customer
            expectations with top notch service and a diverse product selection.
            What We Offer A vast collection of products across various
            categories, from fashion to electronics and more. Curated selections
            of trending and popular items. Regular updates with new arrivals and
            exclusive deals. Why Choose Us Secure and user friendly platform for
            hassle free shopping. Fast and reliable shipping to your doorstep.
            Excellent customer support to address your needs and concerns.
            Community and Values Committed to fostering a sense of community
            among our customers. Strong values of integrity, transparency, and
            customer satisfaction. Environmentally conscious: We strive to
            reduce our ecological footprint. Stay Connected Follow us on social
            media for updates, promotions, and more. Subscribe to our newsletter
            for exclusive offers and the latest news. We value your feedback let
            us know how we can improve your shopping experience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
