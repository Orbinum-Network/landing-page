import { Divider, SectionTitle } from "@/components/common";

export const PrivacyPolicyPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 text-secondary-200 pt-32">
            <SectionTitle title="Privacy Policy" titleTwo="" />
            <Divider />
            <div className="flex justify-center my-12">
                <p className="text-sm text-secondary-400 px-3 py-1 rounded-3xl text-xs border border-secondary-900 ring-2 ring-secondary-800 bg-secondary-900">Last Updated: 17-02-2025</p>
            </div>

            {/* Índice */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">Table of Contents</h2>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><a href="#introduction" className="hover:underline">1. Introduction</a></li>
                    <li><a href="#data-collection" className="hover:underline">2. Data Collection</a></li>
                    <li><a href="#data-usage" className="hover:underline">3. Data Usage</a></li>
                    <li><a href="#data-storage-and-security" className="hover:underline">4. Data Storage and Security</a></li>
                    <li><a href="#data-sharing" className="hover:underline">5. Data Sharing</a></li>
                    <li><a href="#user-rights" className="hover:underline">6. User Rights</a></li>
                    <li><a href="#cookies-and-tracking" className="hover:underline">7. Cookies and Tracking</a></li>
                    <li><a href="#changes-to-privacy-policy" className="hover:underline">8. Changes to Privacy Policy</a></li>
                    <li><a href="#contact-information" className="hover:underline">9. Contact Information</a></li>
                </ul>
            </section>

            {/* Sección 1: Introduction */}
            <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">1. Introduction</h2>
                <p className="mb-2">
                    At Orbinum Network ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, store, and protect your information when you interact with our decentralized AI ecosystem built on blockchain technology.
                </p>
                <p className="mt-2">
                    By using the Orbinum Network ("Platform"), you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not access or use the Platform.
                </p>
            </section>

            {/* Sección 2: Data Collection */}
            <section id="data-collection" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">2. Data Collection</h2>
                <p className="mb-2">
                    We collect the following types of data when you interact with the Platform:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><strong>Personal Data:</strong> Information that can be used to identify you, such as your name, email address, and wallet address.</li>
                    <li><strong>Technical Data:</strong> Information about your device, IP address, browser type, and operating system.</li>
                    <li><strong>Usage Data:</strong> Data about how you interact with the Platform, including transaction history, model usage, and participation in federated learning.</li>
                    <li><strong>Contributions:</strong> If you participate as a Validator, Nominator, or Contributor, we may collect data related to your computational resources, staking activities, and model training contributions.</li>
                </ul>
                <p className="mt-2">
                    We collect this data through various means, including direct interactions (e.g., when you create an account), automated technologies (e.g., cookies and tracking tools), and third-party integrations.
                </p>
            </section>

            {/* Sección 3: Data Usage */}
            <section id="data-usage" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">3. Data Usage</h2>
                <p className="mb-2">
                    We use the data we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><strong>Platform Operation:</strong> To provide, maintain, and improve the functionality of the Platform, including AI model training, validation, and deployment.</li>
                    <li><strong>User Support:</strong> To respond to your inquiries, provide technical support, and resolve issues.</li>
                    <li><strong>Security:</strong> To monitor and protect the Platform against unauthorized access, fraud, and other malicious activities.</li>
                    <li><strong>Governance:</strong> To facilitate community-driven decision-making through the Decentralized Autonomous Organization (DAO).</li>
                    <li><strong>Analytics:</strong> To analyze usage patterns and improve the user experience.</li>
                    <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service.</li>
                </ul>
                <p className="mt-2">
                    We do not use your data for purposes other than those outlined in this Privacy Policy without your explicit consent.
                </p>
            </section>

            {/* Sección 4: Data Storage and Security */}
            <section id="data-storage-and-security" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">4. Data Storage and Security</h2>
                <p className="mb-2">
                    Your data is stored and processed in a decentralized manner across multiple nodes within the Orbinum Network. We employ advanced cryptographic techniques, such as zero-knowledge proofs and federated learning, to ensure that your data remains private and secure.
                </p>
                <p className="mb-2">
                    Key security measures include:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><strong>Encryption:</strong> All data is encrypted both in transit and at rest to prevent unauthorized access.</li>
                    <li><strong>Distributed Storage:</strong> Data is sharded and distributed across multiple nodes to ensure redundancy and fault tolerance.</li>
                    <li><strong>Access Controls:</strong> Strict access controls are implemented to limit who can view or process your data.</li>
                    <li><strong>Regular Audits:</strong> We conduct regular security audits to identify and address potential vulnerabilities.</li>
                </ul>
                <p className="mt-2">
                    Despite these measures, no system is completely immune to risks. We cannot guarantee absolute security, but we are committed to maintaining the highest standards of data protection.
                </p>
            </section>

            {/* Sección 5: Data Sharing */}
            <section id="data-sharing" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">5. Data Sharing</h2>
                <p className="mb-2">
                    We do not sell or rent your personal data to third parties. However, we may share your data in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><strong>With Validators and Nominators:</strong> To facilitate network operations, your data may be shared with Validators and Nominators who participate in the consensus mechanism.</li>
                    <li><strong>With Service Providers:</strong> We may engage third-party service providers to assist with Platform operations, such as hosting, analytics, and customer support. These providers are contractually obligated to protect your data.</li>
                    <li><strong>For Legal Compliance:</strong> We may disclose your data if required by law or to protect our rights, property, or safety, or that of others.</li>
                    <li><strong>With Your Consent:</strong> We may share your data with third parties if you provide explicit consent.</li>
                </ul>
                <p className="mt-2">
                    Any data shared with third parties is done so in compliance with applicable data protection laws and regulations.
                </p>
            </section>

            {/* Sección 6: User Rights */}
            <section id="user-rights" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">6. User Rights</h2>
                <p className="mb-2">
                    You have the following rights regarding your data:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
                    <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> You can request that we delete your data, subject to legal and contractual obligations.</li>
                    <li><strong>Restriction:</strong> You can request that we restrict the processing of your data under certain conditions.</li>
                    <li><strong>Portability:</strong> You can request a copy of your data in a structured, machine-readable format.</li>
                    <li><strong>Objection:</strong> You can object to the processing of your data for specific purposes, such as marketing or analytics.</li>
                </ul>
                <p className="mt-2">
                    To exercise these rights, please contact us at <i>privacy@orbinum.net</i>. We will respond to your request within 30 days.
                </p>
            </section>

            {/* Sección 7: Cookies and Tracking */}
            <section id="cookies-and-tracking" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">7. Cookies and Tracking</h2>
                <p className="mb-2">
                    We use cookies and similar tracking technologies to enhance your experience on the Platform. These technologies help us:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li>Analyze usage patterns and improve Platform functionality.</li>
                    <li>Provide personalized content and recommendations.</li>
                    <li>Monitor and secure the Platform against unauthorized access.</li>
                </ul>
                <p className="mt-2">
                    You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your ability to use certain features of the Platform.
                </p>
            </section>

            {/* Sección 8: Changes to Privacy Policy */}
            <section id="changes-to-privacy-policy" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">8. Changes to Privacy Policy</h2>
                <p className="mb-2">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on the Platform, and your continued use of the Platform after such changes constitutes your acceptance of the updated Privacy Policy.
                </p>
                <p className="mt-2">
                    We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
                </p>
            </section>

            {/* Sección 9: Contact Information */}
            <section id="contact-information" className="mb-8">
                <h2 className="text-2xl font-semibold text-secondary-100 mb-4">9. Contact Information</h2>
                <p className="mb-2">
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <ul className="list-disc list-inside text-secondary-300">
                    <li>Email: <i>privacy@orbinum.net</i></li>
                </ul>
                <p className="mt-2">
                    We will make every effort to respond to your inquiries in a timely manner.
                </p>
            </section>
        </div>
    );
};