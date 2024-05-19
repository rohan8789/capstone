import React from "react";

const Faq = () => {
  return (
    <div class="m-5 accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What is mission Shakti
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Ans:- ‘Mission Shakti’, an Integrated Women Empowerment Programme,
            is the Umbrella Scheme for the Safety, Security and Empowerment of
            Women of the Government of India for implementation during the 15th
            Finance Commission period from 2021-22 to 2025-26. It aims at
            strengthening interventions for safety, security and empowerment of
            women in a mission mode through convergence and institutional
            mechanism.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What is pradhan mantri matru vandana yojana
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Answer: Pradhan Mantri Matru Vandana Yojana (PMMVY) is a maternity
            benefit scheme under Ministry of Women and Child development. It was
            launched pan India with effect from 01.01.2017. The PMMVY Scheme is
            being implemented as per provisions under Section 4 of the National
            Food Security Act (NFSA), 2013 which provides for financial support
            for pregnant and lactating mothers to improve the health and
            nutrition for mother and child as well as compensation for wage
            loss, if any
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is Aadhaar required to enrol in the scheme?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Answer: Pradhan Mantri Matru Vandana Yojana (PMMVY) is one of the
            components under Mission Shakti notified and Mission SHAKTI is
            notified under Section 7 of Aadhaar (Targeted Delivery of Financial
            and Other Subsidiaries, Benefits and Services) Act, 2016. So,
            AADHAAR of beneficiary is mandatory for availing the scheme.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is there any online platform for Pradhan Mantri Matru Vandana Yojana
            and how it will be useful for common public?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Answer: Yes, one dedicated portal has been developed for Pradhan
            Mantri Matru Vandana Yojana. The URL is https://pmmvy.wcd.gov.in.The
            online application form has been simplified. New Features of PMMVY
            Portal are: • First-time self-registration provision for citizens
            has been introduced across the country • The online application form
            has been simplified. • All the mandatory provisions like Aadhaar,
            Aadhaar based payment etc. will be checked at the time of
            registration for smooth and efficient process. • Mobile number has
            been made mandatory for providing information regarding the status
            of application and disbursement of fund • Mobile App has been
            introduced for registration under Pradhan Mantri Matru Vandana
            Yojana (PMMVY) • Field functionaries like Anganwadi Workers / ASHA
            workers can fill the application online for the beneficiary in their
            jurisdiction
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Are there any additional responsibilities for Anganwadi worker/ASHA
            worker under PMMVY 2.0?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            Answer: Under PMMVY 2.0, Anganwadi worker/ASHA worker should be
            aware of the new cash incentives for first child and second child,
            if girl child. The PMMVY benefit is given for first child Rs 5000/-
            in two instalments (first instalment after ANC and second instalment
            after the child birth and 14 weeks of universal immunization) and
            second child (if girl child) Rs 6000/- in a single instalment after
            the child birth and completion of 14 week of universal immunization.
            The husband's Aadhaar is not required for availing the benefit of
            PMMVY.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Faq;






