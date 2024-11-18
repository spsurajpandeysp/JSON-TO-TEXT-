import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar"



const DisclosurePolicy = () => {
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
        <div className="bg-black white text-white w-full min-h-screen flex justify-center p-7">
            <div className="max-w-4xl flex flex-col gap-4">


                <h1 className="font-bold text-white text-3xl">
                    Disclosure Policy
                </h1 >
                <p className="text-base text-gray-300">
                    This Disclosure Policy is valid as of May 22, 2026, and applies to <a className="underline text-blue-400" href="https://jsontotext.com/" target="_self">https://jsontotext.com/</a>.
                </p>


                <h1 className="text-2xl font-semibold text-gray-200">
                    Advertising Partnerships
                </h1>
                <p className="text-base text-gray-300">The Website may engage in affiliate marketing, advertising, or sponsorships with various companies and brands. This means that we may earn a commission or fee when you click on or make a purchase through certain links on the Website.

                </p>
                <p className="text-base text-gray-300">
                    We may also display advertisements provided by advertising networks, such as Google AdSense, which may use cookies to collect information about your visits to this and other websites in order to provide targeted advertisements relevant to your interests.
                </p>

                <p className="text-base text-gray-300">
                    These advertising partners and networks have their own privacy policies, which you should review if you have any concerns about their practices. We are not responsible for the privacy practices or the content of these third-party websites.
                </p>



                <h1 className="text-2xl font-semibold text-gray-200">
                    Editorial Independence
                </h1>
                <p className="text-base text-gray-300">While we may receive compensation or other benefits from our advertising partners, our editorial content remains independent and is not influenced by these partnerships. We strive to provide honest and unbiased information to our readers.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Affiliate Links
                </h1>
                <p className="text-base text-gray-300">Some of the links on the Website may be affiliate links, which means that we may earn a commission if you click on the link and make a purchase. However, this does not affect the price you pay or the products or services you receive.</p>
                <p className="text-base text-gray-300">We only recommend products or services that we believe will be of value to our readers. Any compensation we receive is used to support the operation and maintenance of the Website.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Updates to this Policy
                </h1>
                <p className="text-base text-gray-300">We reserve the right to update or change this Disclosure Policy at any time. Any changes will be posted on this page with a revised effective date. Your continued use of the Website after any such changes constitutes your acceptance of the new policy.</p>
                <p className="text-base text-gray-300">If you have any questions or concerns about this Disclosure Policy, please contact us at <a className="underline text-blue-400" href="mailto:contact@codeapto.com" target="_self">contact@codeapto.com</a>.</p>


            </div>
        </div>
        <footer style={styles.footer}>
            <Footer />
        </footer>
    </div>













}

export default DisclosurePolicy;