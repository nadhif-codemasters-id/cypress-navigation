import ContactForm from "../components/ContactForm";

function AboutPage() {
  return (
    <>
      <header className="center">
        <h1>About Us</h1>
        <p>
          We are a small team of developers who are passionate about testing. We
          have created this demo to help you learn how to use Cypress.
        </p>
        <p>
          Also follow us on our <a href="https://codemasters.id/">Website</a>.
        </p>
      </header>
      <ContactForm />
    </>
  );
}

export default AboutPage;
