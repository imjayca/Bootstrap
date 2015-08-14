var summary = [
    "6 years of experience & knowledge in domains: Ecommerce, Retail, Bank & Insurance",
    "In depth understanding of the SDLC Methodologies like Waterfall, Agile (SCRUM, RUP)",
    "Worked on Ecommerce CMS like ATG Web Commerce, WordPress, Drupal",
    "Experienced in Mobile Optimization, App Development & Security, Loan Origination & ESCROW Administration",
    "Excellent correspondence skillsets directly with Stakeholder, SME's and end clients to gather and make an interpretation of requirements into detailed project development strategies for effective deployments",
    "Skillful requirement gathering for BRD, Business Case, FRD, SRS, Deployment Plan, Reliability Requirements etc.",
    "Expert in Facilitation and Elicitation Techniques like JAD, JAR, Walkthrough, Interviews, Surveys and Prototyping",
    "Extensive knowledge in Gap, Risk, Impact & Cost-Benefit Analysis",
    "Skilled Use Case Modeler in conjunction with the project team for a successful completion",
    "Proficient in creating UML diagram like Activity Diagram, Business Process Diagram (BPD), Business Use Cases, Data Flow, Decision Tree, Entity Relationship Diagram (ERD), Sequence Diagrams, and Swimlane Diagrams",
    "Expertise in creating Test Plans, Test Scripts and Test Cases from the Requirements documents for distinguished testing efforts viz. Integration, System, Functional, Regression, Performance and UAT",
    "Experience in creating Project Plans for project management related activities",
    "Extensive knowledge of writing SQL queries, Data Modelling & Data Analysis",
    "Experience in handling Defects and Change Management",
    "Creative visual solutions for Data Visualization & Business Presentation",
    "Experience in working with onsite, offsite and offshore business partners & teams"
];


var summaryList = "";

for (var i = 0; i < summary.length; i++) {
    summaryList += "<li>" + summary[i] + "</li>";
}

document.getElementById("mysummery").innerHTML = summaryList;
