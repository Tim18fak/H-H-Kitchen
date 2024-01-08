import React from 'react'
import './footer.scss'
const Footer = () => {
  return (
    <footer className='HH__footer'>
      <section>
      <main>
        <h3>H&H KITCHEN</h3>
        <p>A culnary haven where diverse flovors and warm hospitality come together, creating a symphony of delicious memories</p>
      </main>
      <aside>
        <div>
          <h4>ADDRESS</h4>
          <address> 197 Pomeroy Ave, Pismo Beach California -  93449</address>
        </div>
        <div>
          <h4>CONTACT US</h4>
          <p>timothyavell33@gmail.com</p>
          <p>call me</p>
        </div>
      </aside>
      </section>
      <hr />
      <section className='HH__copyright--socialinks'>
        <main className='social__links'>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        </main>
        <aside>
          <p>2023 @ H & H Kitchen. All right reserved</p>
        </aside>
      </section>
    </footer>
  )
}

export default Footer