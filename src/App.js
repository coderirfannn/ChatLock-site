import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, stagger, useAnimate } from "framer-motion";
import { Shield, Users, MessageSquare, Lock, Zap, ChevronRight, Star } from "lucide-react";


// export function useMobile() {
//   const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
//     }

//     // Initial check
//     checkMobile()

//     // Add event listener
//     window.addEventListener("resize", checkMobile)

//     // Clean up
//     return () => window.removeEventListener("resize", checkMobile)
//   }, [])

//   return !!isMobile
// }
function App() {
   const [scope, animate] = useAnimate()
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const privacyRef = useRef(null)
  const ctaRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

    const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  useEffect(() => {
    // Animate header elements on load
    animate(
      "header > *",
      {
        opacity: [0, 1],
        y: [20, 0],
      },
      {
        duration: 0.5,
        delay: stagger(0.1),
      },
    )

     animate(
      ".hero-element",
      {
        opacity: [0, 1],
        y: [30, 0],
      },
      {
        duration: 0.7,
        delay: stagger(0.15, { startDelay: 0.3 }),
      },
    )
  }, [animate])

   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  return (
  <div
      ref={scope}
      className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-slate-950 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIwMjAyMDEwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-teal-600/10 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-50">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="relative">
            <Lock className="h-8 w-8 text-purple-400" />
            <motion.div
              className="absolute inset-0 bg-purple-400 rounded-full blur-md"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
          <span className="text-2xl font-bold">ChatLock</span>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {[""].map((item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10 hover:text-purple-400 transition-colors">{item}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-teal-400"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button className="relative overflow-hidden group">
            <span className="relative z-10 b-10"><a href="https://chatlock-v1.onrender.com/api/v1/auth">Sign Up</a></span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.h1 className="hero-element text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
          The Future of Private Social Networking
        </motion.h1>

        <motion.p className="hero-element text-lg md:text-xl max-w-3xl mb-10 text-gray-300">
          ChatLock merges visual storytelling, community engagement, and real-time conversations under one secure,
          privacy-first ecosystem.
        </motion.p>

        <motion.div className="hero-element flex flex-col sm:flex-row gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 relative overflow-hidden group">
              <span className="relative z-10 flex items-center">
               <a href="https://chatlock-v1.onrender.com/">Get Started</a>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-950 text-lg px-8 py-6 relative overflow-hidden"
            >
              
              <span className="relative z-10"><a href="https://chatlock-documentation.onrender.com/">Learn More</a>(Developer Only)</span>
              <motion.span
                className="absolute inset-0 bg-purple-950/50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-element mt-16 relative w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden border border-purple-800/50 shadow-2xl shadow-purple-900/20"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotateX: mousePosition.y * -0.5,
            rotateY: mousePosition.x * 0.5,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-indigo-900/30 backdrop-blur-sm flex items-center justify-center">
            {/* App Mockup */}
            <div className="w-[85%] h-[85%] relative rounded-lg overflow-hidden border border-white/10 shadow-lg">
              {/* App Header */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-indigo-950/90 border-b border-white/10 flex items-center px-4 z-10">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">ChatLock</span>
                </div>
                <div className="ml-auto flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Users className="h-3 w-3 text-purple-300" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <MessageSquare className="h-3 w-3 text-teal-300" />
                  </div>
                </div>
              </div>

              {/* App Content */}
              <div className="absolute inset-0 pt-12 bg-gradient-to-b from-indigo-950/80 to-slate-950/90">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-300" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Privacy Circle</div>
                      <div className="text-xs text-gray-400">Your trusted network</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Post 1 */}
                    <div className="rounded-lg bg-indigo-900/20 border border-indigo-800/30 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-teal-600/30"></div>
                        <div>
                          <div className="text-xs font-medium">Coder Irfan</div>
                          <div className="text-[10px] text-gray-400">2h ago • Private</div>
                        </div>
                        <div className="ml-auto">
                          <Lock className="h-3 w-3 text-teal-400" />
                        </div>
                      </div>
                      <div className="text-xs mb-2">
                        Just shared some thoughts on our new project. Feedback welcome!
                      </div>
                      <div className="h-24 rounded bg-indigo-800/20 flex items-center justify-center">
                        <div className="text-[10px] text-gray-400">Encrypted Content</div>
                      </div>
                    </div>

                    {/* Post 2 */}
                    <div className="rounded-lg bg-indigo-900/20 border border-indigo-800/30 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-600/30"></div>
                        <div>
                          <div className="text-xs font-medium">Roshni</div>
                          <div className="text-[10px] text-gray-400">5h ago • Friends</div>
                        </div>
                        <div className="ml-auto">
                          <Users className="h-3 w-3 text-purple-400" />
                        </div>
                      </div>
                      <div className="text-xs mb-2">Check out this amazing sunset from yesterday!</div>
                      <div className="h-32 rounded bg-gradient-to-b from-orange-500/30 to-purple-800/30 flex items-center justify-center">
                        <div className="text-[10px] text-gray-300">Protected Image</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection/Glare Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                animate={{
                  opacity: [0, 0.1, 0],
                  left: ["-100%", "200%", "-100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 5,
                }}
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-xl font-bold mb-2">ChatLock -- Privacy</h3>
            <p className="text-sm text-gray-300">Your data stays yours. Always.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            All-in-One Social Experience
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-10 w-10 text-purple-400" />,
              title: "Privacy-First",
              description:
                "Unlike platforms that prioritize data mining, ChatLock puts your privacy and content control first.",
            },
            {
              icon: <Users className="h-10 w-10 text-teal-400" />,
              title: "Community Engagement",
              description:
                "Build meaningful connections with profiles and communities that foster authentic engagement.",
            },
            {
              icon: <MessageSquare className="h-10 w-10 text-blue-400" />,
              title: "Real-Time Conversations",
              description: "Enjoy the immediacy of Twitter-like conversations with enhanced privacy controls.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" ref={privacyRef} className="bg-indigo-950/50 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -right-20 top-20 w-80 h-80 rounded-full bg-purple-600/5 blur-[80px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
                  Security That Never Compromises
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                ChatLock is built with privacy, content control, and authentic engagement at its core. Unlike current
                platforms that prioritize virality and data mining, we put you in control of your digital presence.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end encryption for all messages",
                  "Granular privacy controls for every post",
                  "No data mining or targeted advertising",
                  "Full content ownership and deletion rights",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      className="mt-1 bg-purple-500 rounded-full p-1"
                      whileHover={{ scale: 1.2, backgroundColor: "#a855f7" }}
                    >
                      <Lock className="h-4 w-4" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="md:w-1/2 relative h-80 md:h-96 w-full rounded-xl overflow-hidden border border-purple-800/50"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              style={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-indigo-900/30 backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateZ: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Lock className="h-24 w-24 text-purple-400 opacity-80" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-purple-400/20 blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>

              {/* Animated Shield Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 0.7, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 2,
                      ease: "easeInOut",
                    }}
                  >
                    <Shield className="h-8 w-8 text-purple-400/40" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

     

      {/* Footer */}
      <footer className="bg-slate-950 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center gap-2 mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <Lock className="h-6 w-6 text-purple-400" />
                <motion.div
                  className="absolute inset-0 bg-purple-400 rounded-full blur-md"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <span className="text-xl font-bold">ChatLock</span>
            </motion.div>

            <div className="flex gap-8 mb-6 md:mb-0">
              {["Coder Irfan", "Shailendra Rawat"].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-purple-400 transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-teal-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="text-gray-400">&copy; {new Date().getFullYear()} ChatLock. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-indigo-950/30 border border-purple-800/30 rounded-xl p-8 h-full relative overflow-hidden group"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)",
        borderColor: "rgba(139, 92, 246, 0.5)",
      }}
    >
      <motion.div
        className="absolute -right-20 -top-20 w-40 h-40 bg-purple-600/5 rounded-full blur-[30px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        className="mb-4 relative"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
        <motion.div
          className="absolute inset-0 bg-current rounded-full blur-lg opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <h3 className="text-xl font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-300 relative z-10">{description}</p>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-transparent"
        initial={{ width: "30%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default App