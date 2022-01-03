import React from "react";

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/termOfUse.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="MadTrooper"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "#120034",
        }}
        {...rest}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <h1 className={classes.header}>MadTrooper – Terms of Use</h1>
          <br></br>
          <p className={classes.contentText}>
            &emsp; Welcome to MadTrooper. These Terms of Use, including any
            terms and conditions incorporated by reference (collectively, these
            “Terms”) constitute a binding agreement between you and MadTrooper
            (referred to as “MadTrooper”, “we”, “us” or “our”) when you access
            any website offered by us, including www.madtrooper.com (the
            "Website"), any mobile app offered by us, or any other platform we
            may provide (individually and collectively, the “Platform”) and any
            features, functions, services, products, rewards, offers, Content
            (as defined below), materials, or information available on or
            through the Platform (collectively the “Services”), in existence now
            or in the future. You are referred to herein as “you” or “your” and
            when we use “you” or “your” we are referring to you and any person,
            party or entity who uses the Platform or any Services. Together, you
            and MadTrooper are referred to herein as “Parties.”
            <br />
            <br />
            In the future, we may change these Terms. If we decide to change
            these Terms, the effective date will be posted so that you will
            always know what terms of use apply when you use the Platform or
            Services. These Terms were last updated on 15/09/2021.
            <br />
            <br />
            BY USING THE PLATFORM AND SERVICES, YOU: (A) ACKNOWLEDGE THAT YOU
            HAVE READ AND UNDERSTAND THIS AGREEMENT; (B) REPRESENT THAT YOU ARE
            18 YEARS OF AGE OR OLDER AND OF LEGAL AGE TO ENTER INTO A BINDING
            AGREEMENT; AND (C) ACCEPT THIS AGREEMENT AND AGREE THAT YOU ARE
            LEGALLY BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU
            MUST DISCONTINUE YOUR ACCESS TO AND USE OF THE PLATFORM AND
            SERVICES.
            <br />
            <br />
            You agree not to gain unauthorized access to the Platform or
            Services, or any account, computer system or network connected to
            the Platform or otherwise, for example, through hacking, password
            mining or any other illicit means.
            <br />
            <br />
            Any breach of these Term immediately terminates your right to access
            and use the Platform and Services and all rights and licenses
            granted to you by these Terms.
            <br />
            <br />
            <b>1. Linking Your Digital Wallet</b>
            <br />
            <br />
            (a) You do not have to create an account in order to use or access
            the Platform. However, in order to access certain Services,
            including minting MadTrooper NFTs, you will need to link a digital
            wallet owned by you to our Services. We do not own or control any of
            the digital wallets that we support, and our support of a specific
            digital wallet should not be interpreted as our endorsement or
            guarantee of the functionality of that digital wallet. Your use of
            the digital wallet you choose to use is at your own risk and subject
            to the terms and conditions of that digital wallet.
            <br />
            <br />
            (b) You are responsible for all use of your digital wallet and for
            any actions that take place using your digital wallet, whether by
            you or by another person. You are solely responsible for keeping
            your digital wallet private key confidential and secure.
            <br />
            <br />
            <b>2. Minting MadTrooper NFTs</b>
            <br />
            <br />
            (a) At selected times determined by us, we will make MadTrooper NFTs
            available for minting through our Platform. The price for each
            MadTrooper NFT will be designated in the Solana cryptocurrency
            ("SOL") and determined by us. We cannot guarantee that MadTrooper
            NFTs will be available for minting at the time you seek to mint one.
            We reserve the right to modify the types, prices, and number of
            MadTrooper NFTs available at our discretion.
            <br />
            <br />
            (b) Each MadTrooper is unique and you acknowledge and agree that
            when you mint a MadTrooper NFT you will not know which MadTrooper
            will be associated with that NFT. MadTrooper NFTs are minted
            directly into the digital wallet you have connected to our Service
            and through which you made your payment in the SOL cryptocurrency.
            We never hold custody nor take ownership or possession of a
            MadTrooper NFT. You acknowledge and agree that if you decide to
            purchase a MadTrooper NFT outside of our Platform, such purchases
            will be entirely at your sole risk.
            <br />
            <br />
            (c) You are responsible for ensuring your digital wallet address has
            a sufficient amount of the SOL cryptocurrency to cover the minting
            transaction as well as any gas fees.
            <br />
            <br />
            <b>3. Secondary Marketplaces and Third-Party Sites</b>
            <br />
            <br />
            (a) You are permitted to sell, trade, or distribute your MadTrooper
            NFT on any smart contract enabled secondary marketplaces, platforms
            and exchanges operated by third parties where users can sell,
            purchase, transfer, list for auction and bid on NFTs (“Secondary
            Marketplaces”). Note that MadTrooper NFTs may not be compatible with
            all Secondary Marketplaces, and we make no guarantee about the
            availability or functionality of any Secondary Marketplace.
            <br />
            <br />
            (b) These Terms only relate to your use of the Services, and do not
            relate to any other website or Internet-based services, including
            Secondary Marketplaces or other websites or browser extensions to
            which the Services may link (“Third-Party Sites”). References or
            links to any Third-Party Site are provided for your convenience and
            information only, for example, to make it convenient for you to
            trade your MadTrooper NFT. Such links should not be interpreted as
            endorsements by us of any Third-Party Site. When you click such
            link, we may not warn you that you have left our Services and are
            subject to the terms and conditions and privacy policies of a
            Third-Party Site. We are not responsible or liable, directly or
            indirectly, for any damage or loss caused or alleged to be caused by
            or in connection with your use of or reliance on any content,
            advertising, products, services, information or other materials on
            Third-Party Sites.
            <br />
            <br />
            (c) You acknowledge and agree that we are not a party to any
            agreement or transaction where you trade on any Secondary
            Marketplace a MadTrooper NFT which was initially minted via our
            Service, whether or not a commission or fee is received by us as a
            consequence of the transaction. We are not liable for any loss
            incurred by you in connection with any transaction that takes place
            on Secondary Marketplaces or on any other third-party sites or
            services.
            <br />
            <br />
            <b>4. Payment and Gas Fees</b>
            <br />
            <br />
            (a) Any payments made to us via the Platform will be effectuated
            through the Solana blockchain. We have no control over these
            payments or transactions, nor do we have the ability to reverse any
            payments or transactions on the Solana blockchain. You acknowledge
            that MadTrooper has no liability to you or to any third party for
            any claims or damages that may arise as a result of your payment not
            reaching us, including, but not limited to, instances where your
            payment was not properly processed on the Solana blockchain. It is
            solely your responsibility to confirm that your payment for a
            MadTrooper NFT has been accepted. We do not provide refunds for any
            MadTrooper NFTs that you mint might on or through the Platform.
            <br />
            <br />
            (b) ) Every transaction on the Solana blockchain requires the
            payment of a transaction fee known as a “Gas Fee”. This means that
            you are required to pay a Gas Fee to mint a MadTrooper NFT via the
            Platform. If you seek to transfer your MadTrooper NFT via a
            secondary marketplace you may also incur Gas Fees or other
            transaction costs. Gas Fees are paid to the network of computers
            that operate the Solana blockchain and are not paid to MadTrooper.
            Note that Gas Fees often fluctuate based on a number of factors. We
            will not provide any refunds or reimburse any costs associated with
            Gas Fees that you incur, and you agree that any costs you incur in
            relation to Gas Fees are at your own discretion and risk.
            <br />
            <br />
            (c) If you sell your MadTrooper NFT via a secondary marketplace,
            such transaction may be subject to a fee determined by us which may
            be automatically deducted. All such fees are applied to the final
            sale price of the MadTrooper NFT and are collected and distributed
            to us at the time of sale through smart contracts on the Solana
            blockchain.
            <br />
            <br />
            <b>5. Ownership and Intellectual Property </b>
            <br />
            <br />
            (a) The Platform and Services, including any MadTrooper digital
            content and media, web applications, mobile applications, software,
            materials, design, text, images, photographs, illustrations,
            animation, audio and video material, content, media files, artwork,
            graphic material, databases, proprietary information, sound
            recordings, voices, graphics and visual effects, as well as any
            accompanying documentation or other written materials, tangible or
            intangible, and all legally protectable elements of the foregoing,
            including, without limitation, all derivative works, translations,
            adaptations or variations of same, regardless of the medium, format
            or form, now known or hereinafter developed or discovered, and
            regardless of where produced, and all intellectual property rights
            therein (all of the foregoing, individually and collectively, the
            “Content”), are the property of MadTrooper. You are hereby granted a
            limited license (without the right to sublicense) to access and use
            the Content solely for your personal, non-commercial use, provided
            that you keep all copyright or other proprietary notices intact.
            Nothing in these Terms shall be interpreted as granting any license
            of intellectual property rights to you other than as explicitly set
            forth in these Terms.
            <br />
            <br />
            (b) Your minting of a MadTrooper NFT means you have full ownership
            rights in that MadTrooper NFT, including the right to store, sell
            and transfer your NFT. However, you acknowledge and agree that your
            minting of the MadTrooper NFT does not provide any rights, express
            or implied, in (including, without limitation, any copyrights or
            other intellectual property rights in or to) the MadTrooper
            associated with the NFT other than a limited license to use, copy,
            view, and display such MadTrooper, and a limited license to view and
            display any associated digital content, for your own personal,
            non-commercial use and in connection with a proposed sale or
            transfer of the MadTrooper NFT.
            <br />
            <br />
            (c) The trademarks, service marks, trade names and logos, including
            MADTROOPER, and any third-party marks used and displayed through the
            Services are trademarks of MadTrooper, and may not be used by you
            other than to describe your MadTrooper NFT.
            <br />
            <br />
            (d) The animations, music, page headers, custom graphics, button
            icons, style sheets and scripts that contribute to the “look and
            feel” of the Platform and Services are service marks, trademarks
            and/or trade dress of MadTrooper and may not be copied, imitated or
            used, in whole or in part, in connection with any product or service
            that is not expressly authorized by MadTrooper in writing, in any
            manner that is likely to cause confusion among consumers, or in any
            manner that disparages or discredits MadTrooper.
            <br />
            <br />
            <b>6. Acknowledgments and Assumptions of Risk</b>
            <br />
            <br />
            (a) You acknowledge and agree that there are risks associated with
            minting, holding, and using your MadTrooper NFT. By minting, holding
            and using a MadTrooper NFT, you expressly acknowledge and assume all
            risks including, but not limited to: forgotten passwords; inability
            to access or use your digital wallet for any reason; mistyped
            addresses or improperly constructed instructions when transmitting
            or receiving MadTrooper NFTs or any cryptocurrency; errors in the
            smart contract that mints MadTrooper NFTs; errors in the MadTrooper
            NFTs; errors in our Platform or Services; inability to access or
            transfer a MadTrooper NFT; inability to use, access, copy, or
            display the MadTrooper or any digital content; blockchain
            malfunctions or other technical errors; server failure or data loss;
            telecommunications failures; unfavorable regulatory determinations
            or actions (including with respect to NFTs or cryptocurrencies);
            taxation of NFTs or cryptocurrencies; uninsured losses;
            unanticipated risks; volatility risks in the value of MadTrooper
            NFTs and cryptocurrencies; cybersecurity attacks; weaknesses in
            MadTrooper’s security; personal information disclosure; unauthorized
            access to applications; unauthorized third-party activities,
            including, without limitation, the introduction of viruses or other
            malicious code; and the use of phishing, sybil attacks, 51% attacks,
            bruteforcing, changes to the protocol rules of the Solana blockchain
            (i.e., “forks”), or other means of attack that affect, in any way,
            the MadTrooper NFTs or the digital content (the foregoing,
            collectively, "Platform Risks").
            <br />
            <br />
            (b) You acknowledge that you have a sufficient understanding of the
            functionality, usage, storage, transmission mechanisms and other
            material characteristics of, blockchain technology, NFTs, digital
            assets, digital wallets, and cryptocurrencies to understand these
            Terms and to appreciate the risks and implications of minting a
            MadTrooper NFT.
            <br />
            <br />
            (c) You acknowledge that we do not provide any application or other
            service to receive, access, view, or display your MadTrooper or any
            digital content, and do not guarantee you will be able to do so. It
            is your responsibility to procure a digital wallet or other means to
            allow for you to access or view your MadTrooper and the digital
            content, and to store the requisite private key(s) or other
            credentials necessary to access your digital wallet or other
            technologies. You acknowledge that the risk of acquiring a
            MadTrooper from us; holding and using the MadTrooper NFT; and
            transferring your MadTrooper NFT to others rests entirely with you.
            If your private key(s) or other access credentials are lost, you may
            lose access to your MadTrooper NFT. We are not responsible for any
            such losses, including, but not limited to, losses arising from
            third-party service providers.
            <br />
            <br />
            (d) You acknowledge and represent that there is substantial
            uncertainty as to the characterization of NFTs and other digital
            assets under applicable law. You acknowledge that your minting of a
            MadTrooper NFT complies with applicable laws and regulation in your
            jurisdiction.
            <br />
            <br />
            (e) We are not responsible if your MadTrooper becomes inaccessible
            to you for any reason, or for any modifications or changes to your
            MadTrooper or any digital content including any deletion, removal,
            or inaccessibility on our Platform or otherwise. You acknowledge
            that the MadTrooper graphical image can be copied and distributed
            and that we cannot guarantee that additional copies of the
            MadTrooper associated with your MadTrooper NFT will not be created
            by others.
            <br />
            <br />
            (f) You also acknowledge and agree that:
            <br />
            <br />
            &emsp;(i) The prices of blockchain assets are extremely volatile,
            subjective and have noninherent or intrinsic value. Fluctuations in
            the price of other digital assets could materially and adversely
            affect the MadTrooper NFTs, which may also be subject to significant
            price volatility. In addition, a lack of use or public interest in
            NFTs could negatively impact the potential utility or value of your
            MadTrooper NFT. Each MadTrooper NFT has no inherent or intrinsic
            value. We cannot guarantee that any MadTrooper NFTs will retain
            their original value, as their value is inherently subjective and
            factors occurring outside of the Platform may materially impact the
            value and desirability of any particular MadTrooper NFT.
            <br />
            <br />
            &emsp;(ii) There are risks associated with using an Internet-based
            currency, including, but not limited to, the risk of hardware,
            software and Internet connections, the risk of malicious software
            introduction, and the risk that third parties may obtain
            unauthorized access to information stored within your digital
            wallet.
            <br />
            <br />
            &emsp;(iii) The regulatory regime governing blockchain technologies,
            cryptocurrencies and tokens is uncertain, and new regulations or
            policies may materially adversely affect the development of the
            Platform or Services, and therefore the potential utility or value
            of your MadTrooper NFTs.
            <br />
            <br />
            &emsp;(iv) Upgrades to the Solana blockchain, a hard fork in the
            Solana blockchain, or a change in how transactions are confirmed on
            the Solana blockchain may have unintended, adverse effects on all
            applications using the Solana blockchain’s NFT standard, including
            the Platform.
            <br />
            <br />
            <b>7. General Disclaimers</b>
            <br />
            <br />
            (a) MADTROOPER MAKES NO WARRANTY, EXPRESS OR IMPLIED, ORAL OR
            WRITTEN, WITH RESPECT TO THE MADTROOPER NFTS, THE MADTROOPER OR
            DIGITAL CONTENT, OR THE PLATFORM OR SERVICES, INCLUDING ANY
            WARRANTIES WITH RESPECT TO TITLE, NON-INFRINGEMENT, TECHNICAL
            OPERATION OR PERFORMANCE, DESCRIPTION, QUALITY (INCLUDING A
            MADTROOPER’S DIGITAL DISPLAY), CONDITION, ATTRIBUTION, AUTHENTICITY,
            SCARCITY, IMPORTANCE, MEDIUM, PROVENANCE, OR ANY IMPLIED WARRANTIES
            OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, EACH OF
            WHICH IS SPECIFICALLY DISCLAIMED. EACH MADTROOPER NFT AND EACH
            MADTROOPER IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS
            WITHOUT WARRANTIES OF ANY KIND.
            <br />
            <br />
            (b) MADTROOPER IS A PLATFORM PROVIDER. WE ARE NOT A BROKER,
            FINANCIAL INSTITUTION, OR CREDITOR. THE SERVICES ARE AN
            ADMINISTRATIVE PLATFORM ONLY.
            <br />
            <br />
            (c) We will not be responsible or liable to you or any other party
            for errors or failures to execute any minting of your MadTrooper
            NFT, including, without limitation, errors or failures caused by:
            (i) your failure to follow our instructions; (ii) any loss of
            connection to our Platform or Services unless caused by negligence;
            (iii) a failure of any software or device used by you to mint your
            MadTrooper NFT; or (iv) for any other failure to execute your
            MadTrooper NFT mint or for errors or omissions in connection with
            this activity.
            <br />
            <br />
            <b>8. Limitation of Liability</b>
            <br />
            <br />
            (a) TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW: IN NO EVENT
            WILL MADTROOPER BE LIABLE FOR (I) ANY INDIRECT, SPECIAL, INCIDENTAL,
            CONSEQUENTIAL OR EXEMPLARY DAMAGES OF ANY KIND (INCLUDING, BUT NOT
            LIMITED TO, WHERE RELATED TO LOSS OF REVENUE, INCOME OR PROFITS,
            LOSS OF USE OR DATA, OR DAMAGES FOR BUSINESS INTERRUPTION); AND (II)
            ANY DAMAGES ARISING FROM ANY PLATFORM RISKS, ARISING OUT OF OR IN
            ANY WAY RELATED TO THE MINTING OR USE OF MADTROOPER NFTS OR
            CRYPTOCURRENCIES OR OTHERWISE RELATED TO THESE TERMS, REGARDLESS OF
            THE FORM OF ACTION, WHETHER BASED IN CONTRACT, TORT (INCLUDING, BUT
            NOT LIMITED TO, SIMPLE NEGLIGENCE, WHETHER ACTIVE, PASSIVE OR
            IMPUTED), OR ANY OTHER LEGAL OR EQUITABLE THEORY (EVEN IF MADTROOPER
            HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND REGARDLESS
            OF WHETHER SUCH DAMAGES WERE FORESEEABLE).
            <br />
            <br />
            (b) IN NO EVENT WILL THE AGGREGATE LIABILITY OF MADTROOPER, WHETHER
            IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE, WHETHER ACTIVE,
            PASSIVE OR IMPUTED), OR OTHER THEORY, ARISING OUT OF OR RELATING TO
            THESE TERMS OR THE OWNERSHIP OF THE MADTROOPER NFTS, EXCEED THE
            AMOUNT OF THE INITIAL SALE ON OUR PLATFORM OF THE MADTROOPER NFT
            THAT IS THE SUBJECT OF THE CLAIM.
            <br />
            <br />
            <b>9. Release</b>
            <br />
            <br />
            (a) To the maximum extent permitted by applicable law, you hereby
            release and waive all claims against MadTrooper, and our respective
            directors, officers, agents, contractors, partners, advisors,
            employees, licensors, and content creators from any and all
            liability for claims, damages (actual and consequential), costs and
            expenses (including litigation costs and attorneys’ fees) of every
            kind and nature, arising out of or in any way connected with your
            use of the Platform or Services or minting of a MadTrooper NFT.
            <br />
            <br />
            (b) To the extent that you do have any claims against MadTrooper,
            you agree that: (1) any and all disputes, claims and causes of
            action against MadTrooper arising out of or connected with your use
            of the Platform or Services shall be resolved individually, without
            resort to any form of class action; and (2) any and all claims,
            judgments and awards shall be limited to actual damages and
            out-of-pocket costs incurred, but shall in no event include
            attorneys’ fees.
            <br />
            <br />
            <b>10. Indemnification</b>
            <br />
            <br />
            (a) You agree to indemnify and hold MadTrooper, and our directors,
            officers, employees and agents harmless from and against any loss,
            liability, claim, demand, damages, costs and expenses, including
            reasonable attorneys’ fees, arising out of your breach of these
            terms; your violation of laws, rules or regulations; your violation
            of any intellectual property right or other rights of another party;
            or your misuse of the Platform or Services. The foregoing defense
            and indemnification obligation will survive these Terms and your use
            of the Services or minting of a MadTrooper NFT. You acknowledge and
            agree that MadTrooper may, at its option, control the defense or
            settlement of any such claims.
            <br />
            <br />
            <b>11. Termination</b>
            <br />
            <br />
            (a) We reserve the right, in our sole and exclusive discretion, to
            refuse, suspend, restrict or terminate your access to the Platform
            or Services, or any portion thereof, without notice and for any
            reason or no reason. You acknowledge that we have the right, but not
            the obligation, to suspend or terminate your access to all or part
            of the Platform or Services: at the request of law enforcement or
            other government agencies; if the Platform or Services are
            discontinued or materially modified; upon the occurrence of any
            technical or security issues or problems; if you engage in any
            conduct that we believe, in our sole and exclusive discretion,
            violates any provision of these Terms or other incorporated
            agreements or guidelines or violates the rights of MadTrooper or
            third parties; or upon any breach by you of these Terms.
            <br />
            <br />
            <b>12. Disputes; Governing Law; Choice Of Forum</b>
            <br />
            <br />
            (a) YOU ARE AGREEING TO GIVE UP ANY RIGHTS TO LITIGATE CLAIMS IN A
            COURT. OTHER RIGHTS THAT YOU WOULD HAVE IF YOU WENT TO COURT MAY
            ALSO BE UNAVAILABLE OR MAY BE LIMITED IN ARBITRATION.
            <br />
            <br />
            <b>13. Miscellaneous</b>
            <br />
            <br />
            (a) If any provision of these Terms is found to be invalid,
            unlawful, void or for any reason unenforceable, then that provision
            shall be deemed severable from these Terms and shall not affect the
            validity and enforceability of any remaining provisions.
            <br />
            <br />
            (b) These Terms represent the entire agreement between you and
            MadTrooper relating to your right to access and use the Platform or
            Services, and supersede any and all prior or written or oral
            agreements between you and MadTrooper with respect to such subject
            matter.
            <br />
            <br />
            (c) No waiver by MadTrooper of any breach or default by you under
            these Terms shall be deemed to be a waiver of any preceding or
            subsequent breach or default. Any waiver by MadTrooper must be in
            writing signed by MadTrooper.
            <br />
            <br />
            (d) These Terms, and any rights and licenses granted hereunder, may
            not be transferred or assigned by you without the prior written
            consent of MadTrooper. These Terms are intended solely for the
            benefit of the parties and are not intended to confer third-party
            beneficiary rights upon any other person or entity. No provision of
            these Terms provides any person or entity not a party to these Terms
            with any remedy, claim, liability, reimbursement or cause of action,
            or creates any other third-party beneficiary rights.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
