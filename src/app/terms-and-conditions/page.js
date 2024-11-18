import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar"


const Term = () => {
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
            <div className=" bg-gray-900 border border-gray-700 rounded-md shadow-md max-w-5xl flex flex-col gap-6 p-7">


                <h1 className="font-bold text-gray-5 text-4xl">
                    Terms and Conditions
                </h1 >
                <p className="text-lg text-gray-300">
                    Welcome to <strong className="text-cyan-400">JSON to Text</strong>.
                </p>
                <p className="text-lg text-gray-300">
                    These terms and conditions outline the rules and regulations for the use of the Hex to JSON to Text Website, located at <a href="https://jsontotext.com/" className="text-cyan-400 hover:underline">https://jsontotext.com/</a>.
                </p>
                <p className="text-lg text-gray-300">
                    By accessing this website, we assume you accept these terms and conditions. Do not continue to use Hex to JSON to Text if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <h1 className="text-2xl font-bold text-gray-200">
                    Terminology
                </h1>
                <p className="text-lg text-gray-300">The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice, and all Agreements: “Client”, “You”, and “Your” refers to you, the person logging on this website and compliant with the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our”, and “Us” refers to our Company. “Party”, “Parties”, or “Us” refers to both the Client and ourselves.</p>


                <h1 className="text-xl font-semibold text-gray-200">
                    Cookies
                </h1>
                <p className="text-lg text-gray-300">We employ the use of cookies. By accessing Hex to JSON to Text , you agreed to use cookies in agreement with the Hex to JSON to Text Privacy Policy.</p>

                <h1 className="text-xl font-semibold text-gray-200">
                    License
                </h1>
                <p className="text-lg text-gray-300">Unless otherwise stated, Hex to JSON to Text and/or its licensors own the intellectual property rights for all material on Hex to JSON to Text . All intellectual property rights are reserved. You may access this from Hex to JSON to Text for your own personal use subject to restrictions set in these terms and conditions.</p>

                <h1 className="text-xl font-semibold text-gray-200">
                    You must not:
                </h1>

                <ul className="list-disc list-inside text-base text-gray-300">
                    <li>Republish material from Json to Text</li>
                    <li>Sell, rent, or sub-license material from Hex to JSON to Text</li>
                    <li>Reproduce, duplicate or copy material from Hex to JSON to Text</li>
                    <li>Redistribute content from Hex to JSON to Text</li>
                </ul>

                <h1 className="text-xl font-semibold text-gray-200">
                    iFrames
                </h1>
                <p className="text-lg text-gray-300">The following organizations may link to our Website without prior written approval: Government agencies, search engines, news organizations, and online directory distributors.</p>

                <h1 className="text-xl font-semibold text-gray-200">
                    iFrames
                </h1>
                <p className="text-lg text-gray-300">Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>

                <h1 className="text-xl font-semibold text-gray-200">
                    Content Liability
                </h1>
                <p className="text-lg text-gray-300">We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against all claims that arise from your website.</p>

                <h1 className="text-xl font-semibold text-gray-200">
                    Disclaimer
                </h1>
                <p className="text-lg text-gray-300">To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.</p>



                <p className="text-lg text-gray-400">
                    If you have any questions or concerns about these Terms and Conditions, please contact us at contact@codeapto.com
                </p>
            </div>
        </div>
        <footer style={styles.footer}>
            <Footer />
        </footer>
    </div>













}

export default Term;