import { useCallback } from "react";
import { Section, Container } from "@/src/content/Content";
import { Accordion, AccordionItem } from "@/src/components/accordion/Accordion";
import { Tooltip } from "@/src/components/tooltip/Tooltip";

type AccordionItems = {
  _id: string,
  title: string, 
  content: string
}

const accordions: AccordionItems[] = [
  { _id: '1', title: 'Your Favorite Colors?', content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' },
  { _id: '2', title: 'What is your favorite animal?', content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.' },
  { _id: '3', title: 'Your favorite city?', content: 'Various versions have evolved over the years, sometimes by accident. Various versions have evolved over the years, sometimes by accident. Various versions have evolved over the years, sometimes by accident' },
  { _id: '4', title: 'Your Favorite Colors?', content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ' },
  { _id: '5', title: 'What is your favorite animal?', content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.' },
  { _id: '6', title: 'Your favorite city?', content: 'Various versions have evolved over the years, sometimes by accident. Various versions have evolved over the years, sometimes by accident. Various versions have evolved over the years, sometimes by accident' }
];

type TooltipItems = {
  _id: string
  content: string
}

const tooltips: TooltipItems[] = [
  { _id: '1', content: 'Tooltip 1' },
  { _id: '2', content: 'Tooltip 2' },
  { _id: '3', content: 'Tooltip 3' }
]

type PageProps = {
  params: {
    lang: string
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default function Home({ params: { lang }} : PageProps) {
  console.log("🚀 ~ file: page.tsx:39 ~ Home ~ lang:", lang)
  const renderAccordion = useCallback(() => {
    if (accordions.length < 1) {
      return (
        <div>
          <p className="text-center">Accordion data not found!</p>
        </div>
      )
    }

    return accordions.map((accordion) => {
      return (
        <AccordionItem key={accordion._id} id={accordion._id} title={accordion.title}>
          <p>{accordion.content}</p>
        </AccordionItem>
      )
    })
  }, [accordions]);

  const renderTooltip = useCallback(() => {
    return tooltips.map((tooltip) => {
      return <Tooltip children={<div>{tooltip.content}</div>} />
    })
  }, [tooltips])

  return (
    <>
      <Section>
        <Container>
          <h1>Home</h1>
        </Container>
      </Section>
    </>
  )
}
