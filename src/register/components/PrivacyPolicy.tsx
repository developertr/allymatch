import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import theme, {centreAlign} from '../../theme/_theme.scss';
import { Card } from 'react-toolbox';

@observer
export default class TermsConditions extends React.Component<{}, {}> {

  render() {
    return (
      <div>
      <img className={theme.banner} src="https://www.globalsuccess-club.net/documents/20589/33068/banner+image+landing.jpg/9f2a7a4d-302f-4fc9-a88c-247bf4d889a3?t=1494928966400" />
      <img className={theme.banner1} src="https://www.globalsuccess-club.net/documents/20589/33063/RBI.jpg/8f88711d-7661-4381-892b-06f4bfc9027c?t=1511450769183"/>
      <div className={theme.bannerRow}><span className={theme.defaultMargin}>Privacy Policy</span></div>
        <div className={theme.tncCard}>
            Thank you for your interest in our website, the matching app and our services, which are provided and operated by:<br/><br/>
            <div>
            Allymatch GmbH<br/>
            Mombacher Str. 48, 55122 Mainz<br/>
            Tel.: +49 (0) 6131 58 45 755<br/>
                e-mail: <a href="mailto:contact@allymatch.com">contact@allymatch.com</a>
            </div>
            <br/>
            <p>For the use of the website and of the matching app or the additional provision of services, we collect various types of data, some of which are provided by you as a user and some of which are necessary for the use of the website or arise from the use of the website. Personal data are individual details about personal or professional circumstances of a specific or identifiable natural person. While using the matching app, data is entered by users when registering and creating profile, including input of your own personal data; including Name, Email, Phone number, Job Title - and company information; Company name, Company Type, Industries their company is in, country their company is located, Target Markets, Yearly Annual Revenue, # of Employees, # of Subsidiaries, and locations of production and R&D facilities. These things can also be viewed/changed manually by allymatch on the admin panel.</p>
            <br/>
            <p>Your personal data will only be passed on or otherwise transferred to third parties if the transfer is necessary for the purpose of contract processing (for example for payment processing) or if you have given your express consent. At no time your personal data will be shared to third parties for advertising, marketing, or other purposes without authorization. The information is also not used for any other purpose and no automatic decision processing will take place.</p>
            <br/>
            <p>If we use contracted service providers for individual functions of our offers via this website/the app or would like to use your data for additional purposes, we will inform you in detail about the respective processes below. We also specify the defined criteria for the storage period.</p>
            <br/>
            <p>The following data protection principles apply to the use of our website/app and other services (hereinafter named as “Services”) offered through it (e.g. contact form, registration, matching app):</p>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>1. </span> We protect your personal data by taking all reasonable and necessary technical and organizational possibilities so that they are not accessible to unauthorized third parties. Our Services offered therefore use appropriate encryption mechanisms for the provision of content and during the input and transmission of data. When communicating by e-mail, we also recommend the use of encryption for confidential information
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>2. </span>Person responsible in the meaning of. Art. 4 Para. 7 General Data Protection Regulation (GDPR) is Isinay Kemmler, Mombacher Straße 48, 55122 Mainz, <a href="mailto:contact@allymatch.com">contact@allymatch.com</a> (see also via „Imprint“ at our Website). You can contact the person responsible for data protection at <a href="mailto:dataprotection@allymatch.com">dataprotection@allymatch.com</a> or via our postal address with the addition "Data Protection ".
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>3. </span>Your personal data will only be passed on to third parties,<br/><br/>
                <ul>
                    <li>if you have given your express consent pursuant to Art. 6 para. 1 sentence 1 a) GDPR;</li>
                    <li>if the transfer is necessary for the fulfilment of contractual obligations pursuant to Art. 6 para. 1 sentence 1 b) GDPR;</li>
                    <li>if we are legally obliged to pass on the data within the meaning of Art. 6 Par. 1 S. 1 c) GDPR;</li>
                    <li>if the disclosure of the data is in the public interest within the meaning of Art. 6 para. 1 e) GDPR or;</li>
                    <li>if the disclosure of data pursuant to Art. 6 para. 1 sentence 1 f) GDPR is necessary to protect our legitimate interests or the legitimate interests of a third party, provided that your interests in the protection of your data do not prevail.</li>
                </ul>
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>4. </span>If you send us e-mail messages or other messages or enter them directly on the Website/in the matching app, we will retain such information and messages in order to fulfil our contractual obligations with you, process the request, respond to questions and improve the Website, products and services. We delete the data arising in this context after the storage is no longer necessary or limit the processing if statutory retention obligations exist.
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>5. </span>If you provide statements or feedback (for example on the Website), we may use and disclose this feedback for any purpose, as long as we do not provide it with your personal data, i.e. anonymously or pseudonymously. The collection of data contained in such feedback and the handling of all personal data contained therein is in accordance with the data protection principles set out herein.
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>6. </span>If you provide statements or feedback (for example on the Website), we may use and disclose this feedback for any purpose, as long as we do not provide it with your personal data, i.e. anonymously or pseudonymously. The collection of data contained in such feedback and the handling of all personal data contained therein is in accordance with the data protection principles set out herein.
                <br/><br/>
                <ul>
                    <li>
                        As far as Services requires a registration, the basic data for the registration, determined by the respective registration form are transmitted, processed and stored and only collected, stored and used for the use of the Services as well as the provision of the matching functions in the app. The legal basis for this is Art. 6 Para. 1 S. 1 lit. b GDPR. All user/company data given during registration/on profile can be seen by allymatch on the admin panel and is stored at the Amazon Web Services data center in Europe. The messaging feature on allymatch is utilizing a 3rd party service, Google Fire Base Cloud Messaging. User information and email will not be stored by the Google Firebase Cloud, only user chat history.<br/><br/>
                    </li>
                    <li>
                        In the context of such registration we are also entitled to inform you about changes, additions or new versions of the Services, changes of our terms and conditions as well as these privacy statement and additional information provided via the Services as well as e.g. about new products. The legal basis for this is Art. 6 Para. 1 S. 1 lit. a, b and e GDPR.<br/><br/>
                    </li>
                    <li>
                        The user’s personal data [name, email, title, phone number] is only used to be displayed in the case that both users accept one another as allymatches for the ability to get in contact. User data is also used for communications between allymatch and the user via Google Fire Base by the displaying of their name. Message history is only available to the two users who are allymatches, and to Allymatch who could view message conversation history if needed.<br/><br/>
                        The company data is used to create matches based on a user’s inquiry matching another user’s profile information. A user’s company profile is displayed [excluding the name] if they match another users inquiry, only after both the users have accepted each other are the company names displayed for both users to see.<br/><br/>
                    </li>
                    <li>
                        If you register for the subscription of a newsletter, this registration can take place under indication of the e-mail address without further data. Additional information will not be requested.<br/><br/>
                        We use the so-called double opt-in procedure for sending the newsletter. As part of this process, we first send the user an e-mail to the specified e-mail address. However, the user will not receive a newsletter by e-mail until the user clicks on the link received in the e-mail and has expressly confirmed to us that we should activate the newsletter service. After your confirmation we will save your e-mail address only for the purpose of sending you the newsletter. The legal basis is Art. 6 Para. 1 S. 1 lit. a GDPDR<br/><br/>
                        If at any time you no longer wish to receive newsletters from us, you can object to the newsletter subscription at any time without incurring any costs other than the transmission costs according to the basic rates. A message in text form to the contact data specified in the imprint is sufficient for this. Of course, you will also find a unsubscribe link in every newsletter.<br/><br/>
                    </li>
                    <li>
                        The data created by users within the scope of using the Services via registration, login or newsletter registration are stored on servers operated in our name at Amazon Web Services data center in Europe. However, the server operators are subject to the same data protection standards as we are and are operated in the European Union.
                    </li>
                </ul>
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>7. </span>
                Data collected directly in the context of your use of the website:<br/><br/>
                <ul>
                    <li>
                        While a purely informational use of the website, i.e. if you do not register or otherwise provide us with information, we only collect the personal data that your browser transmits to our server. If you wish to view our website, we collect the following data, which are technically necessary for us to display our website to you and to guarantee its stability and security (legal basis is Art. 6 Para. 1 S. 1 lit. f GDPR):<br/><br/>
                        <ul>
                            <li>IP address (stored shortened in accordance with data protection regulations) date and time of the request</li>
                            <li>Time zone difference to Greenwich Mean Time (GMT)</li>
                            <li>Content of the request (specific page)</li>
                            <li>Access status/HTTP status code the amount of data transferred in each case</li>
                            <li>Website from which the request originates</li>
                            <li>Browser name and version, language setting</li>
                        </ul>
                        <br/>
                    </li>
                    <li>
                        When you visit our website and when using the services offered via the website, the server sends one or more cookies - small files containing a string of characters - to the user's computer or other data processing unit, which uniquely identifies the browser. We use cookies to improve the quality of the website, including to store usage preferences and track user trends.<br/><br/>
                        Cookies can be set in one of the following types:<br/>
                        <ul>
                            <li>Transient cookies are automatically deleted when you close your browser. This includes in particular the session cookies. These store a so-called session ID, with which different requests of your browser can be assigned to the common session. This will allow your computer to be recognized when you return to our website. Session cookies are deleted when you log out or close your browser.</li>
                            <li>Persistent cookies are automatically deleted after a specified period, which may vary depending on the cookie. You can delete cookies at any time in the security settings of your browser.</li>
                            <li>Third-party cookies are cookies that are set by third parties and can be either transient or persistent cookies.</li>
                        </ul>
                        <br/>
                    </li>
                    <li>
                        You can set your browser to notify you when a cookie is sent. This opens up the possibility of either accepting or rejecting a cookie. The information collected and analysed is used to improve the services and the website, to personalize the web experience, and to allow easy login to permanently set login cookies.<br/><br/>
                    </li>
                    <li>
                        We may use the services of third parties to evaluate the efficiency of the website and services and to determine how visitors use the website and or the services and, where appropriate, to provide a personalized user experience when evaluating cookies. The website may use web beacons (tracking pixels) and cookies provided by third parties for this purpose. The information collected by the provider includes the pages visited, navigation patterns and similar data. This data enables us to find out which product information is most interesting for users and which offers users prefer to view. Furthermore, we do not exclude the possibility that we transmit anonymous usage data for market research purposes. Although we may have commissioned third parties to log the data originating from our website, we have control over how this data may or may not be used. The cookie itself does not contain any personal data, but if you provide personal data when visiting the website and do not delete the cookie from your browser after providing this data, the provider collects the non-personal data stored in the cookie (such as the number of visits to the provider) and stores and processes this anonymously.
                    </li>
                </ul>
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>8. </span>
                Data collected in the context of the use of the website by analysis tools or other third-party applications:<br/><br/>
                <ul>
                    <li>
                        We use Google Analytics to analyse and regularly improve the use of our website. We can improve our offer and make it more interesting for you as a user. Google Analytics is a web analysis service of Google Inc. "("Google"), which uses cookies to analyse your use of the website.<br/><br/>
                        The information generated by the cookie about your use of this website is usually transferred to a Google server in the USA and stored there. However, by activating IP anonymisation by us on this website, Google will previously reduce your IP address within Member States of the European Union or in other states party to the Agreement on the European Economic Area. For exceptional cases in which personal data may transferred to the USA, Google has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework. The legal basis for the use of Google Analytics is Art. 6 Par. 1 S. 1 lit. f GDPR.<br/><br/>
                        On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide the Internet use.<br/><br/>
                        You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. You can also prevent Google from collecting the data generated by the cookie and relating to your use of the website (including your IP address) and from processing this data by Google by downloading and installing the browser plug-in available under the following link:<br/>
                        http://tools.google.com/dlpage/gaoptout?hl=en.<br/><br/>
                    </li>
                    <li>
                        We currently use the following social media links: Facebook, Google+, Twitter, LinkedIn. We only link to these providers, so you will be forwarded to them in clicking on the relevant link. The legal basis for the use of the social media links is Art. 6 Para. 1 S. 1 lit. f GDPR.<br/><br/>
                        This means that when you visit our site, no personal data is initially passed on to the providers of social media services. You can recognize the provider of the plug-in used by the logo shown and/or the additional text information. If you click on the link, the plug-in provider receives the information that you have accessed the corresponding website. Since the plug-in provider collects data mainly via cookies, we recommend that you delete all cookies before clicking on not yet activated button by using your browser's security settings.<br/><br/>
                        We have no influence on the data collected and data processing processes, nor are we aware of the full extent of data collection, the purposes of processing, the storage periods. We also have no information on the deletion of the data collected by the plug-in provider.<br/><br/>
                        The plug-in provider stores the data collected about you as user profiles and uses these for the purposes of advertising, market research and/or demand-oriented design of its website. Such an evaluation takes place in particular (also for not logged in users) for the representation of demand-fair advertisement and in order to inform other users of the social network about your activities on our website. You have a right of objection to the creation of these user profiles, whereby you must contact the respective plug-in provider to exercise this right. Through the plug-ins we offer you the possibility to interact with social networks and other users, so that we can improve our offer and make it more interesting for you as a user.<br/><br/>
                        The data is passed on regardless of whether you have an account with the plug-in provider and are logged in there. If you are logged in with the plug-in provider, your data collected with us will be directly assigned to your existing account with the plug-in provider. If you click the activated button and, for example, link the page, the plug-in provider also stores this information in your user account and shares it publicly with your contacts. We recommend that you log out regularly after using a social network, especially before activating the button, as this way you can avoid being assigned to your profile with the plug-in provider.<br/><br/>
                    </li>
                    <li>
                        We have included YouTube videos in our online offer, which are stored on http://www.YouTube.com and can be played directly from our website. These are all integrated in the "extended data protection mode", i.e. no data about you as a user will be transmitted to YouTube if you do not play the videos. Only when you play the videos will the above data be transmitted. We have no influence on this data transmission.<br/><br/>
                        By visiting the website, YouTube receives the information that you have accessed the corresponding subpage of our website. In addition, further data is transmitted. This is independent of whether YouTube provides a user account through which you are logged in or whether no user account exists. If you are logged in to Google, your information will be directly associated with your account. If you do not wish to be associated with your profile on YouTube, you must log out before activating the button. YouTube stores your data as user profiles and uses them for purposes of advertising, market research and/or demand-oriented design of its website. Such evaluation takes place in particular (even for unlogged-in users) to provide demand-oriented advertising and to inform other users of the social network about your activities on our website. You have the right to object to the creation of these user profiles, and you must contact YouTube to exercise this right.
                    </li>
                </ul>
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>9. </span>
                You have the right to ask about your personal data free of charge at any time. Furthermore, you have the right at any time to revoke your consent to the use of your personal data with effect for the future and to request correction or deletion of the data stored by us.<br/><br/>
                In particular, you have the following rights towards us with regard to the personal data related to you:<br/><br/>
                <ul>
                    <li>Right to access information,</li>
                    <li>Right to correction or erasure,</li>
                    <li>Right to limitation of processing,</li>
                    <li>Right of withdrawal of the consent to processing,</li>
                    <li>Right to data transferability.</li>
                </ul>
                <br/><br/>
                You also have the right to complain to a data protection supervisory authority about our processing of your personal data. You have the following individual rights:<br/><br/>
                <ul>
                    <li>Right to information pursuant to Art. 15 GDPR on the processing of your personal data by us for processing purposes, categories of processed data, recipients or categories of recipients, duration of storage or criteria for determining the duration, right to correction, deletion, restriction of processing or objection to processing, right of appeal to the supervisory authority, information on the origin of the data where applicable and the existence of automated decision-making and, where applicable, information on guarantees pursuant to Art. 46 GDPR in the event of transfer to a third country or international organisations;<br/><br/></li>
                    <li>Right to immediate correction of incorrect or incomplete personal data in accordance with Art. 16 GDPR;<br/><br/></li>
                    <li>Right to erasure of the personal data stored pursuant to Article 17 GDPR if the data are no longer necessary for the purposes for which they were collected or otherwise processed, if a consent granted has been revoked and there is no other legal basis, if opposition to the processing has been lodged and the data pursuant to Article 17 GDPR is no longer required. 21 para. 1 or 2 GDPR may no longer be processed if the data were processed unlawfully, if deletion is necessary to fulfil a legal obligation or if the data were collected in relation to information society services offered in accordance with Art. 8 para. 1 GDPR. This does not apply if the processing is necessary to exercise the right to freedom of expression and information, to fulfil a legal obligation, for reasons of public interest or to assert, exercise or defend legal claims; in case of an erasure, the user data will then be deleted through the admin panel and consequently deleted from Amazon Web Services/Google Fire Base servers.<br/><br/></li>
                    <li>The right to restrict processing in accordance with Article 18 GDPR, if you dispute the accuracy of the data (for the period necessary to verify their accuracy), if the processing is unlawful but you refuse to delete the data and instead request the restriction of use, if we no longer need the data for the purposes of processing but you need the data to assert, exercise or defend legal claims, or if you object to the processing in accordance with Article 18 GDPR. 21 para. 1 GDPR, as long as it is not yet clear whether our justified reasons outweigh your justified reasons;<br/><br/></li>
                    <li>Right to object to the processing of your personal data pursuant to Art. 21 para. 2 GDPR (if the data are processed for the purpose of direct marketing) or pursuant to Art. 21 para. 1 GDPR (if the processing is carried out pursuant to Art. 6 para. 1 sentence 1 e) or f) GDPR, for reasons arising from your particular situation, unless we have compelling grounds for processing that outweigh your interests or the processing serves to assert, exercise or defend legal claims).<br/><br/></li>
                    <li>Right to data transferability in accordance with Art. 20 GDPR, i.e. to receive the personal data concerning you that you have provided to us in a structured, current and machine-readable format or to transfer it to another person responsible;<br/><br/></li>
                    <li>Right to revoke consent granted at any time in accordance with Art. 7 para. 3 GDPR. The consequence of the revocation is that from the time of the revocation we may no longer carry out the data processing for the future.<br/><br/></li>
                    <li>
                        Right of appeal to a supervisory authority pursuant to Art. 77 GDPR. The right of appeal is without prejudice to other administrative or judicial remedies. The address of the supervisory authority responsible for us is
                        <br/><br/>
                        Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz, Prof. Dr. Dieter Kugelmann, Hintere Bleiche 34, 55116 Mainz<br/>
                        Phone: +49 (0) 6131 208-2449, Telefax: +49 (0) 6131 208-2497<br/>
                        Website: https://www.datenschutz.rlp.de/<br/>
                        E-Mail: poststelle(at)datenschutz.rlp.de<br/><br/>
                    </li>
                    <li>
                        Please contact the data protection officer via the contact data stated in Section 2 above to request information and for withdrawal as well as for notification of a request for deletion; the data protection officer will then provide the information immediately or confirm the execution of your request for deletion. A deletion requested by you will then be carried out subject to statutory retention obligations. If a deletion cannot take place completely due to legal storage obligations, we limit the processing of the data concerned and inform you accordingly.<br/><br/>
                    </li>
                </ul>
            </div>
            <div className={theme.specialBox}>
                <span className={theme.generalHeading}>10. </span>
                Third Party Privacy Information<br/><br/>
                Further information on the purpose and scope of data collection and its processing by the plug-in provider can be found in the data protection declarations of these providers notified below. They will also provide you with further information about your rights in this regard and setting options to protect your privacy:<br/><br/>
                <ul>
                    <li>Amazon Web Services data center in Europe, operated by Amazon Web Services, Inc., 410 Terry Avenue North, Seattle WA 98109, United States aws.amazon.com, Fax: +1 206 266-7010, Privacy Policy: https://www.amazon.com/gp/help/customer/display.html?nodeId=468496. Amazon Web Services, Inc. has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework<br/><br/></li>
                    <li>Google Dublin, Google Ireland Ltd, Gordon House, Barrow Street, Dublin 4, Ireland, Fax: +353 (1) 436 1001. Terms of Use: https://www.google.com/analytics/terms/de.html, Privacy Policy: https://www.google.com/intl/de/analytics/learn/privacy.html, and Privacy Policy: https://policies.google.com/privacy?hl=de&gl=de.<br/><br/></li>
                    <li>Facebook Inc., 1601 S California Ave, Palo Alto, California 94304, USA; https://www.facebook.com/about/privacy/ ; further information in regard to personal data processed and/or stored: https://www.facebook.com/help/2383181465353 33?helpref=related  as well as https://www.facebook.com/help/111814505650678. Facebook has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework.<br/><br/></li>
                    <li>Google Inc., 1600 Amphitheater Parkway, Mountainview, California 94043, USA; https://policies.google.com/technologies/partner-sites?hl=de. Google has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework.<br/><br/></li>
                    <li>Twitter, Inc., 1355 Market St, Suite 900, San Francisco, California 94103, USA; https://twitter.com/privacy. Twitter has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework.<br/><br/></li>
                    <li>LinkedIn Corporation, 2029 Stierlin Court, Mountain View, California 94043, USA; http://www.linkedin.com/legal/privacy-policy. LinkedIn has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework.<br/><br/></li>
                    <li>For more information on the purpose and scope of data collection and processing by YouTube, please refer to the privacy policy. There you will also find further information about your rights and setting options to protect your privacy: https://www.google.de/intl/de/policies/privacy. Google also processes your personal data in the USA and has submitted to the EU-US Privacy Shield, https://www.privacyshield.gov/EU-US-Framework.</li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
