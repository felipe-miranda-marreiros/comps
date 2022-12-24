import { Accordion } from '../components/Accordion'

const data = [
  {
    label: 'Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores, cumque maiores ipsum vel nemo non est sunt fugit aliquid!',
  },
  {
    label:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea beatae rerum.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias?',
  },
  {
    label: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias?',
  },
  {
    label: 'Lorem ipsum dolor sit amet consectetur',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias?',
  },
]

export const AccordionPage = () => {
  return <Accordion items={data} />
}
