import { AnimatedSection, Divider, SectionTitle } from "@/components/common";

export const TermsPage = () => {
    return (
        <AnimatedSection className="bg-secondary-900">
            <div className="max-w-6xl mx-auto px-4 py-8 text-secondary-200 pt-32">
                <SectionTitle styleColor="black" sectionType="Documentation" title="Terms of Service" titleTwo="" />
                <Divider />
                <div className="flex justify-center my-12">
                    <p className="text-sm text-secondary-400 px-3 py-1 rounded-3xl text-xs border border-secondary-900 ring-2 ring-secondary-800 bg-secondary-900">Last Updated: 17-02-2025</p>
                </div>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">Table of Contents</h2>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li><a href="#acceptance-of-terms" className="hover:underline">1. Acceptance of Terms</a></li>
                        <li><a href="#description-of-services" className="hover:underline">2. Description of Services</a></li>
                        <li><a href="#user-roles-and-responsibilities" className="hover:underline">3. User Roles and Responsibilities</a></li>
                        <li><a href="#intellectual-property" className="hover:underline">4. Intellectual Property</a></li>
                        <li><a href="#privacy-and-data-security" className="hover:underline">5. Privacy and Data Security</a></li>
                        <li><a href="#economic-model-and-token-usage" className="hover:underline">6. Economic Model and Token Usage</a></li>
                        <li><a href="#prohibited-activities" className="hover:underline">7. Prohibited Activities</a></li>
                        <li><a href="#limitation-of-liability" className="hover:underline">8. Limitation of Liability</a></li>
                        <li><a href="#dispute-resolution" className="hover:underline">9. Dispute Resolution</a></li>
                        <li><a href="#modifications-to-terms" className="hover:underline">10. Modifications to Terms</a></li>
                        <li><a href="#termination" className="hover:underline">11. Termination</a></li>
                        <li><a href="#contact-information" className="hover:underline">12. Contact Information</a></li>
                    </ul>
                </section>

                <section id="acceptance-of-terms" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">1. Acceptance of Terms</h2>
                    <p className="mb-2">
                        By accessing or using the Orbinum Network ("Platform"), you confirm that:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>You are at least 18 years old or the legal age of majority in your jurisdiction.</li>
                        <li>You have the legal capacity to enter into a binding agreement.</li>
                        <li>You agree to comply with all applicable laws and regulations while using the Platform.</li>
                        <li>You understand and accept the risks associated with decentralized technologies, blockchain networks, and artificial intelligence systems, including but not limited to data privacy, security, and financial risks.</li>
                    </ul>
                    <p className="mt-2">
                        If you do not agree to these Terms, you must not access or use the Platform.
                    </p>
                </section>

                <section id="description-of-services" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">2. Description of Services</h2>
                    <p className="mb-2">
                        Orbinum Network is a decentralized AI ecosystem built on blockchain technology. The Platform provides tools and infrastructure for:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>Distributed training, deployment, and utilization of AI models, enabling collaborative development and innovation.</li>
                        <li>Secure and transparent storage of AI models and datasets through a Distributed Model Sharding Framework (DMSF), ensuring data integrity and fault tolerance.</li>
                        <li>Participation in federated learning, enabling collaborative AI model training without compromising data privacy, as data remains on local nodes.</li>
                        <li>Governance through a Decentralized Autonomous Organization (DAO), allowing community-driven decision-making on network upgrades, tokenomics, and protocol changes.</li>
                        <li>A hybrid economic model that includes both free access to AI models for general use and a pay-per-compute system for resource-intensive applications, ensuring equitable access and scalability.</li>
                    </ul>
                    <p className="mt-2">
                        The Platform is designed to democratize access to AI technologies, fostering a collaborative environment where individuals and organizations can contribute to and benefit from the advancement of AI.
                    </p>
                </section>

                <section id="user-roles-and-responsibilities" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">3. User Roles and Responsibilities</h2>

                    <div className="mb-4">
                        <h3 className="text-xl font-medium text-secondary-100 mb-2">Validators</h3>
                        <p className="mb-2">
                            Validators play a critical role in securing the network and validating transactions. As a Validator, you are responsible for:
                        </p>
                        <ul className="list-disc list-inside text-secondary-300">
                            <li>Maintaining the required computational resources and staking collateral to ensure network security.</li>
                            <li>Ensuring the integrity of AI models and datasets by participating in model validation and training processes.</li>
                            <li>Participating in consensus mechanisms, including Nominated Proof of Stake (NPoS) and Proof of Contribution (PoC), to secure the network and validate transactions.</li>
                            <li>Adhering to governance decisions and contributing to the evolution of the network through active participation in the DAO.</li>
                        </ul>
                        <p className="mt-2">
                            Validators who fail to meet consensus requirements or engage in malicious behavior may face penalties, including slashing of staked tokens or temporary suspension from the network.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-medium text-secondary-100 mb-2">Nominators</h3>
                        <p className="mb-2">
                            Nominators support the network by delegating their stake to Validators. As a Nominator, you are responsible for:
                        </p>
                        <ul className="list-disc list-inside text-secondary-300">
                            <li>Selecting trustworthy Validators to delegate your stake, ensuring the security and stability of the network.</li>
                            <li>Monitoring the performance and behavior of Validators to mitigate risks associated with poor performance or malicious actions.</li>
                            <li>Participating in governance by voting on proposals and submitting suggestions for improvements, contributing to the network's evolution.</li>
                        </ul>
                        <p className="mt-2">
                            Nominators share responsibility for the actions of the Validators they support, and poor choices may result in reduced rewards or penalties.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium text-secondary-100 mb-2">General Users</h3>
                        <p className="mb-2">
                            General users can interact with the Platform to access AI models, contribute computational resources, or participate in federated learning. As a user, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-secondary-300">
                            <li>Use the Platform only for lawful purposes, in compliance with all applicable laws and regulations.</li>
                            <li>Respect the privacy and security of others' data, ensuring that you do not engage in unauthorized access or misuse of information.</li>
                            <li>Comply with all applicable laws and regulations, including those related to data protection, intellectual property, and financial transactions.</li>
                        </ul>
                        <p className="mt-2">
                            General users are encouraged to contribute to the network by providing computational resources, data, or feedback to improve AI models.
                        </p>
                    </div>
                </section>

                <section id="intellectual-property" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">4. Intellectual Property</h2>
                    <p className="mb-2">
                        All content, trademarks, logos, and intellectual property displayed on the Platform are the property of Orbinum or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal or organizational purposes. Any unauthorized use, reproduction, or distribution of the Platform's content or intellectual property is strictly prohibited.
                    </p>
                    <p className="mt-2">
                        If you believe that your intellectual property rights have been infringed upon, please contact us at <i>contact@orbinum.net</i>.
                    </p>
                </section>

                <section id="privacy-and-data-security" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">5. Privacy and Data Security</h2>
                    <p className="mb-2">
                        Orbinum is committed to protecting your privacy and ensuring the security of your data. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using the Platform, you consent to the collection and use of your data in accordance with our Privacy Policy.
                    </p>
                    <p className="mt-2">
                        The Platform employs advanced cryptographic techniques, such as zero-knowledge proofs and federated learning, to ensure that your data remains private and secure. However, you acknowledge that no system is completely immune to risks, and Orbinum cannot guarantee absolute security.
                    </p>
                </section>

                <section id="economic-model-and-token-usage" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">6. Economic Model and Token Usage</h2>
                    <p className="mb-2">
                        The Orbinum Network operates on a dual economic model designed to incentivize participation and ensure long-term sustainability:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li><strong>Deflationary Phase:</strong> Tokens are distributed as rewards to Validators and Nominators during the initial 10 years of operation. This phase is designed to incentivize early participation and secure the network.</li>
                        <li><strong>Inflationary Phase:</strong> After the deflationary phase, the network transitions to an inflationary model, with an annual issuance rate determined by the community through governance. This phase ensures ongoing incentives for network security and AI model training.</li>
                    </ul>
                    <p className="mt-2">
                        The economic model also includes mechanisms such as token burning and periodic treasury burns to manage inflation and maintain the value of the network's tokens.
                    </p>
                </section>

                <section id="prohibited-activities" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">7. Prohibited Activities</h2>
                    <p className="mb-2">
                        You agree not to engage in any of the following activities while using the Platform:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>Submitting falsified datasets or manipulated AI models, which may result in penalties or suspension from the network.</li>
                        <li>Attempting to disrupt or compromise the security of the network, including but not limited to hacking, phishing, or denial-of-service attacks.</li>
                        <li>Engaging in malicious behavior, such as double signing or conspiring to create invalid blocks, which may result in the loss of staked tokens or permanent expulsion from the network.</li>
                        <li>Using the Platform for illegal purposes, including but not limited to money laundering, fraud, or unauthorized data access.</li>
                    </ul>
                    <p className="mt-2">
                        Orbinum reserves the right to investigate and take appropriate action against any user who violates these prohibitions, including suspension or termination of access to the Platform.
                    </p>
                </section>

                <section id="limitation-of-liability" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">8. Limitation of Liability</h2>
                    <p className="mb-2">
                        To the fullest extent permitted by law, Orbinum and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Platform. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if Orbinum has been advised of the possibility of such damages.
                    </p>
                    <p className="mt-2">
                        Orbinum's total liability to you for any claims arising out of or related to these Terms or your use of the Platform shall not exceed the amount you have paid to Orbinum in the past 12 months, if any.
                    </p>
                </section>

                <section id="dispute-resolution" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">9. Dispute Resolution</h2>
                    <p className="mb-2">
                        In the event of any dispute, claim, or controversy arising out of or relating to these Terms of Service, your use of the Orbinum Network, or the services provided by the Platform ("Dispute"), you and Orbinum agree to resolve such Dispute through binding arbitration administered by the International Chamber of Commerce (ICC). The arbitration shall be conducted in accordance with the ICC Arbitration Rules, which are hereby incorporated by reference.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.1. Arbitration Process</h3>
                    <p className="mb-2">
                        The arbitration shall take place in Zurich, Switzerland, unless otherwise agreed upon by both parties. The language of the arbitration shall be English. The arbitrator(s) shall have expertise in blockchain technology, artificial intelligence, and decentralized systems to ensure a fair and informed resolution.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.2. Initiation of Arbitration</h3>
                    <p className="mb-2">
                        To initiate arbitration, the party seeking resolution must submit a written notice of arbitration to the other party and to the ICC. The notice must include:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>A detailed description of the Dispute, including the nature of the claim and the relief sought.</li>
                        <li>Relevant supporting documentation and evidence.</li>
                        <li>The proposed location and language for the arbitration, if different from Zurich and English.</li>
                    </ul>
                    <p className="mt-2">
                        Upon receipt of the notice, the other party shall have 30 days to respond and provide any counterclaims or additional evidence.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.3. Arbitration Fees</h3>
                    <p className="mb-2">
                        Each party shall bear its own costs and expenses related to the arbitration, including legal fees and witness expenses. However, the arbitrator(s) may award costs and fees to the prevailing party if deemed appropriate under the circumstances. The fees of the ICC and the arbitrator(s) shall be shared equally by both parties, unless the arbitrator(s) decide otherwise.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.4. Arbitration Award</h3>
                    <p className="mb-2">
                        The arbitrator(s) shall issue a written decision, including the findings of fact and conclusions of law, within 60 days after the conclusion of the arbitration hearings. The award shall be final and binding on both parties, and judgment upon the award may be entered in any court of competent jurisdiction.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.5. Waiver of Class Actions and Jury Trials</h3>
                    <p className="mb-2">
                        By agreeing to these Terms, you and Orbinum waive any right to pursue Disputes on a class-wide basis or to participate in a class action, collective action, or representative action. All claims and disputes must be brought in an individual capacity, and not as a plaintiff or class member in any purported class, collective, or representative proceeding.
                    </p>
                    <p className="mb-2">
                        Additionally, both parties waive any right to a jury trial, agreeing instead to resolve Disputes through arbitration as outlined above.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.6. Exceptions to Arbitration</h3>
                    <p className="mb-2">
                        Notwithstanding the above, either party may bring an action in a court of competent jurisdiction to:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>Seek injunctive or other equitable relief to prevent or stop unauthorized use or abuse of the Platform, infringement of intellectual property rights, or other violations of these Terms.</li>
                        <li>Enforce or challenge the validity of the arbitration agreement or the arbitrator's jurisdiction.</li>
                    </ul>
                    <p className="mt-2">
                        Such actions may be brought in the courts of Zurich, Switzerland, and both parties consent to the exclusive jurisdiction of these courts for such purposes.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.7. Governing Law</h3>
                    <p className="mb-2">
                        These Terms and any Disputes arising out of or related to them shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law principles.
                    </p>

                    <h3 className="text-xl font-medium text-secondary-100 mb-2 mt-4">9.8. Informal Dispute Resolution</h3>
                    <p className="mb-2">
                        Before initiating arbitration, you and Orbinum agree to attempt to resolve the Dispute informally. Either party may initiate this process by sending a written notice to the other party describing the nature of the Dispute and proposing a resolution. If the Dispute is not resolved within 30 days of receipt of the notice, either party may proceed to arbitration as outlined above.
                    </p>
                </section>

                <section id="modifications-to-terms" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">10. Modifications to Terms</h2>
                    <p className="mb-2">
                        Orbinum reserves the right to modify these Terms at any time. Changes will be effective upon posting the updated Terms on the Platform. Your continued use of the Platform after any changes constitutes your acceptance of the revised Terms.
                    </p>
                    <p className="mt-2">
                        It is your responsibility to review these Terms periodically for any changes. If you do not agree to the updated Terms, you must cease using the Platform.
                    </p>
                </section>

                <section id="termination" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">11. Termination</h2>
                    <p className="mb-2">
                        Orbinum may terminate or suspend your access to the Platform at any time, with or without cause, and without notice. Upon termination, your right to use the Platform will immediately cease, and you must cease all use of the Platform and any content or materials obtained from it.
                    </p>
                    <p className="mt-2">
                        If you wish to terminate your account, you may do so by contacting us at <i>contact@orbinum.net</i>. However, any obligations or liabilities incurred prior to termination shall survive the termination of these Terms.
                    </p>
                </section>

                <section id="contact-information" className="mb-8">
                    <h2 className="text-2xl font-semibold text-secondary-100 mb-4">12. Contact Information</h2>
                    <p className="mb-2">
                        If you have any questions or concerns regarding these Terms of Service, please contact us at:
                    </p>
                    <ul className="list-disc list-inside text-secondary-300">
                        <li>Email: <i>contact@orbinum.net</i></li>
                    </ul>
                    <p className="mt-2">
                        We will make every effort to respond to your inquiries in a timely manner.
                    </p>
                </section>
            </div>
        </AnimatedSection>
    );
};