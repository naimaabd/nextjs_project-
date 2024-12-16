import { FC } from "react";


type FAQItem = {
  question: string;
  answer: string;
};

type FilteredData = {
  category: string;
  items: FAQItem[];
}[];

type FAQTabsProps = {
  faqData: FilteredData;
  highlightText: (text: string) => string;
};

const FAQTabs: FC<FAQTabsProps> = ({ faqData, highlightText }) => {
  return (
    <div>
      {faqData.map((categoryData) => (
        <div key={categoryData.category}>
          <h2>{categoryData.category}</h2>
          {categoryData.items.map((item) => (
            <div key={item.question}>
              <h3>{highlightText(item.question)}</h3>
              <p>{highlightText(item.answer)}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQTabs;