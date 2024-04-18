import CTASectiont from "../components/homepage/CTASectiont";
import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import PricingSection from "../components/homepage/PricingSection";

//import CoreServices from "../components/services/CoreServices";
import ManageHealthSection from "../components/services/ManageHealthSection";
import SaveTimeMoneySection from "../components/services/SaveTimeMoneySection";
import UnlimitedPayrolls from "../components/services/UnlimitedPayrolls";
import BreadcrumbSection from "../components/ui/BreadcrumbSection";
import breadcrumpIllus from "/images/service1.png";
function ServicesPage() {
  return (
    <main>
      <BreadcrumbSection
        img={breadcrumpIllus}
        pageName="Services"
        pageDesc="Welcome to AccuPay, your trusted partner for comprehensive financial
            solutions. Explore our range of services tailored to meet your
            business needs."
        pageTitle="Our All Services"
      />
      <ManageHealthSection/>
      <SaveTimeMoneySection/>
    <UnlimitedPayrolls/>
      <ContactUsSection />
      <PricingSection />
      <FaqSection />
      <CTASectiont />
    </main>
  );
}

export default ServicesPage;
