import { Link } from 'react-router-dom';
import React from 'react';

import './tos.css';

export const Tos = (props) => {
  const { closeModal, open: openFromProps, static: staticFromProps } = props;

  const open = staticFromProps ? '' : openFromProps ? '' : 'hidden';

  return (
    <div className={`tos-container ${open}`}>
      <div className="container">
        <div className="title">
          <h1>TERMS OF SERVICE</h1>
          <p>Last updated on May 1, 2019</p>
        </div>

        {staticFromProps ? (
          <Link className="back-button" to="/">
            X
          </Link>
        ) : (
          <Link className="back-button" to="#" onClick={() => closeModal()}>
            X
          </Link>
        )}

        <div className="paper">
          <div className="section-block">
            <h3>Agreement between You and Seekr Inc.; Changes</h3>
            <p>
              Please read the following terms of service (the “
              <span className="bolded">Terms</span>”) carefully. By continuing
              to use Seekr Inc., you acknowledge that you have read, understood
              and agree to be bound by these Terms, and the terms and conditions
              of the Privacy Policy (as defined below), when using any service
              or services (collectively, the “
              <span className="bolded">Service</span>
              ”) offered by DBA Seekr Inc., Inc or its parents, affiliates or
              subsidiaries (collectively, “
              <span className="bolded">Seekr Inc.</span>” or “
              <span className="bolded">we</span>”), on or through the any site
              made available by Seekr Inc. (collectively, the “
              <span className="bolded">Site</span>”). The term “you” (and
              “your”) for purposes of these Terms, means both you in your
              individual capacity, and if applicable, the company or other legal
              entity whom you represent and on whose behalf you use the Service.
            </p>
            <p>
              <span className="bolded">
                1.3 Seekr Inc. reserves the right to change any of the terms and
                conditions contained in these Terms, including the Service
                and/or any policies or guidelines governing the Service, at any
                time and in its sole discretion. While we will endeavor to
                provide direct notice to you of any changes, you are responsible
                for periodically checking the Site to determine if any changes
                have been made and we are not liable for your failure to do so
                or our failure to provide such direct notice to you. Your
                continued use of the Service following any revision to these
                Terms will constitute your acceptance of the changes or
                modifications to these Terms. If you do not agree to any changes
                to these Terms, do not continue to use the Service.
              </span>
            </p>
          </div>
          <div className="section-block">
            <h3>The Service; User Accounts</h3>
            <p>
              The Service facilitates insurance agents (each an “
              <span className="bolded">Agent</span>”) to offer for sale and to
              sell, insurance products to potential consumers who have applied
              through the Site to receive insurance quotations from an Agent. We
              may, with your authorization, collect certain information about
              you and sell such information to an Agent. We are not responsible
              for the legality, safety or quality of the insurance products
              offered for sale by any Agent, the accuracy or veracity of the
              representations regarding such products, the ability of Agents to
              sell the products or your ability to pay for the products.{' '}
              <span className="bolded">
                For purposes of clarification, we (i) do not issue insurance
                contracts or bind coverage; (ii) are not responsible for, nor do
                we assume any financial or other liability whatsoever, for the
                conduct of you or any Agent; (iii) do not endorse or recommend
                any Agents or insurance policies or products offered by such
                Agents; (iv) do not provide any type of insurance, tax,
                financial, legal or any other advice; and (v) do not guarantee
                that any Agents to whom we send your application will contact
                you or agree to provide you with the requested insurance
                overage. If you would like personal advice or insurance specific
                policy recommendations, please onsult with a qualified
                professional. Be advised that we do not offer or sell any
                insurance or other products shown on the Site.
              </span>
            </p>
            <p>
              In order to use the Service, you must register with us to open a
              Seekr Inc. user account (“<span className="bolded">Account</span>
              ”). By opening an Account, you represent and warrant that: (a) all
              information you submit in connection with your opening and use of
              your Account is true, accurate, current, and complete; (b) you
              will promptly notify us if your information changes so that we can
              update our records; (c) you are aged 18 or older; the Service is
              not intended for persons under 18; and (d) your use of the Service
              does not violate any applicable law, rule or regulation. You are
              responsible for maintaining this information current.
            </p>
            <p>
              You are solely responsible for maintaining the security and
              confidentiality of the information you hold for your Account,
              including, without limitation, your user name and password, and
              for any and all activity that occurs through your Account as a
              result of your failure to keep this information secure and
              confidential. You hereby agree to notify Seekr Inc. immediately if
              you become aware of any unauthorized use of your Account, user
              name or password, or any other breach of security in connection
              therewith. You may be held liable for losses incurred by Seekr
              Inc. or any third party due to someone else using your Account,
              user name or password as a result of your failing to keep your
              Account information secure and confidential. You are strictly
              prohibited from using anyone else’s Account, user name or password
              at any time and for any reason. Seekr Inc. is not liable to you or
              any third party for your failure to comply with your obligations
              under this paragraph.
            </p>
          </div>
          <div className="section-block">
            <h3>Your Information and Privacy</h3>
            <p>
              In order to use the Service you will be required to provide
              certain (i) personally identifiable information to Seekr Inc.
              (e.g., your name, address, date of birth, company information,
              email address, driver’s license number, phone number, and, if
              applicable, your credit card information); and other content
              (collectively, “<span className="bolded">Content</span>”). Seekr
              Inc. will only use such personally identifiable information in
              accordance with the terms of our privacy policy (the “
              <span className="bolded">Privacy Policy</span>”). In this regard,
              you agree to the then-current version of the Privacy Policy that
              you can find and read{' '}
              <Link className="link" to="/privacy">
                here
              </Link>{' '}
              You hereby grant Seekr Inc. a license to use all other Content as
              necessary in connection with the provision of the Service
            </p>
          </div>
          <div className="section-block">
            <h3>Seekr Inc.’s Proprietary Rights</h3>
            <p>
              You hereby acknowledge and agree that Seekr Inc. (or its
              licensors) own all legal right, title and interest in and to the
              Site and Service, including, without limitation, any intellectual
              property or other proprietary rights which subsist in the Site and
              Service (whether such rights are registered or unregistered, and
              wherever in the world those rights may exist). As between you and
              Seekr Inc., all materials on the Site, including, but not limited
              to, graphics, user and visual interfaces, images, software,
              applications, and text, as well as the design, structure,
              selection, coordination, expression, “look and feel”, and
              arrangement of the Site and its content, and the domain names,
              trademarks, service marks, proprietary logos and other distinctive
              brand features found on the Site, are all owned by Seekr Inc. or
              licensors.
            </p>
            <p>
              Seekr Inc. shall fully own and retain all rights to anonymous
              usage data derived from your use of the Service (“
              <span className="bolded">Usage Data</span>”) as aggregated with
              usage data from Seekr Inc.’s other customers for its own business
              purposes such as support, operational planning, product innovation
              and sales and marketing of Seekr Inc.’s services. For purposes of
              clarification, such Usage Data may not include any data that could
              reasonably identify you.
            </p>
            <p>
              Nothing in these Terms gives you any right to use any of Seekr
              Inc.’s trade names, trademarks, service marks, logos, domain
              names, and other distinctive brand features. All rights not
              expressly granted by Seekr Inc. under these Terms are reserved.
            </p>
          </div>
          <div className="section-block">
            <h3>Service Use; Restrictions</h3>
            <p>
              While these Terms are in effect, you may access and use the Site
              and Services in accordance with these Terms.
            </p>
            <p>
              You hereby represent and warrant that you will not, and will not
              permit any third party to: (a) attempt to disable or circumvent
              any security mechanisms used by the Site or Service or otherwise
              attempt to gain unauthorized access to any portion or feature of
              the Site or Service, or any other systems or networks connected to
              the Site or Service, or to any Seekr Inc. server, by hacking,
              password “mining”, or any other illegal means; (b) use any
              “deep-link”, “page-scrape”, “robot”, “spider” or other automatic
              device, program, algorithm or methodology, or any comparable
              manual process, to access, acquire, copy, or monitor any portion
              of the Site or Service; (c) use any device, software or routine to
              interrupt or interfere, or attempt to interrupt or interfere with,
              the proper operation and working of the Site or Service or any
              transaction being conducted on the Site or through the Service, or
              with any other person’s use of the Site or Service; (d) breach any
              security measures implemented on the Site or in the Service; (e)
              track or seek to trace any information on any other person who
              visits the Site or uses the Service; (f) forge headers or
              otherwise manipulate identifiers in order to disguise your
              identity, or the origin of any message or other communication that
              you send to Seekr Inc. in connection with the Service; (g) pretend
              that you are, or that you represent, someone else, or impersonate
              any other person; (h) use the Service in the design, development,
              production, or use of missiles or the design, development,
              production, stockpiling, or use of chemical or biological weapons;
              (i) use the Service or Site for any illegal purpose, for
              soliciting the performance of any illegal activity, or as
              otherwise prohibited by these Terms or applicable laws, rules or
              regulations, including, without limitation, laws applicable to the
              export of software and data; (j) upload or otherwise process any
              malicious content to, or through, the Service; or (k) copy,
              modify, create a derivative work of, reverse engineer, decompile
              or otherwise attempt to extract the source code of the any Seekr
              Inc. proprietary software used to provide, maintain, or otherwise
              applicable to, the Service, or made available to you in connection
              with the Service.
            </p>
          </div>
          <div className="section-block">
            <h3>Feedback</h3>
            <p>
              If you send or transmit any communications or materials to Seekr
              Inc. by mail, electronic mail, telephone, or otherwise (“
              <span className="bolded">Feedback</span>”), suggesting or
              recommending changes to our Site or Service, including without
              limitation, new features or functionality relating thereto, any
              comments, questions, suggestions, or the like, all such Feedback
              are, and will be treated as, non-confidential and non-proprietary.
              This means that you give up any claim that the use of such
              Feedback by Seekr Inc. or its agents, violates any of your rights
              including moral rights, privacy rights, proprietary or other
              property rights, rights of publicity, rights to credit for
              material or ideas, or any other right, including the right to
              approve the way Seekr Inc. uses such Feedback.
            </p>
            <p>
              You hereby assign all right, title, and interest in, and Seekr
              Inc. is free to use, without any attribution or compensation to
              you, any ideas, know-how, concepts, techniques, or other
              intellectual property rights contained in the Feedback, whether or
              not patentable, for any purpose whatsoever, including but not
              limited to, developing, manufacturing, having manufactured,
              licensing, marketing, and selling, directly or indirectly,
              products and services using such Feedback. You agree and
              understand that Seekr Inc. is not obligated to use, display,
              reproduce, or distribute any such ideas, know-how, concepts, or
              techniques contained in the Feedback, and you have no right to
              compel such use, display, reproduction, or distribution.
            </p>
          </div>
          <div className="section-block">
            <h3>Exclusion of Warranties</h3>
            <p>
              YOUR USE OF THE SITE, PROFESSIONAL SERVICES AND SERVICE IS
              ENTIRELY AT YOUR OWN DISCRETION AND RISK. THE SITE AND SERVICE ARE
              FURNISHED TO YOU “AS IS” AND WITHOUT WARRANTIES OR CONDITIONS,
              STATUTORY OR OTHERWISE, OF ANY KIND. SEEKR INC., ON BEHALF OF
              ITSELF, AND ON BEHALF OF ITS PARENTS, AFFILIATES, SUBSIDIARIES,
              LICENSORS AND THIRD PARTY SERVICE PROVIDERS, AND SEEKR INC.’S AND
              THEIR DIRECTORS, OFFICERS, EMPLOYEES, CONTRACTORS, AGENTS,
              SUCCESSORS, AND ASSIGNS, (COLLECTIVELY, THE “
              <span className="bolded">SEEKR INC. PARTIES</span>
              ”): (A) EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS, WHETHER
              EXPRESS, IMPLIED OR STATUTORY, INCLUDING, WITHOUT LIMITATION, THE
              IMPLIED WARRANTIES OF NON-INFRINGEMENT, TITLE, MERCHANTABILITY,
              AND FITNESS FOR A PARTICULAR PURPOSE; (B) DOES NOT WARRANT THAT
              THE SERVICE, OR DATA PROVIDED THROUGH THE SERVICE, WILL MEET YOUR
              REQUIREMENTS, OR THAT ITS OPERATION WILL BE TIMELY, UNINTERRUPTED,
              SECURE, OR ERROR-FREE OR THAT ANY DEFECTS WILL BE CORRECTED; AND
              (C) DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS OR CONDITIONS
              REGARDING THE USE OR THE RESULTS OF THE USE OF THE SERVICE IN
              TERMS OF ITS ACCURACY, RELIABILITY, TIMELINESS, COMPLETENESS, OR
              OTHERWISE. YOU ASSUME TOTAL RESPONSIBILITY FOR YOUR USE OF THE
              SERVICE.
            </p>
            <p>
              THIS LIMITATION OF REMEDIES IS A PART OF THE BARGAIN BETWEEN YOU
              AND SEEKR INC. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY
              SEEKR INC. or ANY PERSON ON BEHALF OF SEEKR INC. SHALL CREATE A
              WARRANTY OR CONDITION, OR IN ANY WAY CHANGE THIS EXCLUSION OF
              WARRANTY.
            </p>
            <p>
              NOTHING IN THESE TERMS, THIS SECTION 13, OR SECTION 14 BELOW,
              SHALL EXCLUDE OR LIMIT SEEKR INC.’S WARRANTY OR LIABILITY FOR
              LOSSES WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE
              LAW.
            </p>
          </div>
          <div className="section-block">
            <h3>Limitation of Liability</h3>
            <p>
              SUBJECT TO SECTION 13.3 ABOVE, IN NO EVENT WILL SEEKR INC. OR
              SEEKR INC. PARTIES BE LIABLE TO YOU, OR ANY THIRD PARTY, FOR ANY
              SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, RELIANCE, OR
              CONSEQUENTIAL DAMAGES OF ANY KIND, INCLUDING, BUT NOT LIMITED TO,
              COMPENSATION, REIMBURSEMENT OR DAMAGES IN CONNECTION WITH, ARISING
              OUT OF, OR RELATING TO, THE USE, OR LOSS OF USE OF, THE SERVICE,
              LOSS OF PROFITS, LOSS OF GOODWILL, LOSS OF DATA, COST OF
              PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, SUBSEQUENT OR OTHER
              COMMERCIAL LOSS, OR FOR ANY OTHER REASON OF ANY KIND, WHETHER
              BASED ON CONTRACT OR TORT (INCLUDING, WITHOUT LIMITATION,
              NEGLIGENCE OR STRICT LIABILITY), EVEN IF SEEKR INC. OR Seekr Inc.
              PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              SEEKR INC. AND SEEKR INC. PARTIES WILL NOT BE LIABLE TO YOU OR ANY
              THIRD PARTY FOR DAMAGES FOR BREACH OF ANY EXPRESS OR IMPLIED
              WARRANTY OR CONDITION, BREACH OF CONTRACT, NEGLIGENCE, STRICT
              LIABILITY OR ANY OTHER LEGAL THEORY RELATED TO THE SITE OR
              SERVICE. IF, NOTWITHSTANDING THE FOREGOING, SEEKR INC. OR ONE OF
              SEEKR INC. PARTIES IS FOUND TO BE LIABLE TO YOU OR ANY THIRD PARTY
              FOR ANY DAMAGE OR LOSS WHICH ARISES UNDER OR IN CONNECTION WITH
              THESE TERMS OR THE SERVICE, SEEKR INC. OR THE RELEVANT SEEKR INC.
              PARTY’S TOTAL CUMULATIVE LIABILITY TO YOU OR ANY THIRD PARTY SHALL
              IN NO EVENT EXCEED THE GREATER OF (I) THE AMOUNT OF FEES ACTUALLY
              AID BY YOU TO SEEKR INC.DURING THE ONE (1) YEAR PERIOD PRECEDING
              THE DATE OF THE EVENT GIVING RISE TO SEEKR INC.’S LIABILITY OR
              (II) $250.00.
            </p>
          </div>
          <div className="section-block">
            <h3>Indemnification & Release</h3>
            <p>
              You hereby agree to indemnify, defend and hold harmless Seekr Inc.
              and Seekr Inc. Parties (each an “
              <span className="bolded">Indemnified Party</span>”), from and
              against any and all liability and costs (including, without
              limitation, attorneys’ fees and costs) incurred by the Indemnified
              Party(s) in connection with any actual or alleged claim arising
              out of: (a) your use of the Service; (b) any breach or alleged
              breach by you of these Terms; (c) any Feedback provided by you;
              (d) any breach or alleged breach by you of a third party’s rights,
              including, without limitation, any intellectual property, privacy
              or publicity rights; or (e) any damage caused by or alleged to
              have been caused by you to the Site or Service.
            </p>
            <p>
              Counsel you select for defense or settlement of a claim must be
              consented to by Seekr Inc. and/or the Indemnified Party(s) prior
              to counsel being engaged to represent you and Seekr Inc. and/or
              the Indemnified Party(s). You and your counsel will cooperate as
              fully as reasonably required, and provide such information as
              reasonably requested, by the Indemnified Party(s) in the defense
              or settlement of any claim. Seekr Inc. and/or the Indemnified
              Party(s) reserves the right, at its own expense, to assume the
              exclusive defense or settlement, and control of any matter
              otherwise subject to indemnification by you. You shall not in any
              event consent to any judgment, settlement, attachment, or lien, or
              any other act adverse to the interest of Seekr Inc. or any
              Indemnified Party(s) without the prior written consent of Seekr
              Inc. and/or the Indemnified Party(s).
            </p>
            <p>
              In the event that you have a dispute with any Agent or other third
              party, including without limitation any other user of the Site or
              Service, arising from or in connection with the use of the Site
              and/or Service, you hereby release, remise and forever discharge
              Seekr Inc. and its agents, directors, officers, employees,
              shareholders and all other related persons or entities from any
              and all manner of rights, complaints, demands, claims, causes of
              action, proceedings, obligations, liabilities, legal fees, costs,
              and disbursements of any nature whatsoever, whether known or
              unknown, which now or hereafter arise from, relate to, or are
              connected with such dispute or your use of the Site and/or
              Service. If you are a California resident, you hereby waive
              California civil code section 1542, which says: “a general release
              does not extend to claims which the creditor does not know or
              suspect to exist in his favor at the time of executing the
              release, which, if known by him must have materially affected his
              settlement with the debtor.” If you are a resident of a state
              other than California, you explicitly waive the terms and
              protections of any statute of your own state that has a similar
              import or intent.
            </p>
          </div>
          <div className="section-block">
            <h3>Changes to Service</h3>
            <p>
              Seekr Inc. is constantly striving to provide the best possible
              experience for its Service users. You acknowledge and agree that
              the form and nature of the Service which Seekr Inc. currently
              provides may change from time-to-time without prior notice to you,
              subject to the terms in Section 4.5. Changes to the form and
              nature of the Service will be effective with respect to all
              versions of the Service. Examples of changes to the form and
              nature of the Service include, without limitation, changes to fees
              and payment policies, security patches, additional functionality,
              reduced functionality, and other enhancements.
            </p>
          </div>
          <div className="section-block">
            <h3>Termination of Service</h3>
            <p>
              You may stop using the Service at any time by closing your
              Account, or ceasing to use the Service.
            </p>
            <p>
              Seekr Inc. reserves the right in its sole discretion to cease or
              suspend providing all or any part of the Service immediately
              without any notice to you.
            </p>
            <p>
              Any of your obligations under these Terms which by their nature
              are intended to survive the termination of your use of the
              Service, shall continue to apply to you after you cease to use the
              Service.
            </p>
            <p>
              Seekr Inc. may notify the relevant law enforcement authorities or
              other third parties, of any illegal or other prohibited conduct by
              you, including, without limitation, your violation of these Terms
              or unauthorized use of the Site or Service.
            </p>
          </div>
          <div className="section-block">
            <h3>Governing Law and Venue</h3>
            <p>
              These Terms will be construed and enforced in all respects in
              accordance with the laws of the state of Oregon, without reference
              to its choice of law rules. Except as set forth below in Section
              18.2, the federal and state courts seated in Multnomah County,
              Oregon shall have sole and exclusive jurisdiction for all purposes
              in connection with any action or proceeding that arises from, or
              relates to, these Terms and you hereby irrevocably waive any
              objection to such exclusive jurisdiction; provided however, that
              Seekr Inc. may seek to enforce any judgment in its favor in any
              court of competent jurisdiction.
            </p>
            <p>
              Notwithstanding the foregoing, Seekr Inc. may seek injunctive or
              other equitable relief in any court of competent jurisdiction to
              protect its proprietary and other rights. You agree that your
              breach of these Terms may result in immediate and irreparable
              damage to Seekr Inc. for which there is no adequate remedy at law.
            </p>
            <p>
              The United Nations Convention on Contracts for the International
              Sale of Goods in its entirety is expressly excluded from these
              Terms, including, without limitation, application to the Site or
              Service. Furthermore, these Terms (including without limitation,
              the Site and Service) will not be governed or interpreted in any
              way by referring to any law based on the Uniform Computer
              Information Transactions Act (UCITA) or any other act derived from
              or related to UCITA.
            </p>
            <p>
              Any cause of action arising under these Terms must be commenced by
              you within one (1) year after the claim or cause of action arises.
            </p>
          </div>
          <div className="section-block">
            <h3>Third Party Web Sites</h3>
            <p>
              The Site and Service may provide links to other web sites that are
              not owned or operated by Seekr Inc. (“
              <span className="bolded">Third Party Web Sites</span>”). Seekr
              Inc. provides these links to you as a convenience only, and Seekr
              Inc. does not verify, make any representations concerning, or take
              responsibility for, such Third Party Web Sites, or the products or
              services offered through such third party web sites, including,
              without limitation, the truthfulness, accuracy, quality, or
              completeness of the content of, or activities conducted on, such
              Third Party Web Sites. You should use your own independent
              judgment before accessing and using such Third Party Web Sites, or
              products or services offered through such third party web sites.
            </p>
            <p>
              These Terms and the Privacy Policy do not apply to such
              Third-Party Web Sites, and you should review such Third Party Web
              Sites’ rivacy policies, terms and conditions and business
              practices as they may be different to those of Seekr Inc. and it
              is your sole responsibility to comply with such terms. Your
              dealings and communications with any third party in connection
              with the Third Party Web Sites are solely between you and such
              third party.
            </p>
            <p>
              Any reference on the Site, or through the Service, to any product,
              process, publication or service of any third party, by trade name,
              domain name, trademark, trade identity, service mark, logo,
              manufacturer or otherwise, does not constitute or imply Seekr
              Inc.’s endorsement or recommendation thereof, and your use of any
              Third Party Web Sites and third party product, process,
              publication, or service is entirely at your own risk.
            </p>
          </div>
          <div className="section-block">
            <h3>Miscellaneous Legal Terms</h3>
            <p>
              These Terms and the Privacy Policy, together constitute the entire
              agreement between you and Seekr Inc. with respect to the Service
              (excluding any services which Seekr Inc. may provide to you under
              a separate written agreement), and completely supersedes, cancels
              and replaces any and all other written or oral agreements or
              understandings previously existing between you and Seekr Inc. with
              respect to the Service.
            </p>
            <p>
              The failure of Seekr Inc. to exercise or enforce any right or
              provision of these Terms shall not constitute a waiver of such
              right or provision.
            </p>
            <p>
              If any part of these Terms is held invalid, illegal or
              unenforceable, that provision shall be enforced to the maximum
              extent permissible so as to maintain the intent of these Terms,
              and the other parts will remain in full force and effect.
            </p>
            <p>
              Any notice or other communications by Seekr Inc. relating to the
              Service may be made by letter, e-mail or posting on the Site, and
              you hereby consent to receive notices and other communications in
              electronic form to the extent permitted by applicable law.
            </p>
            <p>
              These Terms shall not be interpreted or construed to confer any
              rights or remedies on any third parties, except that each
              Indemnified Party shall be a third party beneficiary hereunder and
              accordingly, shall be entitled to directly enforce and rely upon
              any provision of these Terms that confers a right or remedy in
              favor of it.
            </p>
            <p>
              Seekr Inc. may assign or transfer its rights, or delegate any
              performance, under these Terms to a third party in its sole
              discretion. You may not assign or otherwise transfer your rights,
              or delegate your performance, under these Terms to any third party
              without in each and every case, Seekr Inc.’s express prior written
              consent.
            </p>
            <p>
              Seekr Inc. will not be liable for failing or delaying performance
              of its obligations resulting from any condition beyond its
              reasonable control, including but not limited to, governmental
              action, acts of the common enemy, earthquake, fire, flood or other
              acts of God, the elements, epidemics, labor conditions, power
              failures, and Internet disturbances.
            </p>
            <p>
              Seekr Inc. may take any legal action against you to enforce these
              Terms or to prevent the breach of these Terms, including, without
              limitation, seeking equitable remedies or using technical means at
              its disposal.
            </p>
            <p>
              Seekr Inc. may add to, change or remove any part, term or
              condition of these Terms or Privacy Policy at any time without
              prior notice to you. It is your responsibility to check these
              Terms and Privacy Policy periodically for changes. By continuing
              to use the Service, you are indicating your acceptance of such
              changes. However, we will provide written notice to you of any
              significant changes to these Terms or Privacy Policy (including
              notices posted on the Site or sent to your registered e-mail
              address).
            </p>
            <p>
              You may not access the Service if you are a direct competitor of
              Seekr Inc.’s, except with our prior written consent. In addition,
              you may not access the Service for purposes of monitoring its
              availability, performance or functionality, or for any other
              benchmarking or competitive purposes.
            </p>
          </div>
        </div>

        <footer className="footer-section">
          <p>© 2021 Seekr Inc., Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Tos;
