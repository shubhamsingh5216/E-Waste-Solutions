import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      id: 1,
      question: 'What is considered e-waste?',
      answer: 'E-waste, or electronic waste, refers to discarded electronic devices and equipment. This includes computers, laptops, tablets, smartphones, TVs, monitors, printers, scanners, cameras, audio equipment, and small household appliances with electronic components. Even batteries, cables, and peripherals are considered e-waste.'
    },
    {
      id: 2,
      question: 'Why is it important to properly dispose of e-waste?',
      answer: 'Proper e-waste disposal is crucial because electronic devices contain hazardous materials like lead, mercury, cadmium, and flame retardants that can contaminate soil and water if sent to landfills. Additionally, e-waste contains valuable materials like gold, silver, copper, and rare earth elements that can be recovered and reused, reducing the need for mining raw materials.'
    },
    {
      id: 3,
      question: 'How should I prepare my devices before recycling?',
      answer: 'Before recycling your electronic devices, you should: 1) Back up any important data, 2) Perform a factory reset or use secure data wiping software to remove personal information, 3) Remove any removable batteries (they may need to be recycled separately), 4) Remove any accessories or peripherals that might be reusable, and 5) If possible, gather any accompanying manuals, CDs, or packaging for recycling as well.'
    },
    {
      id: 4,
      question: 'Are there any laws regarding e-waste disposal?',
      answer: 'Yes, many countries and states have enacted laws regarding e-waste disposal. In the United States, over 25 states have e-waste recycling laws that prohibit disposing of certain electronic devices in regular trash. The specific regulations vary by location, but many places require manufacturers to establish collection and recycling programs for their products.'
    },
    {
      id: 5,
      question: 'Can I get paid for recycling my old electronics?',
      answer: 'In some cases, yes. Certain recycling programs or buyback services may offer payment for devices that still have value, particularly newer smartphones, tablets, and computers in good working condition. The payment amount depends on the device type, age, condition, and current market value. Some retailers also offer trade-in programs or store credit for recycling old electronics.'
    },
    {
      id: 6,
      question: 'What happens to my e-waste after I drop it off for recycling?',
      answer: 'After collection, e-waste typically goes through a multi-step process: 1) Manual sorting and disassembly to remove hazardous components, 2) Shredding of remaining materials, 3) Separation of different materials using various technologies (magnets for ferrous metals, eddy currents for non-ferrous metals, etc.), 4) Recovery of valuable materials for reuse in manufacturing, and 5) Proper disposal of non-recyclable components according to environmental regulations.'
    }
  ];

  const [openFaqs, setOpenFaqs] = useState([]);

  const toggleFaq = (id) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about e-waste management, recycling processes, and environmental impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                className="w-full text-left p-5 focus:outline-none flex justify-between items-center"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                {openFaqs.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-green-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-600" />
                )}
              </button>
              {openFaqs.includes(faq.id) && (
                <div className="px-5 pb-5 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Don't see your question here?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ai-assistant"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Ask Our AI Assistant
            </a>
            <a
              href="#"
              className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
