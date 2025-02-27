import JSONToTextConverter from "../components/jsonToText/jsonToText";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import FAQSection from "../components/faqSection/faqSection";
import Contact from "@/app/contact/page";
import Term from "@/app/terms-and-conditions/page";
import PrivacyAndPolicy from "@/app/privacy-policy/page";
import Disclaimer from "@/app/disclaimer/page";
import DisclosurePolicy from "@/app/disclosure-policy/page";



export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}> 
        <JSONToTextConverter />
        <br></br>
        <FAQSection /> 
      </main>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
  footer: {
    marginTop: 'auto',
  },
};