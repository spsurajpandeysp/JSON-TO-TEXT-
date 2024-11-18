import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar"


const PrivacyAndPolicy = () => {
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
            <div className="max-w-4xl flex flex-col gap-4">


                <h1 className="font-bold text-white text-3xl">
                    Privacy Policy
                </h1 >
                <p className="text-base text-gray-300">
                    At JSON to Text, accessible from dnsrecordschecker.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by JSON to Textand how we use it.
                </p>
                <p className="text-base text-gray-300">
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
                <p className="text-base text-gray-300">
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in JSON to Text. This policy is not applicable to any information collected offline or via channels other than this website.
                </p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Consent
                </h1>
                <p className="text-base text-gray-300">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>


                <h1 className="text-2xl font-semibold text-gray-200">
                    Information we collect
                </h1>
                <p className="text-base text-gray-300">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p className="text-base text-gray-300">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                <p className="text-base text-gray-300">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
                <h1 className="text-2xl font-semibold text-gray-200">
                    How we use your information
                </h1>
                <p className="text-base text-gray-300">We use the information we collect in various ways, including to:</p>

                <ul className="list-disc list-inside text-base text-gray-300">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new products, services, features, and functionalit</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>

                </ul>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Log Files
                </h1>




                <p className="text-base text-gray-300">JSON to Textfollows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Google DoubleClick DART Cookie
                </h1>
                <p className="text-base text-gray-300">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. Visitors can opt-out by visiting Google’s Privacy Policy at <a className="text-blue-400 style underline" href="https://policies.google.com/technologies/ads" target="_self">Google Ads Policies</a>.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Third Party Privacy Policies
                </h1>
                <p className="text-base text-gray-300">JSON to Text's Privacy Policy does not apply to other advertisers or websites. We encourage you to consult the respective privacy policies of these third-party ad servers for more information.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    CCPA Privacy Rights
                </h1>
                <p className="text-base text-gray-300">California consumers have the right to request details about their personal data, request deletion, and opt out of data sales.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    GDPR Data Protection Rights
                </h1>
                <p className="text-base text-gray-300">Users have rights to access, rectify, erase, restrict processing, object to processing, and request data portability under the GDPR.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Children’s Information
                </h1>

                <p className="text-base text-gray-300">
                    JSON to Textdoes not knowingly collect personal information from children under 13. If a child provides such information, please contact us immediately.
                </p>
            </div>
        </div>
        <footer style={styles.footer}>
            <Footer />
        </footer>
    </div>











}

export default PrivacyAndPolicy;