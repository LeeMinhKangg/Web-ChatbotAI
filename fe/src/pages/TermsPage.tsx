import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          {t('terms.title')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('terms.lastUpdated')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8 mb-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            {t('terms.introduction')}
          </p>

          <h2>{t('terms.definitions.title')}</h2>
          <p>
            {t('terms.definitions.description')}
          </p>

          <h2>{t('terms.license.title')}</h2>
          <p>
            {t('terms.license.description1')}
          </p>
          <p>{t('terms.license.description2')}</p>
          <ul>
            {t('terms.license.restrictions', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t('terms.userAccount.title')}</h2>
          <p>
            {t('terms.userAccount.description')}
          </p>

          <h2>{t('terms.productsServices.title')}</h2>
          <p>
            {t('terms.productsServices.description1')}
          </p>
          <p>
            {t('terms.productsServices.description2')}
          </p>

          <h2>{t('terms.accuracyInfo.title')}</h2>
          <p>
            {t('terms.accuracyInfo.description')}
          </p>

          <h2>{t('terms.orderingPayment.title')}</h2>
          <p>
            {t('terms.orderingPayment.description1')}
          </p>
          <p>
            {t('terms.orderingPayment.description2')}
          </p>

          <h2>{t('terms.shippingDelivery.title')}</h2>
          <p>
            {t('terms.shippingDelivery.description')}
          </p>

          <h2>{t('terms.returnsRefunds.title')}</h2>
          <p>
            {t('terms.returnsRefunds.description')}
          </p>

          <h2>{t('terms.limitationLiability.title')}</h2>
          <p>
            {t('terms.limitationLiability.description')}
          </p>

          <h2>{t('terms.indemnification.title')}</h2>
          <p>
            {t('terms.indemnification.description')}
          </p>

          <h2>{t('terms.severability.title')}</h2>
          <p>
            {t('terms.severability.description')}
          </p>

          <h2>{t('terms.termination.title')}</h2>
          <p>
            {t('terms.termination.description')}
          </p>

          <h2>{t('terms.governingLaw.title')}</h2>
          <p>
            {t('terms.governingLaw.description')}
          </p>

          <h2>{t('terms.changesToTerms.title')}</h2>
          <p>
            {t('terms.changesToTerms.description')}
          </p>

          <h2>{t('terms.contactInfo.title')}</h2>
          <p>
            {t('terms.contactInfo.description')}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          {t('terms.footer.description')}
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          {t('terms.footer.contactButton')}
        </Link>
      </div>
    </div>
  );
};

export default TermsPage;
