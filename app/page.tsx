import BannerLayout from "../component/BannerLayout";
import BannerLayout9 from "../component/BannerLayout9";
import BannerLayout7 from "../component/BannerLayout7";
import BusinessesSection from "../component/BusinessesSection";
import EInsuranceSection from "../component/EInsuranceSection";
import NetworkSection from "../component/NetworkSection";
import ContactSection from "../component/ContactSection";

export default function Home() {
  return (
    <main>
      {/* Hero + About — original BannerLayout with Automark data */}
      <BannerLayout />

      {/* Insurance Services — original stacking cards layout */}
      <BannerLayout9 />

      {/* Why Choose Us / Advisory Process — original dark sticky layout */}
      <BannerLayout7 />

      {/* Commercial & Corporate */}
      <BusinessesSection />

      {/* e-Insurance Account */}
      <EInsuranceSection />

      {/* Insurer Network + Testimonials */}
      <NetworkSection />

      {/* Contact / Free Quote Form */}
      <ContactSection />
    </main>
  );
}
