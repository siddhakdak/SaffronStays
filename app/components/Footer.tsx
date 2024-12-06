import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["SafetyStays", "Signature", "XSeries", "About"],
    },
    {
      title: "Company",
      links: ["SafetyStays", "Signature", "XSeries", "About"],
    },
    {
      title: "Contact",
      links: ["mail@saffronstays.com", "+91 3728253727", "Contact us", "Contact to Partner"],
    },
    {
      title: "Partner with Us",
      links: ["List a Home", "Partner"],
    },
    {
      title: "Policies",
      links: ["Privacy Policy", "Terms", "Sitemap", "Cancellation Policy"],
    },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {footerSections.map((section, index) => (
          <div key={index} className="footer-section">
            <h3>{section.title}</h3>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-end">
        <div className="copyright"><p>© 2021 SaffronStays. All rights reserved</p></div>
        <div className="social-icons">
            <button className="social"></button>
            <button className="social"></button>
            <button className="social"></button>
            <button className="social"></button>
        </div>
      </div>
    </footer>
  )
}

