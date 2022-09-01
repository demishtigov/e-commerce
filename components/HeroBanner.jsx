import   Link  from 'next/link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Small text</p>
        <h3>MidText</h3>
        <h1>LargeText</h1>
        <img src='/' alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/id`}>
            <button type="button">Button Text</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner