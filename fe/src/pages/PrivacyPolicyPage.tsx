import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          {t('privacyPolicy.title')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('privacyPolicy.lastUpdated')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8 mb-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            {t('privacyPolicy.introduction')}
          </p>

          <h2>{t('privacyPolicy.informationWeCollect.title')}</h2>
          <p>
            {t('privacyPolicy.informationWeCollect.description')}
          </p>
          <ul>
            <li>
              <strong>{t('privacyPolicy.informationWeCollect.personalInfo.title')}</strong> {t('privacyPolicy.informationWeCollect.personalInfo.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.informationWeCollect.transactionInfo.title')}</strong> {t('privacyPolicy.informationWeCollect.transactionInfo.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.informationWeCollect.logData.title')}</strong> {t('privacyPolicy.informationWeCollect.logData.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.informationWeCollect.cookies.title')}</strong> {t('privacyPolicy.informationWeCollect.cookies.description')}
            </li>
          </ul>

          <h2>{t('privacyPolicy.howWeUse.title')}</h2>
          <p>
            {t('privacyPolicy.howWeUse.description')}
          </p>
          <ul>
            {t('privacyPolicy.howWeUse.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t('privacyPolicy.sharingInfo.title')}</h2>
          <p>
            {t('privacyPolicy.sharingInfo.description')}
          </p>
          <ul>
            <li>
              <strong>{t('privacyPolicy.sharingInfo.serviceProviders.title')}</strong> {t('privacyPolicy.sharingInfo.serviceProviders.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.sharingInfo.businessTransfers.title')}</strong> {t('privacyPolicy.sharingInfo.businessTransfers.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.sharingInfo.legalRequirements.title')}</strong> {t('privacyPolicy.sharingInfo.legalRequirements.description')}
            </li>
            <li>
              <strong>{t('privacyPolicy.sharingInfo.withConsent.title')}</strong> {t('privacyPolicy.sharingInfo.withConsent.description')}
            </li>
          </ul>

          <h2>{t('privacyPolicy.dataSecurity.title')}</h2>
          <p>
            {t('privacyPolicy.dataSecurity.description')}
          </p>

          <h2>{t('privacyPolicy.yourRights.title')}</h2>
          <p>
            {t('privacyPolicy.yourRights.description')}
          </p>
          <ul>
            {t('privacyPolicy.yourRights.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            {t('privacyPolicy.yourRights.exerciseRights')}
          </p>

          <h2>{t('privacyPolicy.cookies.title')}</h2>
          <p>
            {t('privacyPolicy.cookies.description')}
          </p>

          <h2>{t('privacyPolicy.childrenPrivacy.title')}</h2>
          <p>
            {t('privacyPolicy.childrenPrivacy.description')}
          </p>

          <h2>{t('privacyPolicy.changes.title')}</h2>
          <p>
            {t('privacyPolicy.changes.description')}
          </p>

          <h2>{t('privacyPolicy.contact.title')}</h2>
          <p>
            {t('privacyPolicy.contact.description')}
            <br />
            {t('privacyPolicy.contact.email')}
            <br />
            {t('privacyPolicy.contact.phone')}
            <br />
            {t('privacyPolicy.contact.address')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          {t('privacyPolicy.footer.description')}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          {t('privacyPolicy.footer.contactButton')}
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
