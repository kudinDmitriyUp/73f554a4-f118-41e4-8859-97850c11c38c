"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroLogoBillboardSplit from '@/components/sections/hero/HeroLogoBillboardSplit';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Linkedin, Mail, TrendingUp, Twitter, Users, Zap } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="largeSizeMediumTitles"
      background="plain"
      cardStyle="shadow-colored"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Strategy", id: "strategy" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "News", id: "news" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Joule"
          bottomLeftText="High-conviction investing"
          bottomRightText="hello@joulevc.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplit
          logoText="Joule"
          description="High-conviction investors delivering top asset class returns. First-check partners for Israeli founders commercializing enterprise-grade solutions in U.S. markets."
          buttons={[
            { text: "Portfolio", href: "#portfolio" },
            { text: "Connect", href: "#contact" }
          ]}
          layoutOrder="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006444080-y4a0id2m.jpg"
          imageAlt="Tech founders collaborating on enterprise solutions"
          frameStyle="browser"
          ariaLabel="Joule Ventures hero section"
        />
      </div>

      <div id="strategy" data-section="strategy">
        <MediaSplitAbout
          title="Our Strategy"
          description="We are day-one partners for Israeli entrepreneurs solving for an array of problems in the enterprise world. Our focus on forming the right relationships and delivering tangible value cuts a clear path to accelerated U.S. commercialization for founders. Partner-only, always. We don't waste time with hierarchy. Our conviction in founders attracts the best operational talent. We help build the team that makes the difference."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006445221-ufa798wq.jpg"
          imageAlt="Enterprise technology infrastructure"
          buttons={[{ text: "Learn More", href: "#" }]}
          imagePosition="right"
          useInvertedBackground="noInvert"
          ariaLabel="Investment strategy section"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <FeatureCardThree
          title="Portfolio"
          description="Companies we back are solving critical enterprise challenges with innovative, scalable solutions"
          tag="Featured Companies"
          features={[
            {
              id: "01",
              title: "Enterprise Security",
              description: "Advanced cybersecurity and threat detection platforms protecting Fortune 500 organizations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006446842-2x1izguc.jpg",
              imageAlt: "Enterprise security infrastructure"
            },
            {
              id: "02",
              title: "Cloud Infrastructure",
              description: "Next-generation cloud computing and data center solutions optimizing enterprise operations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006447648-ym8ixg49.jpg",
              imageAlt: "Cloud computing infrastructure"
            },
            {
              id: "03",
              title: "AI & Analytics",
              description: "Machine learning and artificial intelligence platforms enabling data-driven enterprise decisions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006448434-hqjhqxkw.jpg",
              imageAlt: "Artificial intelligence technology"
            },
            {
              id: "04",
              title: "Business Automation",
              description: "Enterprise automation platforms reducing operational costs and increasing efficiency at scale",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006445221-ufa798wq.jpg",
              imageAlt: "Business automation system"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Portfolio companies section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Impact"
          description="Delivering exceptional returns through strategic partnerships and founder-focused investing"
          tag="Results"
          metrics={[
            {
              id: "1",
              value: "$2.3B",
              title: "Assets Under Management",
              description: "Capital deployed across portfolio companies",
              icon: TrendingUp
            },
            {
              id: "2",
              value: "45+",
              title: "Portfolio Companies",
              description: "Israeli founders backed since 2015",
              icon: Users
            },
            {
              id: "3",
              value: "12",
              title: "Successful Exits",
              description: "Companies acquired by global leaders",
              icon: Award
            },
            {
              id: "4",
              value: "3x",
              title: "Average MOIC",
              description: "Multiple on Invested Capital delivered",
              icon: Zap
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Impact metrics section"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardEleven
          title="Leadership"
          description="Experienced partners with deep expertise in enterprise software and Israeli tech ecosystems"
          tag="Team"
          groups={[
            {
              id: "partners",
              groupTitle: "Partners",
              members: [
                {
                  id: "1",
                  title: "Founder & General Partner",
                  subtitle: "20+ years venture capital experience",
                  detail: "Previously led enterprise investments at top-tier firms",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006449250-paqdkcl3.jpg",
                  imageAlt: "General Partner headshot"
                },
                {
                  id: "2",
                  title: "Operating Partner",
                  subtitle: "Former CTO of Fortune 500 company",
                  detail: "Provides operational guidance to portfolio companies",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006449964-iyt2twox.jpg",
                  imageAlt: "Operating Partner headshot"
                },
                {
                  id: "3",
                  title: "Investment Partner",
                  subtitle: "Early-stage enterprise software expert",
                  detail: "Focuses on Israeli-US market opportunities",
                  imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006450738-h9263mtg.jpg",
                  imageAlt: "Investment Partner headshot"
                }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Team members section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="From Our Founders"
          description="What Israeli founders say about partnering with Joule"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",
              quote: "Joule understood our vision immediately and opened doors we couldn't access on our own. They're true partners, not just capital.",
              name: "David Roth",
              role: "CEO & Co-Founder, Enterprise Security Solutions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006449250-paqdkcl3.jpg",
              imageAlt: "David Roth"
            },
            {
              id: "2",
              quote: "The team's operational guidance was invaluable. They brought the exact expertise we needed to scale our enterprise go-to-market.",
              name: "Yael Mendelson",
              role: "Founder, Cloud Infrastructure Platform",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006449964-iyt2twox.jpg",
              imageAlt: "Yael Mendelson"
            },
            {
              id: "3",
              quote: "Beyond capital, Joule connected us with key enterprise customers and operational leaders who accelerated our trajectory.",
              name: "Assaf Glazer",
              role: "Co-Founder, AI Analytics Platform",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006450738-h9263mtg.jpg",
              imageAlt: "Assaf Glazer"
            },
            {
              id: "4",
              quote: "They genuinely care about founder success and use their extensive network to provide real value. A different breed of VC.",
              name: "Noa Simcha",
              role: "Founder, Enterprise Automation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006451340-bbrvvsi9.jpg",
              imageAlt: "Noa Simcha"
            },
            {
              id: "5",
              quote: "What impressed me most was their hands-on approach. They're not passive investors - they're building with you.",
              name: "Eli Baron",
              role: "Founder, SaaS Compliance Tools",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006452223-exsiyvx3.jpg",
              imageAlt: "Eli Baron"
            },
            {
              id: "6",
              quote: "Joule's network in Silicon Valley and their understanding of Israeli tech gave us the perfect competitive advantage.",
              name: "Roni Golan",
              role: "CEO, B2B Data Platform",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006452801-f5murte5.jpg",
              imageAlt: "Roni Golan"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Founder testimonials section"
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofTwo
          title="Trusted Ecosystem"
          description="Working with leading companies and institutions in enterprise tech and venture capital"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006454594-af11849u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006455345-mbo9d750.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006455950-63gcijxc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006456669-hiua4tvv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006457502-oh9w93s1.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Partner logos section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Everything you need to know about investing with Joule"
          tag="FAQ"
          faqs={[
            {
              id: "1",
              title: "What stage companies do you invest in?",
              content: "We focus on Series A through Series C Israeli founders with enterprise-grade solutions ready for U.S. market expansion. We typically invest $5-15M in our core investments."
            },
            {
              id: "2",
              title: "How do you differ from other VCs?",
              content: "Our partner-first approach means we provide hands-on operational support, direct access to enterprise networks, and a deep understanding of both Israeli and U.S. markets."
            },
            {
              id: "3",
              title: "What is your investment thesis?",
              content: "We back Israeli founders solving complex enterprise problems with proprietary technology. We focus on defensible B2B solutions with recurring revenue models."
            },
            {
              id: "4",
              title: "Do you lead or follow rounds?",
              content: "We typically lead our core investments and reserve capacity for follow-on funding to support founder-friendly terms and long-term ownership support."
            },
            {
              id: "5",
              title: "How involved are you post-investment?",
              content: "We take board seats, provide strategic guidance, open doors to enterprise customers, and help build critical operational teams for scaling in the U.S."
            },
            {
              id: "6",
              title: "How can Israeli founders get in touch?",
              content: "Contact us at hello@joulevc.com with a brief overview of your company, traction, and vision. We review all applications and respond personally."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766006453523-mwzhhs9z.jpg"
          imageAlt="Investors discussing investment strategies"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="Frequently asked questions section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to build the future of enterprise? Let's talk."
          animationType="entrance-slide"
          inputPlaceholder="your@email.com"
          buttonText="Connect"
          useInvertedBackground="noInvert"
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Joule Ventures"
          copyrightText="© Joule Ventures, Inc. 2025. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "Strategy", href: "#strategy" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Team", href: "#team" },
                { label: "News", href: "#news" }
              ]
            },
            {
              title: "Investors",
              items: [
                { label: "Updates", href: "#" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Founders",
              items: [
                { label: "Get Started", href: "#contact" },
                { label: "Our Thesis", href: "#strategy" },
                { label: "Apply", href: "#contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@joulevc.com", ariaLabel: "Email" }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}