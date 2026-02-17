"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, useScroll, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ChevronDown } from "lucide-react";
import { RESUME_DATA, SKILL_ICONS, CHAT_RESPONSES, CHAT_PLACEHOLDERS } from "@/data/resume";
import Image from "next/image";

function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

function RotatingPlaceholder() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % CHAT_PLACEHOLDERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 0.5 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[var(--text-muted)] text-sm pointer-events-none whitespace-nowrap overflow-hidden"
      >
        {CHAT_PLACEHOLDERS[index]}
      </motion.span>
    </AnimatePresence>
  );
}

export default function Hero() {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const chatEndRef = useRef(null);
  const chatWidgetRef = useRef(null);
  const windowWidth = useWindowWidth();

  const isMobile = windowWidth > 0 && windowWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.92]);
  const heroY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -60]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const avatarX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const avatarY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const iconParallaxX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const iconParallaxY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const ringX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const ringY = useTransform(smoothY, [-0.5, 0.5], [-4, 4]);
  const outerRingX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const outerRingY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredSkill(null);
  }, [mouseX, mouseY]);

  const glowColor = hoveredSkill
    ? SKILL_ICONS.find((s) => s.name === hoveredSkill)?.color || null
    : null;

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [messages, isTyping]);

  // Close chat messages when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatWidgetRef.current && !chatWidgetRef.current.contains(e.target)) {
        if (messages.length > 0) {
          setChatOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [messages.length]);

  const handleChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setChatInput("");
    setChatOpen(true);
    setIsTyping(true);
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let response = CHAT_RESPONSES.default;
      if (lower.includes("who") && lower.includes("astle")) response = CHAT_RESPONSES.who;
      else if (lower.includes("resume") || lower.includes("cv") || lower.includes("download")) response = CHAT_RESPONSES.resume;
      else if (lower.includes("experience") || lower.includes("work experience")) response = CHAT_RESPONSES.experience;
      else if (lower.includes("currently working") || lower.includes("where")) response = CHAT_RESPONSES.working;
      else if (lower.includes("hire") || lower.includes("freelance")) response = CHAT_RESPONSES.hire;
      else if (lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) response = CHAT_RESPONSES.skills;
      else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach")) response = CHAT_RESPONSES.contact;
      else if (lower.includes("project") || lower.includes("built")) response = CHAT_RESPONSES.projects;
      else if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) response = CHAT_RESPONSES.greeting;
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
      setIsTyping(false);
    }, 900);
  };

  const getIconPosition = (index) => {
    const count = SKILL_ICONS.length;
    const angle = (2 * Math.PI * index) / count - Math.PI / 2;
    if (isMobile) {
      const radiusX = 52;
      const radiusY = 42;
      return { cx: 50 + radiusX * Math.cos(angle), cy: 50 + radiusY * Math.sin(angle) };
    }
    const radiusPercent = 58;
    return { cx: 50 + radiusPercent * Math.cos(angle), cy: 50 + radiusPercent * Math.sin(angle) };
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden"
    >
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-16 lg:gap-24"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left w-full space-y-5"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting Badge */}
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Hello, I am
          </motion.div>

          {/* Name + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.1]">
              Astle Machado
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--text-muted)] tracking-tight leading-[1.2] mt-1">
              I turn ideas into reality.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            As a Senior Software Engineer, I specialize in building scalable, secure cloud-based applications and crafting engaging user interfaces. From architecting complex backends in{" "}
            <span className="font-medium text-[var(--text-primary)]">Node.js</span> to creating responsive frontends with{" "}
            <span className="font-medium text-[var(--text-primary)]">React</span>, I solve tough problems and deliver impactful solutions.
          </motion.p>

          {/* AI Chat — Frosted Glass Widget */}
          <motion.div
            ref={chatWidgetRef}
            className="relative max-w-xl mx-auto md:mx-0 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-black/[0.06] dark:border-white/[0.12] shadow-[0_8px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Chat Messages Area */}
              {messages.length > 0 && chatOpen && (
                <div className="max-h-56 overflow-y-auto p-5 space-y-3.5 scrollbar-thin">
                  <AnimatePresence initial={false}>
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                            msg.role === "user"
                              ? "bg-[var(--text-primary)]/10 text-[var(--text-primary)] rounded-br-md"
                              : "bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white rounded-bl-md"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce [animation-delay:0.15s]" />
                        <span className="w-1.5 h-1.5 bg-white/80 rounded-full animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </motion.div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              )}

              {/* Input Bar */}
              <form
                onSubmit={handleChat}
                className={`flex items-center gap-3 px-5 py-4 ${
                  messages.length > 0 && chatOpen ? "border-t border-black/[0.06] dark:border-white/[0.08]" : ""
                }`}
              >
                <Search size={16} className="text-[var(--text-muted)] flex-shrink-0" />
                <div className="flex-1 relative min-w-0">
                  <input
                    type="text"
                    className="bg-transparent w-full text-[var(--text-primary)] outline-none text-sm sm:text-base relative z-10"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onFocus={() => { setIsFocused(true); setChatOpen(true); }}
                    onBlur={() => setIsFocused(false)}
                  />
                  {!chatInput && !isFocused && (
                    <div className="absolute inset-0 flex items-center">
                      <RotatingPlaceholder />
                    </div>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs font-bold tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:shadow-[0_0_24px_rgba(99,102,241,0.35)]"
                  whileTap={{ scale: 0.93 }}
                >
                  <Sparkles size={14} />
                  <span>AI</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Interactive Avatar + Floating Skill Icons */}
        <motion.div
          ref={containerRef}
          className="relative flex justify-center items-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[clamp(340px,40vw,520px)] md:h-[clamp(340px,40vw,520px)] flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="absolute inset-[15%] rounded-full blur-3xl z-0 transition-colors duration-700"
            style={{
              background: glowColor
                ? `radial-gradient(circle, ${glowColor}25 0%, transparent 70%)`
                : "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
            }}
          />

          <motion.div
            className="absolute inset-[12%] sm:inset-[10%] md:inset-[8%] z-20 flex items-center justify-center"
            style={{ x: avatarX, y: avatarY }}
          >
            <motion.div
              className="w-full h-full relative"
              style={{
                filter: glowColor
                  ? `drop-shadow(0 0 30px ${glowColor}40)`
                  : "drop-shadow(0 8px 24px rgba(0,0,0,0.3))",
                transition: "filter 0.5s ease",
              }}
            >
              <Image
                src="/images/avatar-bg-removed.png"
                alt="Astle Machado"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-[2%] border border-[var(--border-color)]/20 rounded-full z-0"
            style={{ x: ringX, y: ringY }}
          />
          <motion.div
            className="absolute inset-[-8%] border border-[var(--border-color)]/10 rounded-full z-0"
            style={{ x: outerRingX, y: outerRingY }}
          />

          {SKILL_ICONS.map((skill, index) => {
            const { cx, cy } = getIconPosition(index);
            const isHovered = hoveredSkill === skill.name;
            return (
              <motion.div
                key={skill.name}
                className="absolute z-30"
                style={{
                  top: `${cy}%`,
                  left: `${cx}%`,
                  x: isMobile ? 0 : iconParallaxX,
                  y: isMobile ? 0 : iconParallaxY,
                }}
                animate={{ translateY: [0, -6, 0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5 + index * 0.4,
                  delay: index * 0.25,
                  ease: "easeInOut",
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[var(--bg-card)] rounded-full flex items-center justify-center border border-[var(--border-color)] cursor-pointer"
                  style={{
                    marginLeft: "-50%",
                    marginTop: "-50%",
                    boxShadow: isHovered
                      ? `0 0 30px ${skill.color}50, 0 0 60px ${skill.color}25, 0 4px 20px ${skill.color}30`
                      : `0 4px 24px ${skill.color}20, 0 0 50px ${skill.color}08`,
                    transition: "box-shadow 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  title={skill.name}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 object-contain"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] cursor-pointer z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
