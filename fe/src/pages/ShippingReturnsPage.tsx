import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ShippingReturnsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          {t('shippingReturns.title')}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('shippingReturns.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
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
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            {t('shippingReturns.features.freeShipping.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {t('shippingReturns.features.freeShipping.description')}
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            {t('shippingReturns.features.fastDelivery.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {t('shippingReturns.features.fastDelivery.description')}
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
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
                d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            {t('shippingReturns.features.easyReturns.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {t('shippingReturns.features.easyReturns.description')}
          </p>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
          {t('shippingReturns.shipping.title')}
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.shipping.methods.title')}
            </h3>
            <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
                <thead className="bg-neutral-50 dark:bg-neutral-700">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider"
                    >
                      {t('shippingReturns.shipping.methods.table.method')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider"
                    >
                      {t('shippingReturns.shipping.methods.table.deliveryTime')}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-300 uppercase tracking-wider"
                    >
                      {t('shippingReturns.shipping.methods.table.cost')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-neutral-800 divide-y divide-neutral-200 dark:divide-neutral-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">
                      {t('shippingReturns.shipping.methods.table.standard')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.standardTime')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.standardCost')}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">
                      {t('shippingReturns.shipping.methods.table.express')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.expressTime')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.expressCost')}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-white">
                      {t('shippingReturns.shipping.methods.table.international')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.internationalTime')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-400">
                      {t('shippingReturns.shipping.methods.table.internationalCost')}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.shipping.processing.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {t('shippingReturns.shipping.processing.description1')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.shipping.processing.description2')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.shipping.international.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {t('shippingReturns.shipping.international.description1')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.shipping.international.description2')}
            </p>
          </div>
        </div>
      </div>

      {/* Returns & Refunds */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
          {t('shippingReturns.returns.title')}
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.returns.policy.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {t('shippingReturns.returns.policy.description1')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.returns.policy.description2')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.returns.process.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {t('shippingReturns.returns.process.description1')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {t('shippingReturns.returns.process.description2')}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.returns.process.description3')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.returns.exchanges.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.returns.exchanges.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              {t('shippingReturns.returns.damaged.title')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {t('shippingReturns.returns.damaged.description')}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
          {t('shippingReturns.faq.title')}
        </h2>

        <div className="space-y-6">
          {[
            {
              question: t('shippingReturns.faq.questions.changeAddress.question'),
              answer: t('shippingReturns.faq.questions.changeAddress.answer'),
            },
            {
              question: t('shippingReturns.faq.questions.poBox.question'),
              answer: t('shippingReturns.faq.questions.poBox.answer'),
            },
            {
              question: t('shippingReturns.faq.questions.trackOrder.question'),
              answer: t('shippingReturns.faq.questions.trackOrder.answer'),
            },
            {
              question: t('shippingReturns.faq.questions.lostPackage.question'),
              answer: t('shippingReturns.faq.questions.lostPackage.answer'),
            },
            {
              question: t('shippingReturns.faq.questions.giftReturn.question'),
              answer: t('shippingReturns.faq.questions.giftReturn.answer'),
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 border border-neutral-200 dark:border-neutral-700"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-4">
          {t('shippingReturns.contact.title')}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-6">
          {t('shippingReturns.contact.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            {t('shippingReturns.contact.contactUs')}
          </Link>
          <Link
            to="/faqs"
            className="bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-primary-600 dark:border-primary-400 font-medium py-3 px-6 rounded-lg hover:bg-primary-50 dark:hover:bg-neutral-700 transition-colors"
          >
            {t('shippingReturns.contact.viewAllFaqs')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;
