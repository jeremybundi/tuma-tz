// Context.tsx
import React from 'react';

const TransactionLimits: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="md:text-4xl text-3xl text-center font-bold text-gray-800 mb-4">Tuma Ventures Limited – Transaction Limits in Tanzania</h1>
      <p className="text-gray-700 md:text-lg text-sm mb-8">
        Tuma Ventures Limited, a licensed PSP under the Bank of Tanzania, implements a <span className="font-semibold">tiered system</span> to ensure secure, compliant transactions. Limits are defined per transaction, daily, and annual incoming funds.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Transaction Limits</h2>

      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase md:text-sm text-[13px] leading-normal">
              <th className="py-3 px-6 border-b border-gray-200">Tier</th>
              <th className="py-3 px-6 border-b border-gray-200">Max per Transfer</th>
              <th className="py-3 px-6 border-b border-gray-200">Max Daily Transfer</th>
              <th className="py-3 px-6 border-b border-gray-200">Max Annual Incoming Limit</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 whitespace-nowrap">1 – Basic Tier</td>
              <td className="py-3 px-6">TZS 1,000,000</td>
              <td className="py-3 px-6">TZS 1,000,000</td>
              <td className="py-3 px-6">TZS 30,000,000</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 whitespace-nowrap">2 – Intermediate Tier</td>
              <td className="py-3 px-6">TZS 3,000,000</td>
              <td className="py-3 px-6">TZS 3,000,000</td>
              <td className="py-3 px-6">TZS 200,000,000</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-6 whitespace-nowrap">3 – Advanced Tier</td>
              <td className="py-3 px-6">TZS 10,000,000</td>
              <td className="py-3 px-6">TZS 50,000,000</td>
              <td className="py-3 px-6">Not capped</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* You can add additional disclaimers or context here if needed */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Disclaimer</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg space-y-2 mb-8">
        <li>
          <span className="font-semibold">Note:</span> These limits are applicable in Tanzania and are subject to change based on regulatory updates from the Bank of Tanzania.
        </li>
        <li>
          For specific inquiries or to discuss tailored limits for businesses, please contact our support team.
        </li>
      </ul>
    </div>
  );
};

export default TransactionLimits;