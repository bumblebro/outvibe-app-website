
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-6xl font-serif-brand text-[#3D1F00] mb-10 italic uppercase">Privacy Policy</h1>
      <p className="text-slate-400 mb-12 font-medium tracking-wide uppercase text-xs font-mono">Effective Date: March 2026</p>
      
      <div className="space-y-12 text-slate-600 leading-relaxed font-light text-lg">
        <section className="space-y-4">
          <p>OutVibe (“we,” “us,” or “our”) operates the OutVibe mobile application and website (the “Service”).</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and protect your information when you use OutVibe.</p>
          <p>By using the Service, you agree to this Privacy Policy.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">1. INFORMATION WE COLLECT</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">1.1 Information You Provide</h3>
              <p>We collect information you provide directly, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, username, and profile details</li>
                <li>Profile photo</li>
                <li>Content you create (“Vibes”), including photos, descriptions, and locations</li>
                <li>Messages, comments, or communication within the app</li>
                <li>Activity participation details</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">1.2 Location Information</h3>
              <p>We may collect location data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Show Vibes on maps</li>
                <li>Enable activity discovery near you</li>
              </ul>
              <p>Location access is optional and can be controlled through your device settings.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">1.3 Media and Files</h3>
              <p>With your permission, we access:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Photos you upload to create Vibes</li>
              </ul>
              <p>We do not access your media without your consent.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">1.4 Automatically Collected Information</h3>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (device type, OS version)</li>
                <li>App usage data</li>
                <li>Log data (IP address, timestamps)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">2. HOW WE USE YOUR INFORMATION</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve the Service</li>
            <li>Display your content to other users</li>
            <li>Enable social connections through shared Vibes</li>
            <li>Show relevant activities and locations</li>
            <li>Ensure safety and prevent misuse</li>
            <li>Communicate with you (updates, notifications, support)</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">3. HOW YOUR INFORMATION IS SHARED</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">3.1 Public Content</h3>
              <p>OutVibe is a social platform. Information you share may be visible to others:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your profile may be publicly viewable</li>
                <li>Vibes and content may be visible to other users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">3.2 With Other Users</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shared Vibes may include content from multiple users</li>
                <li>Your username and profile may appear in shared experiences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">3.3 Service Providers</h3>
              <p>We may share information with third-party providers that help us operate the Service, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud storage providers</li>
                <li>Analytics tools</li>
                <li>Map services (e.g., Mapbox)</li>
              </ul>
              <p>These providers only process data on our behalf.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#3D1F00] mb-4">3.4 Legal Requirements</h3>
              <p>We may disclose information if required by law or to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protect our rights</li>
                <li>Prevent fraud or abuse</li>
                <li>Ensure user safety</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">4. DATA RETENTION</h2>
          <p>We retain your information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>As long as your account is active</li>
            <li>As necessary to comply with legal obligations</li>
          </ul>
          <p>You may request deletion of your account and data.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">5. YOUR RIGHTS AND CHOICES</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your data</li>
            <li>Update or correct your information</li>
            <li>Delete your account</li>
            <li>Control app permissions (location, photos)</li>
          </ul>
          <p>To request deletion, contact us at: <a href="mailto:outvibesocial@gmail.com" className="text-[#FF6B00] hover:underline">outvibesocial@gmail.com</a></p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">6. DATA SECURITY</h2>
          <p>We implement reasonable security measures to protect your data.</p>
          <p>However, no system is completely secure. Use the Service at your own risk.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">7. CHILDREN’S PRIVACY</h2>
          <p>OutVibe is not intended for children under 13.</p>
          <p>We do not knowingly collect data from children. If we become aware, we will delete such data.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">8. INTERNATIONAL USERS</h2>
          <p>Your data may be processed and stored in servers located outside your country.</p>
          <p>By using the Service, you consent to this transfer.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] italic">9. CHANGES TO THIS POLICY</h2>
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Continued use of the Service means you accept the updated policy.</p>
        </section>

        <section className="p-10 bg-orange-50 rounded-[3rem] border border-orange-100">
          <h2 className="text-3xl font-serif-brand text-[#3D1F00] mb-6 italic text-center">10. CONTACT US</h2>
          <p className="text-center mb-6">If you have questions or concerns, contact us at:</p>
          <div className="flex justify-center">
            <a href="mailto:outvibesocial@gmail.com" className="text-2xl font-bold text-[#FF6B00] hover:underline decoration-2 underline-offset-8">
              outvibesocial@gmail.com
            </a>
          </div>
        </section>

        <p className="text-center font-bold text-[#3D1F00] mt-12 pb-12">
          By using OutVibe, you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
