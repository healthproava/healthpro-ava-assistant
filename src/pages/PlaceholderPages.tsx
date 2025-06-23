import React from 'react';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold">{title} - Coming Soon</h1>
  </div>
);

export const PricingPage = () => <PlaceholderPage title="Pricing" />;
export const AboutPage = () => <PlaceholderPage title="About Us" />;
export const BlogPage = () => <PlaceholderPage title="Blog" />;
export const KnowledgeBasePage = () => <PlaceholderPage title="Knowledge Base" />;
export const CaseStudiesPage = () => <PlaceholderPage title="Case Studies" />;
export const FAQPage = () => <PlaceholderPage title="FAQ" />;
export const ApiDocsPage = () => <PlaceholderPage title="API Documentation" />;
export const ContactSalesPage = () => <PlaceholderPage title="Contact Sales" />;
export const PrivacyPolicyPage = () => <PlaceholderPage title="Privacy Policy" />;
export const TermsOfServicePage = () => <PlaceholderPage title="Terms of Service" />;
export const CookiePolicyPage = () => <PlaceholderPage title="Cookie Policy" />;
