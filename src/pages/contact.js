import Layout from "@/components/Layout";
import ContactHead from "../components/ContactHead";
import Form from "@/components/Form";
import TransitionEffect from "@/components/TransitionEffect";

const Contact = () => {
  return (
    <>
      <TransitionEffect />
      <Layout className="pt-0 md:pt-16 sm:pt-8  text-dark dark:text-light">
        <ContactHead />
        <Form />
      </Layout>
    </>
  );
};

export default Contact;
