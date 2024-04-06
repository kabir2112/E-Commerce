import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            Personal Information: When you place an order or register on our
            website, we may collect your name, contact information, address, and
            payment details to process your orders and provide you with our
            services.
          </p>
          <p>
            Cookies: Our website uses cookies and similar tracking technologies
            to enhance your browsing experience, analyze usage patterns, and
            provide personalized content
          </p>
          <p>
            Usage Information: We collect non-personal information such as your
            IP address, browser type, device information, and pages visited.
            This data helps us understand how our website is being used and
            improve its functionality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
