import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Clock, DollarSign, Users, Lock, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picsart_25-05-13_02-16-13-734.jpg-M9upmOgFknHfHQu1u5yT0XeeLKMGw0.jpeg"
          alt="Cybersecurity lock with blue digital circuit background"
          width={1500}
          height={500}
          className="w-full h-[500px] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Is Your Data Really Safe?
            <br />
            <span className="text-2xl md:text-3xl font-medium mt-2 block">
              Hackers Exploit Blind Spots
              <br />
              Every 39 Seconds. Stay One Step Ahead!
            </span>
          </h1>
          <button className="bg-[#2161ba] hover:bg-[#1a4d94] text-white font-medium py-3 px-6 rounded w-fit mt-6 text-lg">
            Get Your Free Cyber Risk Assessment
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#000104" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Cybersecurity By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StatCard
              icon={<Clock className="w-10 h-10 text-[#2161ba]" />}
              value="39 Seconds"
              description="Average time between hacker attacks"
              highlight="Every 39 seconds, a new attack is launched against unsecured systems"
            />
            <StatCard
              icon={<DollarSign className="w-10 h-10 text-[#2161ba]" />}
              value="$4.35M"
              description="Average cost of a data breach in 2024"
              highlight="60% of small businesses close within 6 months of a cyber attack"
            />
            <StatCard
              icon={<Users className="w-10 h-10 text-[#2161ba]" />}
              value="95%"
              description="Of breaches are caused by human error"
              highlight="Employee training can reduce security incidents by up to 70%"
            />
            <StatCard
              icon={<Lock className="w-10 h-10 text-[#2161ba]" />}
              value="24,000+"
              description="Malicious mobile apps blocked daily"
              highlight="Mobile devices are increasingly targeted by cybercriminals"
            />
            <StatCard
              icon={<AlertTriangle className="w-10 h-10 text-[#2161ba]" />}
              value="300%"
              description="Increase in ransomware attacks since 2020"
              highlight="A new organization falls victim to ransomware every 11 seconds"
            />
            <StatCard
              icon={<Shield className="w-10 h-10 text-[#2161ba]" />}
              value="89%"
              description="Of companies experienced phishing attempts"
              highlight="Phishing remains the most common attack vector for breaches"
            />
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-16 px-4" style={{ backgroundColor: "#000104" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/afford-MmdOUQxf8pQcH24IfKeWEEw6Sa9hh3.png"
              imageAlt="Circular targeting interface with blue and purple accents"
              title="Affordable Cybersecurity Platform"
              description="Small-to-Medium sized businesses need affordable and accessible cybersecurity protection and program."
              link="https://www.sbir.gov/sites/all/themes/sbir/dawnbreaker/img/documents/Course10-Tutorial1.pdf"
              linkText="Read the Report"
            />
            <FeatureCard
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workspace-6ia4k8ggx7UWnk4MGekCItZJATRLQg.png"
              imageAlt="Laptop with security shield in a blue cloud"
              title="Maximize Cyber Workforce"
              description="Organizations who staff and maintain multiple cybersecurity programs across their organization need efficient and inoperable cybersecurity solutions. Automation, detection, and protection should support more than just one cyber workforce function."
            />
            <FeatureCard
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/quantum-uZthRKvgrILnTtwdLGmvl4XEQMGedA.png"
              imageAlt="Blue shield with keyhole and glowing effects"
              title="Quantum-Safe Assets"
              description="Businesses are preparing to ensure their legacy systems and existing computing environments are safe from quantum-hacking."
              link="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards"
              linkText="Learn more"
            />
          </div>

          {/* Email Signup */}
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Secure Your Spot on the Frontlines of Quantum Cyber Defense. Join the Waitlist Today!
            </h3>
            <form className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 rounded flex-grow max-w-md bg-[#050a14] border border-[#2161ba] text-white focus:outline-none focus:ring-2 focus:ring-[#2161ba]"
                required
              />
              <button
                type="submit"
                className="bg-[#2161ba] hover:bg-[#1a4d94] text-white font-medium py-3 px-6 rounded"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000104] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-300">© 2025 8ORCAS INC. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function StatCard({
  icon,
  value,
  description,
  highlight,
}: {
  icon: React.ReactNode
  value: string
  description: string
  highlight: string
}) {
  return (
    <div className="bg-[#050a14] rounded-lg p-6 border-l-4 border-[#2161ba] hover:transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-3xl font-bold text-white ml-4">{value}</h3>
      </div>
      <p className="text-[#4a8eda] font-medium mb-2">{description}</p>
      <p className="text-gray-400 text-sm">{highlight}</p>
    </div>
  )
}

function FeatureCard({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  linkText,
}: {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  link?: string
  linkText?: string
}) {
  return (
    <div className="bg-[#050a14] rounded-lg p-6 h-full flex flex-col items-center text-center">
      <div className="w-40 h-40 relative mb-6">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
      </div>
      <h2 className="text-xl font-bold text-white mb-3">{title}</h2>
      <p className="text-gray-300 mb-4 flex-grow">{description}</p>
      {link && (
        <Link href={link} className="text-[#4a8eda] hover:underline font-medium mt-auto">
          {linkText || "Learn more"} →
        </Link>
      )}
    </div>
  )
}
