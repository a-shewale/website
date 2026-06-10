import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Nov 2024 – May 2026",
            title: "Senior Data Analyst",
            company: "LLUBRAEB Analytics",
            type: "Remote",
            bullets: [
                "Led a cross-functional analytics unit by mentoring junior analysts on research methodologies, which accelerated report delivery velocity by 40% and prioritized team workloads.",
                "Leveraged market knowledge and client feedback to propose new data endpoints or asset class coverages to the executive team.",
                "Maintained the integrity of the F&O infrastructure by calibrating and validating quantitative pricing models (e.g., Black-Scholes) to ensure accurate calculation of real-time Greeks and Implied Volatility surfaces.",
                "Developed 20+ custom data feeds and specialized historical datasets by analyzing clients' algorithmic trading requirements, tailoring deliverables to integrate seamlessly with their proprietary execution engines."
            ]
        },
        {
            year: "Mar 2024 – Nov 2024",
            title: "Data Analyst",
            company: "100x (formerly Home.LLC)",
            type: "Remote",
            bullets: [
                "Executed the migration of 100+ Mode reports by utilizing Python, SQL, Snowflake, and AWS, capturing $50,000 in net revenue through infrastructure modernization.",
                "Integrated complex datasets using advanced SQL and database management protocols, elevating data accuracy by 20% to guide key investment strategies.",
                "Developed 100+ interactive data visualizations and dashboards in Power BI, amplifying housing market insights and driving a 25% increase in stakeholder engagement across digital platforms.",
                "Directed mentorship programs for junior analysts to establish best practices, which optimized task efficiency by 25% and streamlined departmental recruitment workflows."
            ]
        },
        {
            year: "Sep 2023 – Feb 2024",
            title: "Research Analyst",
            company: "100x (formerly Home.LLC)",
            type: "Remote",
            bullets: [
                "Conducted quantitative research on residential real estate markets using historical pricing data and economic indicators, forecasting home price appreciation (HPA) and investment risk.",
                "Performed deep-dive demographic and regulatory analysis on new target markets, identifying high-yield ZIP codes to facilitate the company's expansion for home equity investments.",
                "Built and maintained automated dashboards to track critical business metrics—including Speed-to-Lead, Engagement Rates, and ROI—translating complex datasets into actionable summaries.",
                "Identified operational bottlenecks within the property valuation workflow, proposing and implementing data-driven solutions that reduced manual research time by 50%."
            ]
        },
        {
            year: "Jul 2022 – Aug 2023",
            title: "Onboarding Specialist & Customer Success Exec.",
            company: "BusinessOnBot",
            type: "On-site",
            bullets: [
                "Managed the end-to-end onboarding lifecycle by streamlining WhatsApp Business API integration and official account verification, reducing average onboarding turnaround time from 15 days to 7 days.",
                "Conducted comprehensive product demonstrations and training sessions for client teams on the Unified Inbox, securing an 80% platform adoption rate and a 9/10 NPS.",
                "Led the integration of product catalogs and payment gateways with e-commerce platforms (Shopify, WooCommerce, Magento) to enable seamless in-chat transactions and automated checkout flows.",
                "Consulted with clients to deploy targeted customer journeys based on user behavior (e.g., Abandoned Cart Recovery), directly increasing client conversion rates by 10% and mitigating churn risk.",
                "Served as the primary liaison between clients and the Product and Engineering teams to resolve technical blockers and influence the product roadmap using direct user feedback."
            ]
        },
        {
            year: "Dec 2021 – Jul 2022",
            title: "Business Analyst",
            company: "XL Dynamics",
            type: "On-site",
            bullets: [
                "Managed high-volume data entry within a proprietary ERP system, ensuring database integrity and document security for sensitive financial records.",
                "Conducted comprehensive credit and financial analysis of U.S. mortgage applications by assessing borrower income, assets, and liabilities to accurately determine risk levels.",
                "Maintained a zero-error quality standard while consistently meeting daily processing targets in a high-pressure, fast-paced environment."
            ]
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2 border-b border-gray-100 pb-4">
                                    <div className="order-2 md:order-1">
                                        <h3 className="text-2xl font-bold text-black">{exp.company}</h3>
                                        <h4 className="text-xl text-primary font-medium mt-1">{exp.title}</h4>
                                    </div>
                                    <div className="order-1 md:order-2 text-left md:text-right w-full md:w-auto bg-softGray md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none mb-4 md:mb-0">
                                        <p className="text-lg font-bold text-gray-800 whitespace-nowrap">{exp.year}</p>
                                        <p className="text-base text-gray-500 mt-1">{exp.type}</p>
                                    </div>
                                </div>
                                <ul className="list-disc pl-5 space-y-3">
                                    {exp.bullets.map((bullet, bIndex) => (
                                        <li key={bIndex} className="leading-relaxed text-gray-800 text-justify">{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;