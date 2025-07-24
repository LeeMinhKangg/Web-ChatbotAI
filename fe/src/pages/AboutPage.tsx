import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          {t('about.hero.title')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('about.hero.subtitle')}
        </p>
      </div>

      {/* Our story section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('about.story.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {t('about.story.paragraph1')}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            {t('about.story.paragraph2')}
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">
            {t('about.story.paragraph3')}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt={t('about.story.imageAlt')}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Values section */}
      <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10 text-center">
          {t('about.values.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              titleKey: 'about.values.quality.title',
              descriptionKey: 'about.values.quality.description',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              ),
            },
            {
              titleKey: 'about.values.customerFirst.title',
              descriptionKey: 'about.values.customerFirst.description',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ),
            },
            {
              titleKey: 'about.values.innovation.title',
              descriptionKey: 'about.values.innovation.description',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow-sm text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                {t(value.titleKey)}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-10 text-center">
          {t('about.team.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              roleKey: 'about.team.roles.founderCeo',
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              name: 'Michael Chen',
              roleKey: 'about.team.roles.cto',
              image:
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              name: 'Emily Rodriguez',
              roleKey: 'about.team.roles.headOfProduct',
              image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
            {
              name: 'David Kim',
              roleKey: 'about.team.roles.customerExperience',
              image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {t(member.roleKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold text-primary-700 dark:text-primary-400 mb-4">
          {t('about.cta.title')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
          {t('about.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/shop"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('about.cta.browseProducts')}
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium py-3 px-6 rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
          >
            {t('about.cta.contactUs')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
