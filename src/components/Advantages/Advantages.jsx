import styles from './Advantages.module.scss'
import Title from '@/components/Title/Title.jsx'
import Badge from '@/components/Badge/Badge.jsx'
import Card from '@/components/Card/Card.jsx'

const Advantages = () => {
  const cardsInfo = [
    {
      nameImage: 'photo-to-grad.svg',
      title: 'Photo to Gradient',
      span: 'Extract palette instantly.',
      text: 'Intelligent color quantization extracts dominant, vibrant\n' +
        'tones in milliseconds, skipping washed-out intermediate\n' +
        'pixels.',
    },
    {
      nameImage: 'live-css-preview.svg',
      title: 'Live CSS Preview',
      span: 'Copy code in one click.',
      text: 'Clean CSS syntax, Tailwind CSS configuration snippets, or\n' +
        'SVG linear gradient definitions ready to drop straight into\n' +
        'your stylesheet.',
    },
    {
      nameImage: 'zero-api.svg',
      title: 'Zero API',
      span: 'Works entirely in your browser.',
      text: 'Client-side WebGL and HTML5 Canvas parsing. No server\n' +
        'uploads, zero network latency, total personal image privacy.',
    },
  ]

  return (
    <section>
      <div className={`container ${styles.advantagesContainer}`}>
        <Badge>Built for Designers & Developers</Badge>
        <Title title='h2'>Effortless gradient extraction</Title>
        <ul className={styles.list}>
          {cardsInfo.map((card) => (
            <Card
              key={card.title}
              nameImage={card.nameImage}
              title={card.title}
              span={card.span}
              text={card.text}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Advantages