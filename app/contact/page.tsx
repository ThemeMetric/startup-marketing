import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Get in touch. We will not share your information with others."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
