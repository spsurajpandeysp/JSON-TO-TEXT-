import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar"

const Contact = () => {

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

    return <div style={styles.container}>
        <header>
            <Navbar />
        </header>
        <div className="bg-black white text-white w-full min-h-screen flex justify-center items-center p-7">
            <div className=" bg-gray-900 border border-gray-700 rounded-md shadow-md max-w-3xl flex flex-col gap-6 p-7">


                <h1 className="font-bold text-gray-5 text-3xl">
                    Contact Us
                </h1 >
                <p className="text-lg text-gray-300">
                    We at Hex to <strong className="text-cyan-400">JSON to Text</strong> are here to help you unlock the potential of technology for your business. Whether you have a question, need support with an existing project, or are interested in exploring a sponsorship opportunity, we encourage you to reach out!
                </p>

                <h1 className="text-2xl font-bold text-gray-200">
                    How to Connect with Us
                </h1>
                <p className="text-lg text-gray-300">Email: Our dedicated support team is readily available to answer your questions, address any concerns, or discuss your initial project inquiries. Feel free to reach out to us at: <strong className="text-cyan-400">contact@codeapto.com</strong></p>


                <h1 className="text-xl font-semibold text-gray-200">
                    For Sponsorship Inquiries
                </h1>
                <p className="text-lg text-gray-300">If you’re interested in discussing potential sponsorship opportunities with Decimal to Octal Converter, please explicitly mention “Sponsorship Inquiry” in your email subject line. We actively partner with brands and organizations that align with our values and can provide value to our audience.</p>

                <p className="text-lg text-gray-400">
                    We look forward to hearing from you!
                </p>
            </div>
        </div>
        <footer style={styles.footer}>
            <Footer />
        </footer>
    </div>
}

export default Contact
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


