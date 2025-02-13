import React from 'react';
import { User, Mail, MapPin, Linkedin, BookOpen, Award, Briefcase, Heart } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Muhammad Saad</h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Saadk4423@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Islamabad, PK</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Work Experience */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>

            {/* OneKode */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Product Specialist at OneKode</h3>
                <span className="text-gray-600">Sep. 2024 – Present</span>
              </div>
              <p className="text-gray-600 mb-4">
                OneKode is a SaaS company specializing in no-code development, enabling rapid product creation while reducing startup costs.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  Led cross-functional teams, driving the end-to-end product lifecycle from ideation to launch while optimizing development efficiency.
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  Developed clear and actionable technical documentation, improving collaboration across engineering, design, and business teams.
                </li>
                <li className="flex gap-2 font-medium">
                  <span className="text-blue-600">•</span>
                  Key Results: $100K+ in sales; 2 returning customers; improved customer satisfaction.
                </li>
              </ul>
            </div>

            {/* Remoto */}
            <div className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">Product Manager at Remoto</h3>
                <span className="text-gray-600">Jan. 2023 – Aug. 2024</span>
              </div>
              <p className="text-gray-600 mb-4">
                Remotoco is a technology company focused on remote work solutions, helping professionals collaborate efficiently.
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  Led a comprehensive overhaul of the Remotoco product, driving its complete revamp.
                </li>
                <li className="flex gap-2 font-medium">
                  <span className="text-blue-600">•</span>
                  Key Results: $80K raised in pre-seed; partnered with Deel; 1000+ registered users on the platform.
                </li>
              </ul>
            </div>

            {/* Other Experience */}
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-medium">Founder & Full Stack Developer at Internabad</h4>
                <p className="text-gray-600">Aug. 2022 – Dec. 2022</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-medium">Founder & Lead Developer at GeoContacts</h4>
                <p className="text-gray-600">Feb. 2021 – July. 2022</p>
                <p className="text-sm mt-1">1000+ downloads on Play Store; 5-star rating</p>
              </div>
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Education & Certifications</h2>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">FAST NUCES</h3>
              <p className="text-gray-600">Bachelors of Science in Computer Sciences</p>
              <p className="text-gray-600">Islamabad, PK • 2020</p>
            </div>
            <div>
              <h4 className="font-medium">Certifications</h4>
              <p className="text-gray-600">Udemy Course - Become a Product Manager | Learn the Skills & Get the Job (2022)</p>
            </div>
          </section>

          {/* Skills & Interests */}
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Product Management', 'Strategic Planning', 'Product Development', 'API Integrations', 
                  'Solutions Analysis', 'Market Research', 'Software Development', 'Product Roadmapping'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold">Interests</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Weightlifting', 'Entrepreneurship', 'Cricket', 'Traveling', 'F.R.I.E.N.D.S'].map((interest) => (
                  <span key={interest} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
