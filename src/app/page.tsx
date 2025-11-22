"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Heart, Stethoscope, BookOpen, Zap, CheckCircle, Lightbulb, Users, Target, Network, Library, TrendingUp, DollarSign, Sparkles, Crown, Star, Building2, HelpCircle, MessageSquare, Linkedin, Twitter, Facebook } from "lucide-react";

export default function MedicalWorkshopPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="medium"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Medical Workshop"
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Enroll Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Transform Your Medical Practice"
          description="Comprehensive workshops designed to elevate your clinical skills and knowledge. Expert-led training with hands-on experience."
          tag="Certification Approved"
          tagIcon={Award}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834774408-doghadrb.jpg"
          imageAlt="Medical workshop training"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Explore Workshops", href: "features" },
            { text: "View Schedule", href: "pricing" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Mission"
          description="We are committed to providing healthcare professionals with advanced training opportunities that enhance clinical competency and patient care standards."
          tag="About Us"
          tagIcon={Heart}
          imagePosition="right"
          textboxLayout="split"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834776504-lb7fmkki.jpg"
          imageAlt="Medical education workshop"
          bulletPoints={[
            {
              title: "Expert Instructors",
              description: "Learn from leading medical professionals with decades of clinical experience",
              icon: Stethoscope
            },
            {
              title: "Updated Curriculum",
              description: "Stay current with latest medical guidelines and best practices",
              icon: BookOpen
            },
            {
              title: "Practical Focus",
              description: "Hands-on training directly applicable to your daily clinical work",
              icon: Zap
            },
            {
              title: "Continuing Education",
              description: "Earn CE credits recognized by major medical boards and organizations",
              icon: CheckCircle
            }
          ]}
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Our Workshops"
          description="Discover what sets our medical training programs apart from the rest"
          tag="Key Benefits"
          tagIcon={Lightbulb}
          textboxLayout="split"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              title: "Hands-On Training",
              description: "Interactive sessions with real-world case studies and practical simulations for immersive learning",
              icon: Users
            },
            {
              title: "Expert Faculty",
              description: "Renowned medical professionals sharing their expertise and innovative approaches to patient care",
              icon: Award
            },
            {
              title: "Small Class Size",
              description: "Limited participants ensure personalized attention and comprehensive guidance from instructors",
              icon: Target
            },
            {
              title: "Networking Events",
              description: "Connect with peers and establish professional relationships in collaborative learning environment",
              icon: Network
            },
            {
              title: "Digital Resources",
              description: "Access comprehensive study materials, video recordings, and ongoing support after workshop completion",
              icon: Library
            },
            {
              title: "Career Support",
              description: "Guidance on career advancement and credential enhancement to boost your professional growth",
              icon: TrendingUp
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Workshop Packages"
          description="Choose the package that fits your professional development needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Basic",
              badgeIcon: Sparkles,
              price: "$299",
              subtitle: "Single workshop access",
              buttons: [
                { text: "Register", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "One full-day workshop",
                "Course materials included",
                "Certificate of attendance",
                "Access to recorded session"
              ]
            },
            {
              id: "2",
              badge: "Professional",
              badgeIcon: Zap,
              price: "$699",
              subtitle: "Most popular choice",
              buttons: [
                { text: "Register", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Three workshops bundle",
                "Premium materials package",
                "CE credits certification",
                "Lifetime resource access",
                "Mentorship session"
              ]
            },
            {
              id: "3",
              badge: "Elite",
              badgeIcon: Crown,
              price: "$1299",
              subtitle: "Comprehensive training",
              buttons: [
                { text: "Register", href: "contact" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Six workshops annually",
                "VIP priority registration",
                "One-on-one coaching",
                "Advanced certification",
                "Networking events access",
                "Job placement assistance"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Participants Say"
          description="Healthcare professionals share their workshop experiences"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Emergency Medicine Physician",
              testimonial: "The workshop was incredibly comprehensive and practical. I immediately implemented new protocols in my ED. Highly recommend for any healthcare professional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834780523-2dpuptqm.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Nursing Director",
              testimonial: "Excellent instructors with real-world experience. The hands-on approach made learning engaging and relevant. My entire team benefited tremendously.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834780987-g7gp5pzq.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Internal Medicine Specialist",
              testimonial: "Outstanding content delivered by true experts. The networking opportunities were equally valuable. Worth every penny for professional development.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834781596-qype8ptf.jpg",
              imageAlt: "Dr. Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Surgical Technician",
              testimonial: "Best professional training I have attended. The materials are comprehensive and the instructors are genuinely committed to student success. Exceptional value.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834782122-semfm520.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted By Healthcare Organizations"
          description="Leading hospitals and medical institutions partner with us"
          tag="Partners"
          tagIcon={Building2}
          textboxLayout="default"
          speed={40}
          showCard={true}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834782845-pijwhf9o.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834783674-arvqgquy.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834784379-v5kkuoqd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834785127-bly69l0x.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834786577-aposhr1e.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834787521-yflvzbo3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763834788522-7rc4utu3.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Get answers to common questions about our workshop programs"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Who should attend these workshops?",
              content: "Our workshops are designed for healthcare professionals including physicians, nurses, physician assistants, and allied health professionals seeking to advance their clinical skills and knowledge."
            },
            {
              id: "2",
              title: "Are CE credits provided?",
              content: "Yes, all workshops provide Continuing Education (CE) credits that are recognized by major medical boards and professional organizations. Credits vary by workshop length and content."
            },
            {
              id: "3",
              title: "What is the class size?",
              content: "We maintain small class sizes with maximum 25 participants per workshop to ensure quality instruction and personalized attention from our expert faculty."
            },
            {
              id: "4",
              title: "Do you offer virtual options?",
              content: "Select workshops are available in hybrid format. In-person training is preferred for hands-on components, but we offer recorded access and virtual participation for theory portions."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations made 14 days prior to the workshop receive a full refund. Within 14 days, a 50% refund is offered. No refunds are given for cancellations within 7 days."
            },
            {
              id: "6",
              title: "Can my organization sponsor multiple participants?",
              content: "Absolutely. We offer group discounts for organizations enrolling 5+ participants. Contact our team for custom pricing and bulk registration options."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready to Enroll?"
          description="Join healthcare professionals committed to excellence. Register for your workshop today and take the next step in your medical career."
          tagIcon={MessageSquare}
          inputPlaceholder="your@email.com"
          buttonText="Enroll Now"
          termsText="By enrolling, you agree to receive workshop information and updates. We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Medical Workshop"
          copyrightText="© Medical Workshop Institute, 2025. All rights reserved."
          columns={[
            {
              title: "Workshops",
              items: [
                { label: "Clinical Training", href: "features" },
                { label: "Pricing", href: "pricing" },
                { label: "Schedule", href: "pricing" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Mission", href: "about" },
                { label: "Faculty", href: "#" },
                { label: "Testimonials", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" },
                { label: "Terms & Conditions", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Accessibility", href: "#" },
                { label: "Certifications", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}