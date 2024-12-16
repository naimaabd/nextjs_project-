type QAProps = {
  question: string;
  answer?: string;
  isOpen: boolean;
  toggle: () => void;
  highlightText: (text: string) => string;
  isSubheading?: boolean; // For handling subheading logic
};

const QA = ({ question, answer, isOpen, toggle, highlightText, isSubheading }: QAProps) => {
  return (
    <div
      className="py-4 lg:py-6 px-3 my-4 max-w-full lg:max-w-2xl mx-auto border rounded-lg flex flex-col gap-4"
      style={{
        backgroundColor: "#FAFBFC",
      }}
    >
      <button
        className="flex justify-between items-center text-left w-full"
        onClick={toggle}
      >
        <span
          className="text-md lg:text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: highlightText(question) }}
        />
        {!isSubheading && (
          <span className="text-gray-500 text-lg lg:text-xl font-bold">{isOpen ? "-" : "+"}</span>
        )}
      </button>
      {!isSubheading && isOpen && (
        <p className="text-sm lg:text-md text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: highlightText(answer!) }} />
      )}
    </div>
  );
};

export default QA;
