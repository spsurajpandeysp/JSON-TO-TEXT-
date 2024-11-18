import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar"



const Disclaimer = () => {
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
                    Disclaimer
                </h1 >
                <p className="text-base text-gray-300">
                    If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <a className="underline text-blue-400" href="mailto:contact@codeapto.com" target="_self">contact@codeapto.com</a>.
                </p>


                <h1 className="text-2xl font-semibold text-gray-200">
                    Disclaimers
                </h1>
                <p className="text-base text-gray-300">All the information on this website – <a className="underline text-blue-400" href="https://jsontotext.com/" target="_self">https://jsontotext.com/</a>  – is published in good faith and for general information purpose only. JOSN to Textl does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (JOSN to Textl ), is strictly at your own risk. JOSN to Textl will not be liable for any losses and/or damages in connection with the use of our website.

                </p>
                <p className="text-base text-gray-300">
                    From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
                </p>

                <p className="text-base text-gray-300">
                    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
                </p>



                <h1 className="text-2xl font-semibold text-gray-200">
                    Consent
                </h1>
                <p className="text-base text-gray-300">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                <h1 className="text-2xl font-semibold text-gray-200">
                    Update
                </h1>
                <p className="text-base text-gray-300">Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>


            </div>
        </div>
        <footer style={styles.footer}>
            <Footer />
        </footer>
    </div>

















}

export default Disclaimer;