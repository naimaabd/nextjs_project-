"use client";

import { useState } from "react";
import { Body, H1 } from "../design-system/formatting";
import QA from "./QA";
import FAQTabs from "./FAQTabs";


type FAQItem = {
  question: string;
  answer: string;
  isSubsection?: boolean;
};

type FilteredData = {
  category: string;
  items: FAQItem[];
}[];

const dataQA = {
  "General Information": [
    {
      question: "What is DizzitUp?",
      answer: "DizzitUp is a global marketplace that allows all Africans, wherever they are, to finance, sell, and buy basic necessity products and services anywhere on the continent.",
    },
    {
      question: "Is DizzitUp available in different languages?",
      answer: "DizzitUp aims to be accessible in multiple languages, starting with English and French, and plans to add Portuguese, Arabic, Amharic, and more African languages. Impressively, Aminata, DizzitUp's intelligent virtual assistant, can understand and respond in all major spoken languages, ensuring a seamless, inclusive experience for users worldwide.",
    },
    {
      question: "What is DizzitUp's mission?",
      answer: "DizzitUp’s mission is to empower Africa by driving economic growth and creating lasting financial impact. We do this through two main channels: generating additional online revenue for businesses and local merchants, and offering accessible, hassle-free instant loans to small businesses, including those in the informal sector. By empowering families and small businesses financially, DizzitUp supports sustainable development and greater economic participation across the continent.",
    },
    {
      question: "How does DizzitUp support local businesses?",
      answer: "By partnering with African merchants, DizzitUp ensures that revenue lands and stays within local communities, helping small and medium-sized businesses grow while providing users with reliable goods and services.",
    },
    {
      question: "How does DizzitUp plan to expand its services across Africa?",
      answer: "Launched with 420 registered merchants and service providers from all Africa (54 countries), DizzitUp is committed to partnering with local businesses, utility providers, and service networks across African nations to expand its reach and impact. Regular updates on expansion plans will be shared through our platform and newsletters.",
    },
    {
      question: "Is DizzitUp only available for people in Africa?",
      answer: "No, DizzitUp is not exclusively for African people. Our platform is designed to address the challenges faced by migrants worldwide. DizzitUp supports transactions in over 180 countries, allowing you to assist loved ones no matter where they are. For example, you can recharge a mobile phone in the Philippines, Brazil, Lebanon, Mexico, Pakistan, and many more locations across the globe.",
    },
    {
      question: "Are there any age restrictions for using DizzitUp?",
      answer: "Yes, you must be at least 18 years old to create an account or use financial services on DizzitUp.",
    },
    {
      question: "How can I receive notification for new deals, discounts, or important updates?",
      answer: "You can stay updated on new deals, discounts, and important updates by signing up for our newsletter. Simply provide your email through the newsletter subscription option on our platform, and you'll receive the latest offers and announcements directly in your inbox.",
    },
    {
      question: "Does DizzitUp have a referral program?",
      answer: "Yes, DizzitUp will have a referral program that will allow users to earn rewards for referring friends, family, and merchants. Stay tuned for more information on how you can benefit from our referral program. (mailing list subscription link).",
    },
    {
      question: "Are there any loyalty programs available for DizzitUp users?",
      answer: "Yes. Combined with the referral program, an innovative and unique loyalty program, DizzyAwards, will be launched soon to reward users and merchants on DizzitUp. Once implemented, you will be able to earn points and rewards based on your transactions and engagement with the platform and use them to buy goods, pay bills on DizzitUp Marketplace, or share them with anyone anywhere in the world. Stay tuned for updates on this exciting feature. (mailing list).",
    },
    {
      question: "Are there any incentives or discounts for frequent users?",
      answer: "Yes, DizzitUp values loyal users and is actively working on introducing incentives and discounts tailored for frequent users. These may include exclusive offers, promotions, and opportunities to earn rewards through our upcoming loyalty program. Stay updated for announcements! (mailing list).",
    },
    {
      question: "What payment methods are accepted on DizzitUp?",
      answer: "DizzitUp provides the world's most comprehensive payment methods to date that ensure flexibility and security for all users. These include Visa, Mastercard, American Express, Bitcoin, stablecoins & crypto, and Mobile Money (MoMo) in Africa.",
    },
    {
      question: "Does DizzitUp support cryptocurrency payments?",
      answer: "Yes, DizzitUp supports cryptocurrency payments, including Bitcoin and stablecoins. This allows users to make payments with flexibility and ensures secure transactions that are less affected by currency fluctuations. You can select cryptocurrency as your payment method at checkout.",
    },
  ],
  "Buyers & Senders": [
    {
      question: "Pay Utility Bills",
      answer: "",
      isSubsection: true, 
    },
    {
      question: "What types of bills can I pay through DizzitUp?",
      answer: `With DizzitUp, you can pay a variety of bills for your loved ones, including:
      "Utility bills (e.g., electricity, water, gas, etc.)",
      - Mobile phone top-ups
      - Internet services
      - School & University tuition
      - Healthcare services
      - Insurance premiums
      - Other essential utilities specific to local needs.`,
    },
    {
      question: "Can I pay my loved ones' utility bills from outside Africa?",
      answer: "Yes, DizzitUp allows users in the African diaspora to pay utility bills for their loved ones back home. You can make payments for utilities like electricity, water, and internet services no matter where you are in the world.",
    },
    {
      question: "Is it possible to pay insurance premiums using DizzitUp?",
      answer: "Yes, you can pay your insurance premiums through DizzitUp. Simply go to the 'Pay Bills' section, select your insurance provider, and follow the steps to make the payment using one of the available payment methods. \nIf your insurance company isn’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },
    {
      question: "Based in Senegal, can I pay my brother’s electricity bill in Kenya?",
      answer: "Absolutely! DizzitUp allows you to pay bills for your loved ones in different countries across Africa, making it seamless to support family and friends remotely.",
    },
    {
      question: "How do I know if my utility provider is supported?",
      answer: "In the 'Pay Bills' section of DizzitUp, you’ll see a list of available utility providers for services like electricity and water. Select your country to see specific providers, or you can type in the provider’s name in the search bar. DizzitUp regularly updates this list to cover as many providers as possible across Africa. \nIf you know African service providers that could benefit from DizzitUp marketplace, please share their details (form link).",
    },
    {
      question: "Can DizzitUp be used to pay for subscription services like Netflix or Spotify?",
      answer: "No, DizzitUp currently supports payments for digital goods from popular brands like Fortnite, PUBG Mobile, Razer Gold, and Xbox, among others. While subscription services like Netflix or Spotify aren’t available just yet, sign up for our mailing list to be the first to know when this feature, along with many others, is introduced! (mailing list).",
    },
    {
      question: "Can I pay for services like airline tickets or hotel bookings through DizzitUp?",
      answer: "No, DizzitUp offers a variety of services that you can purchase for family members or loved ones in Africa, including internet, groceries, and healthcare equipment. While we don’t yet support payments for travel services like airline tickets or hotel bookings, we're always working to introduce new features and services. Stay tuned for exciting updates! (mailing list).",
    },
    {
      question: "How can I support my loved ones' education through DizzitUp?",
      answer: "You can purchase school supplies, learning tools, and resources for students at all levels—from primary schools to universities through selected stores in Africa.",
    },
    {
      question: "How do I pay my school or university tuition fees on DizzitUp?",
      answer: "To pay your tuition fees, navigate to the 'Pay Bills' section on the DizzitUp platform. Select your educational institution from the list, enter the required payment details, and complete the payment using one of our accepted methods. \nIf you know schools that aren’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },
    {
      question: "Can I pay for university admission fees on DizzitUp?",
      answer: "Yes, DizzitUp can be used to pay university admission fees, as well as school-related expenses like tuition and exam fees with selected establishments. Simply select the institution in the 'Pay Bills' section and follow the steps to complete the payment. \nIf you know universities that aren’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },
    {
      question: "How do I know if a medical service provider is available on DizzitUp?",
      answer: "To check if a medical service provider is available, go to the 'Healthcare' section on DizzitUp. You can search for your specific healthcare provider, clinic, or hospital, and select the one that matches your needs. We are continuously expanding our list of healthcare partners across Africa. \nIf you know clinics, medical, dental offices that aren’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },
    {
      question: "Does DizzitUp provide access to medical services?",
      answer: "DizzitUp allows you to pay for medical consultations, health services, and clinic visits for your loved ones. Additionally, we offer the option to purchase a variety of medical supplies and healthcare products from selected stores. \nIf you know clinics, medical, dental offices that aren’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },

    {
      question: "Top-Up",
      answer: "",
      isSubsection: true,  
    },
    {
      question: "Can I recharge a mobile phone in another country?",
      answer: "DizzitUp lets you send airtime seamlessly, whether from one African country to another or from the African diaspora to the continent. For example, you can top up a family member’s phone in Nigeria from Cameroon or Ghana.",
    },

    {
      question: "Gift Cards",
      answer: "",
      isSubsection: true, 
    },
    {
      question: "What are DizzitUp gift cards, and how can I use them?",
      answer: "DizzitUp Gift cards are prepaid digital cards that you can purchase and use on the platform to pay for goods or services. Once you buy a gift card, you’ll receive a unique code that can be entered at checkout.",
    },

    {
      question: "Buy Goods",
      answer: "",
      isSubsection: true,  
    },
    {
      question: "What types of goods can I buy through DizzitUp?",
      answer: "DizzitUp connects you with local shops across Africa to purchase a wide range of products for your loved ones, including:\n- **Foods**: Groceries, staples, and pantry essentials.\n- **Renewable Energy & Equipment**: Solar panels, batteries, and sustainable energy solutions.\n- **Construction Material & Home Furniture**: High-quality building materials and furniture.\n- **Mobile phones and Computers**: Smartphones, laptops, and tech accessories.\n- **Healthcare Furniture & Pharmacy**: Medical supplies, medical equipment, and healthcare furniture. \nIf you know local shops that aren’t listed yet on DizzitUp Marketplace, please share their details (suggestion form link).",
    },
    {
      question: "What is the DizzitUp BFSiR concept about?",
      answer: "Sending money (remittance) has been a safety net for Africans in Africa, but it often fails to create lasting impact, as it's mainly used for consumption and doesn’t help beneficiaries develop or invest in their own businesses. Misuse of funds can also cause frustration and disputes. With BFSiR ('Buy First, Send if Required'), African migrants can support their loved ones while ensuring their money is used appropriately, providing peace of mind and fostering long-term development.",
    },

    {
      question: "Can I buy goods in one country and have them delivered to another?",
      answer: "Yes, DizzitUp allows you to purchase goods in one country and have them picked up by your loved ones at a shop in another. For example, you can buy groceries in Ghana and have them ready for pickup by family in Côte d'Ivoire. However, delivery options depend on the shop's services and the location of the recipient.",
    },

    {
      question: "Does DizzitUp offer delivery services or pick-up options?",
      answer: "DizzitUp is a 'Click & Collect' service, with the standard option allowing goods to be picked up at shops locations across Africa. However, delivery may be available if the chosen shop offers such services, and it can be paid for in advance within your cart.",
    },

    {
      question: "What happens if the product I purchase is out of stock?",
      answer: "If the product you’ve purchased becomes out of stock, you will be notified immediately. You can choose to wait for it to be restocked, select a replacement item, or request a refund.",
    },

    {
      question: "Can I use DizzitUp to buy goods for someone else?",
      answer: "Yes, DizzitUp allows you to purchase goods and have them to be picked at a local shop in a city in Africa or delivered to the beneficiary home, if the shop provides delivery service. During checkout, you can specify the recipient’s details and delivery address to ensure the goods reach your intended recipient.",
    },

    {
      question: "Can I track my purchases for my loved ones and confirm if they’ve picked them up?",
      answer: "Yes, DizzitUp provides a tracking feature to help you monitor the status of your purchases. From your account dashboard, you can view updates on your orders, including whether your loved ones have picked them up from the selected local shop. You’ll also receive notifications confirming successful pickups. This ensures transparency and peace of mind for every transaction.",
    },

    {
      question: "Can I send renewable energy equipment to my family in Africa?",
      answer: "Absolutely! DizzitUp provides access to solar panels, batteries, and other sustainable solutions for reliable power, all sourced locally. Instead of sending goods from overseas, DizzitUp empowers you to support local businesses. Simply select a trusted shop in your family’s city that sells these products, make your purchase, and you’re all set—helping to boost the local economy while providing your family with the solutions they need.",
    },

    {
      question: "Can I fund construction projects for my loved ones through DizzitUp?",
      answer: "Yes, through DizzitUp, you can purchase construction materials, tools, and furniture from a local construction materials vendor in your family’s city to support housing or business projects for your loved ones in Africa.",
    },

    {
      question: "Send Money",
      answer: "",
      isSubsection: true,  
    },
    {
      question: "How do I send money to someone using DizzitUp?",
      answer: "To send money, you'll just need to log in to your account, input the recipient mobile phone number, enter the amount, confirm the details, and complete the transfer—it's quick and easy. This feature will be available soon, so stay tuned!",
    },

    {
      question: "Are there limits on the amount of money I can send?",
      answer: "Yes, DizzitUp will have limits on the amount you can send to ensure compliance with regulations and security standards. These limits may vary depending on the recipient's country and payment method.",
    },

    {
      question: "How long does it take for the recipient to receive the money?",
      answer: "Instantly! DizzitUp has developed and uses a secure, intermediary-free blockchain infrastructure for transferring value in a couple seconds worldwide. You will have the choice to deliver the funds instantly to your beneficiary’s DizzitApp wallet in $Dizzy (USDC) or local Africa Mobile Money (MoMo) wallet in local currency. Sending and receiving funds in $Dizzy (USDC) on DizzitApp wallet will be free of charge for both sender and beneficiary. Sending and receiving in local currency on MoMo wallet in local will be charged 3% to the sender.",
    },

    {
      question: "Can I track my financial transactions and progress on DizzitUp?",
      answer: "Yes, DizzitUp provides a 'Transaction History' feature where you can view and track all of your financial transactions. This includes payments, purchases, and transfers, allowing you to keep an eye on your spending and track progress.",
    },

    {
      question: "What is the DizzyCard, and how does it work?",
      answer: "DizzyCard is an international debit card (Visa or Mastercard) designed for secure, convenient payment transactions worldwide. Anyone can buy and subscribe to a DizzyCard for their family members in Africa, making it a simple way to support them from abroad.",
    },

    {
      question: "How can I use the DizzyCard to support my family members in Africa?",
      answer: "The DizzyCard is available in 2 options:\n- A virtual card linked to Apple Pay or Google Pay wallets.\n- A physical card, which is sent and delivered to a parent or loved one in Africa. With DizzyCard you could load your account with funds on your side and let your parents in Africa draw money at ATMs, shop and pay services at any store supporting Visa and Mastercard worldwide, including on DizzitUp Marketplace.",
    },

    {
      question: "Buy and share DizzyVoucher",
      answer: "",
      isSubsection: true,  
    },
    {
      question: "What is DizzyVoucher, and how does it work?",
      answer: "DizzyVoucher is a digital coupon that could be used to buy goods or pay bills on the DizzitUp Marketplace. Once bought, the coupon could be sent and shared with anyone in Africa for their use on the DizzitUp marketplace.",
    },

    {
      question: "How do I purchase a DizzitUp voucher?",
      answer: "To purchase a DizzitUp voucher, go to the 'Buy' section, select 'Vouchers,' choose your desired amount, and complete the payment using one of our accepted methods, such as Visa, Mastercard, Mobile Money, Cryptocurrency. After completing your purchase, you will receive a unique voucher code. You can share this code with your loved ones in Africa, who can then use it at our selected marketplace.",
    },

    {
      question: "Why should I buy and share a DizzyVoucher rather than sending money to my beloved in Africa?",
      answer: "gkjg",
    },

    {
      question: "Are there any fees associated with using the DizzyCard or DizzyVoucher?",
      answer: "No, purchasing and sharing a DizzyVoucher is completely free. The Virtual DizzyCard is also free, with no subscription or monthly charges. The Physical DizzyCard is billed annually, with no additional monthly fees.",
    },
  ],
  "Merchants and Businesses": [
    {
      question: "How does DizzitUp benefit African merchants and small businesses?",
      answer: "DizzitUp brings additional revenue and easy-to-access financing to small businesses in Africa through a digital marketplace that allows African merchants and small to medium-sized businesses (SMBs) to reach a broader audience, sell essential products across various sectors, and get financed.",
    },
    {
      question: "How can I register as a merchant on DizzitUp?",
      answer: "Merchants can register by filling out the merchant registration form on the DizzitUp platform. After submitting the form, a Merchant Success Manager will contact the merchant shortly to assist with setting up the shop and integrating products or services for sale. (link for the form)",
    },
    {
      question: "Should I have a corporate bank account and a registered company for being a Merchant on DizzitUp?",
      answer: "No!",
    },
    {
      question: "Do you accept and list non-African based shops?",
      answer: "No, DizzitUp primarily supports and accepts shops and service providers based in Africa.",
    },
    {
      question: "Can I manage multiple businesses under one DizzitUp account?",
      answer: "Yes. DizzitUp allows you to manage multiple businesses under a single account, making it easy to oversee all your operations in one place. A dedicated platform for merchants is available, which provides tools to add or remove shops or businesses seamlessly, offering even greater flexibility for multi-business owners.",
    },
    {
      question: "Can DizzitUp be used for business-to-business transactions?",
      answer: "Absolutely! DizzitUp facilitates B2B transactions, making it easy to pay invoices, collaborate with businesses, and manage payments securely.",
    },
    {
      question: "Is there a cost to be listed on DizzitUp Marketplace?",
      answer: "No, DizzitUp is subscription and registration free. Merchants can join the platform and showcase their products without any registration fees, providing a free opportunity to reach a wider audience, including the African diaspora. Join DizzitUp Marketplace here.",
    },
    {
      question: "How will I get paid?",
      answer: "DizzitUp offers three payment (settlement) options to suit your needs:\n- **Mobile Money wallet**: Receive payment directly to your Mobile Money wallet in your local currency. Instant payment after goods have been handed over to the beneficiary.\n- **DizzitApp wallet**: Receive payment directly to your DizzitApp wallet in $Dizzy (USDC). Instant payment after goods have been handed over to the beneficiary.\n- **Bank account**: Receive payment in your bank account after 3 to 5 days once goods have been handed over to the beneficiary.",
    },
    {
      question: "What payment methods does DizzitUp offer for merchant payments?",
      answer: "DizzitUp provides three convenient settlement options for merchants:\n- **Mobile Money wallet**: Get paid to your Mobile Money wallet in your local currency.\n- **DizzitApp wallet**: Get paid to your DizzitApp wallet in $Dizzy (USDC).\n- **Bank account**: Payments can be made directly to your bank account in your local currency (with a 3 to 5 day transfer delay due to bank constraints).",
    },
    {
      question: "Will I receive payment in my local currency?",
      answer: "Yes, you can receive payment in your local currency. DizzitUp offers payment options through Mobile Money wallets and bank accounts, both of which allow you to receive funds in your local currency.",
    },
    {
      question: "When will I get paid after making a sale?",
      answer: "DizzitUp initiates the payment once the goods have been handed over to the beneficiary (for pick-up orders) or delivered to their home. If you’ve selected Mobile Money or $Dizzy (USDC) on your DizzitApp wallet, you’ll be paid instantly. For bank transfers, payments will be processed within 3 to 5 days, depending on your bank’s processing times.",
    },
    {
      question: "Do I have to offer delivery services or is it up to the customer to pick up items?",
      answer: "By default, DizzitUp operates as a 'Click & Collect' marketplace, allowing customers to pick up items at your store. To remain competitive, you can organize and propose your own delivery service, which you could list and sell on the DizzitUp Marketplace.",
    },
    {
      question: "What will happen if the items I sell run out of stock?",
      answer: "If an item is out of stock, it will be marked as unavailable in your store and buyers will not be able to make a purchase for their loved ones. Merchants are encouraged to update their inventory regularly to avoid discrepancies.",
    },
    {
      question: "Can I offer promotions or discounts on my products?",
      answer: "Yes, DizzitUp allows merchants to run promotions or offer discounts. These can be set up through your Merchant Dashboard.",
    },
    {
      question: "Will DizzitUp help me reach the African diaspora living overseas and is there a fee associated with this?",
      answer: "DizzitUp connects merchants with the African diaspora looking to support their loved ones back home. This service is included as part of the platform’s benefits with no additional fee, helping you expand your reach.",
    },
    {
      question: "Can I set my own prices or does DizzitUp have price guidelines?",
      answer: "Yes, merchants have the flexibility to set their own prices based on their business model. However, DizzitUp encourages fair pricing to maintain trust and competitiveness within the marketplace.",
    },
    {
      question: "Can I access sales data, customer information, and order status through a dashboard?",
      answer: "Yes, you can easily access all your sales data, customer information, and order status directly on your dashboard, making it easy to manage and track your business activities.",
    },
    {
      question: "What tools are available for marketing my products?",
      answer: "You can use your social media accounts, along with free digital communication tools provided by DizzitUp, such as access to our social media outlets. These tools can help increase your product visibility and reach a wider audience.",
    },
    {
      question: "What kind of support will I get from DizzitUp?",
      answer: "DizzitUp offers dedicated support to ensure your success on the platform, including:\n- **Merchant Success Manager**: Personalized assistance to set up and optimize your store.\n- **Free social media communication** handled by local DizzitUp Community Managers.\n- **Customer Support**: Help with any issues via live chat, email, or phone.\n- **Training Resources**: Tutorials and guides to help you navigate the platform and grow your business.",
    },
    {
      question: "How do I update my product listings and inventory?",
      answer: "Merchants can easily update product details like descriptions, prices, and inventory through the Merchant Dashboard.",
    },
    {
      question: "What happens if there is an issue with a customer’s payment?",
      answer: "Rest assured, such situations are unlikely. An order is only confirmed once the payment has been successfully processed and accepted by the DizzitUp Marketplace platform, ensuring peace of mind for both you and the customer.",
    },
    {
      question: "Can I have a DizzyCard as a merchant?",
      answer: "Yes, merchants on DizzitUp can apply for a DizzyCard to simplify their financial transactions. With the DizzyCard, you can manage your earnings, pay suppliers, and handle other business expenses seamlessly. Choose between a virtual DizzyCard for online transactions or a physical card for broader use.",
    },
    {
      question: "Is there a way to link my shop to social media profiles to drive traffic and sales?",
      answer: "Yes, merchants can link their social media accounts on the dashboard. This allows you to initiate communication, post updates, and feature products and services directly from your e-store to help drive traffic and boost sales.",
    },
    {
      question: "Can I provide installation or assembly services for products I sell?",
      answer: "Yes, you can offer installation or assembly services for your products. These can be added as options in your product listings, allowing families to select them as an extra when purchasing goods for their loved ones.",
    },
  ],
"Support and Resources": [
  {
    question: "Are there any tutorials or guides available for new users?",
    answer: "New users can access detailed guides to quickly learn how to navigate and use DizzitUp effectively. A 'Getting Started' guide is available under the Help section of the website. It includes everything you need to know as a new user. Explore it here: Getting Started Guide. (add an appropriate link).",
  },
  {
    question: "How can I contact customer support?",
    answer: `DizzitUp offers dedicated customer support to assist you with any questions or issues. For immediate help, you can interact with Aminata, our almost human assistant, available 24/7. Aminata is capable of handling a wide range of inquiries and in your own local African languages. If you require further assistance, you can also contact our support team directly via email at <a href="mailto:support@dizzitup.com" class="text-blue-500 underline">support@dizzitup.com</a>, or chat on <a href="https://chat.dizzitup.com" class="text-blue-500 underline">chat.dizzitup.com</a>. Our agents are ready to provide timely and effective support.`,
  },
  {
    question: "How does DizzitUp handle refunds or transaction disputes?",
    answer: "DizzitUp is committed to ensuring a smooth and fair resolution process for refunds and disputes. Both refunds and disputes can be handled through your account dashboard, and disputes are resolved within a 7-day period.",
  },
  {
    question: "How can I provide feedback on my DizzitUp experience?",
    answer: "We value your feedback! You can submit feedback or suggestions by emailing us at feedback@dizzitup.com. Your input helps us improve our services.",
  },
  {
    question: "How do I cancel an order on DizzitUp?",
    answer: "Orders on DizzitUp are generally considered definitive to ensure smooth operations and timely support for local businesses. Cancellations are only allowed in cases where goods are not delivered or picked up. However, please note, 'Pay-Bills' transactions cannot be cancelled. For assistance with specific issues, please contact customer support.",
  },
],
"Account Management": [
  {
    question: "How do I update my account details or personal information?",
    answer: "You can easily update your account details, including personal information and payment methods, by going to the 'Account Settings' section in your profile.",
  },
  {
    question: "How do I delete my DizzitUp account?",
    answer: "If you wish to delete your account, please contact our customer support team. We will guide you through the process. Please note that once your account is deleted, all your transaction history and personal data will be permanently removed from our platform.",
  },
  {
    question: "What happens if my account is hacked or my payment information is compromised?",
    answer: "DizzitUp offers Multi-factor authentication (MFA) to protect your account. If you believe your account has been compromised, immediately contact our customer support team.",
  },
  {
    question: "What security measures does DizzitUp have to protect my transactions?",
    answer: "DizzitUp prioritises the security of your transactions with data encryption, secure payment gateways, fraud detection, and Multi-factor authentication (MFA). Our platform meets international security standards, safeguarding your data and ensuring safe transactions. We continuously monitor for unauthorised access, keeping your privacy and security our top priority.",
  },
  {
    question: "Can I link my DizzitUp account to my bank account?",
    answer: "Direct linking to a bank account is not required. However, you can save your card details in your account for faster payments.",
  },
  {
    question: "Can I set up automatic payments for recurring bills?",
    answer: "At DizzitUp, we’re committed to making your experience as convenient as possible. While automatic payments for recurring bills aren’t available just yet, this feature will be introduced soon through our upcoming subscription service. Stay tuned for updates, and be the first to know when it’s ready!",
  },
  {
    question: "What should I do if I forget my DizzitUp password?",
    answer: "If you forget your password, you can reset it by clicking on the 'Forgot Password' link on the login page. A reset link will be sent to your registered email and details on how to reset your password will be on there.",
  },
  {
    question: "How do I update my payment information on DizzitUp?",
    answer: "You can update your payment details by going to the 'Account Settings' section and selecting 'Payment Methods.' Here, you can add, remove, or edit your card or bank account information.",
  },
  {
    question: "How can I change the email address linked to my DizzitUp account?",
    answer: "To change your email address, go to the 'Account Settings' section of your profile, select 'Email Address,' and follow the instructions to update your email.",
  },
],
};

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [openAll, setOpenAll] = useState(false);
  const [expandedQuestions, setExpandedQuestions] = useState<{ [key: string]: number[] }>({});
  const [expandedSubheadings, setExpandedSubheadings] = useState<{ [key: string]: boolean }>({});

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const safeSearchQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${safeSearchQuery})`, "gi");
    return text.replace(regex, '<span class="bg-yellow-200 text-black">$1</span>');
  };

  const filteredData: FilteredData = Object.entries(dataQA).reduce<FilteredData>((acc, [category, items]) => {
    const filteredItems = items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length > 0) {
      acc.push({ category, items: filteredItems });
    }
    return acc;
  }, []);

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const toggleOpenAll = () => {
    if (openAll) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(filteredData[0]?.category || null);
    }
    setOpenAll(!openAll);
  };

  const toggleQuestion = (category: string, index: number) => {
    const newExpandedQuestions = { ...expandedQuestions };
    if (newExpandedQuestions[category]?.includes(index)) {
      newExpandedQuestions[category] = newExpandedQuestions[category].filter((id) => id !== index);
    } else {
      newExpandedQuestions[category] = [
        ...(newExpandedQuestions[category] || []),
        index,
      ];
    }
    setExpandedQuestions(newExpandedQuestions);
  };

  const toggleSubheading = (subheading: string) => {
    setExpandedSubheadings((prev) => ({
      ...prev,
      [subheading]: !prev[subheading],
    }));
  };
  

  return (
    <div className="zmin-h-screen bg-gradient-to-b from-[#20365B] to-[#FDFDFD] p-6 lg:p-12">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-white mb-10">Frequently Asked Questions</h1>

      {/* Off-white container with two columns */}
      <div className="max-w-full mx-auto bg-gray-100 p-6 lg:p-16 rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12">
        {/* Left Column - FAQ Section */}
        <div className="faq-body col-span-1 lg:col-span-3 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 w-full">
            {/* Search Input */}
            <div className="relative w-full sm:w-2/3">
              <input
                type="text"
                placeholder="Search questions or answers..."
                className="w-full p-3 border rounded-full pl-14"
                style={{
                  borderColor: "#878FA4",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1016.65 16.65L21 21zm-5.9-8.1a5.1 5.1 0 11-10.2 0 5.1 5.1 0 0110.2 0z"
                  />
                </svg>
              </span>
            </div>

            {/* Open All / Close All Button */}
            <button
              onClick={toggleOpenAll}
              className="py-2 px-4 border rounded-full bg-gradient-to-r from-[#20365B] to-[#FBC02D] text-white font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 sm:w-auto w-full"
              style={{
                fontFamily: "Helvetica",
                fontSize: "17px",
                minWidth: "140px",
                height: "2.7rem",
                backgroundColor: openAll ? "#FF8C00" : "#1C3D60",
                color: "#FFFFFF",
              }}
            >
              {openAll ? "Close All" : "Open All"}{" "}
              <span style={{ fontSize: "15px", marginLeft: "8px" }}>
                {openAll ? "▲" : "▼"}
              </span>
            </button>
          </div>

          <div>
            {filteredData.map(({ category, items }) => (
              <div key={category}>
                <div
                  onClick={() => toggleCategory(category)}
                  className="cursor-pointer text-lg lg:text-xl font-semibold mb-2 items-center"
                  style={{
                    color: "#F5F5F5",
                    backgroundColor: "#20365B",
                    padding: "10px 15px",
                    borderRadius: "20px",
                    border: "1px solid #E2E8F0",
                    width: "100%", 
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {category}
                </div>
                {(expandedCategory === category || openAll) && (
                  <div className="p-4 border-t-2 border-gray-300 ">
                    {items.map((item, idx) => {
                      if (item.isSubsection) {
                        return (
                          <div key={idx}>
                            <h3
                              className="text-lg font-semibold mt-4 mb-2 cursor-pointer flex justify-between items-center"
                              style={{ color: "#FBC02D" }}
                              onClick={() => toggleSubheading(item.question)}
                            >
                              {item.question}
                              <span>{expandedSubheadings[item.question] ? "▲" : "▼"}</span>
                            </h3>
                            {expandedSubheadings[item.question] && (
                              <div className="pl-4">
                                <p className="text-gray-600">{item.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <QA
                          key={idx}
                          question={highlightText(item.question)}
                          answer={highlightText(item.answer)}
                          isOpen={expandedQuestions[category]?.includes(idx)}
                          toggle={() => toggleQuestion(category, idx)}
                          highlightText={highlightText}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Related Topics */}
        <div className="related-topics col-span-1 bg-[#f8f9fa] p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[#20365B]">Explore Related Topics</h3>
          <ul className="space-y-4">
            <li><a href="http://help.dizzitup.com/article/what-is-dizzitup-about" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">What is DizzitUp About</a></li>
            <li><a href="http://help.dizzitup.com/article/all-you-can-do" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">All You Can Do</a></li>
            <li><a href="http://help.dizzitup.com/article/dizzitapp" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">About DizzitApp</a></li>
            <li><a href="http://help.dizzitup.com/article/buy-goods-to-your-relatives-in-africa" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Buy Goods to Your Relatives in Africa</a></li>
            <li><a href="http://help.dizzitup.com/article/save-protect-your-money" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Save & Protect Your Money</a></li>
            <li><a href="http://help.dizzitup.com/article/send-receive-money-instantly-for-free" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Send & Receive Money Instantly for Free</a></li>
            <li><a href="http://help.dizzitup.com/article/sell-on-dizzitup" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Sell on DizzitUp</a></li>
            <li><a href="http://help.dizzitup.com/article/join-the-team" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Join the Team</a></li>
            <li><a href="http://help.dizzitup.com/article/diaspora-community-manager----su" className="block text-[#20365B] hover:text-[#FBC02D] transition-colors">Diaspora Community Manager</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default FAQ;
