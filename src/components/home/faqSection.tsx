import { CloudDecoration } from "./cloudDecoration"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqSectionProps {
  id: string
}

export function FaqSection({ id }: FaqSectionProps) {
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    },
    {
      question: "How do I begin my journey?",
      answer:
        "Nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia.",
    },
    {
      question: "What are the benefits of this practice?",
      answer:
        "Consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nisl vel ultricies lacinia.",
    },
    {
      question: "Is prior experience required?",
      answer:
        "Eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    },
  ]

  return (
    <section id={id} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400">FAQ</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Frequently Asked Questions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-amber-400/30 rounded-lg overflow-hidden bg-blue-950/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-amber-400 hover:text-amber-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Decorative elements */}
      <CloudDecoration className="absolute top-1/3 -left-20 w-48 h-auto text-amber-400/20 transform -rotate-12" />
      <CloudDecoration className="absolute bottom-1/3 -right-20 w-64 h-auto text-amber-400/20 transform rotate-12" />
    </section>
  )
}
