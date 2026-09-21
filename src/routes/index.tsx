import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChefHat,
  Clock3,
  Facebook,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button, buttonStyles } from "@/components/Button";
import heroImage from "@/assets/mama-bs-hero.jpg";
import menuSpread from "@/assets/nigerian-menu-spread.jpg";
import egusiImage from "@/assets/egusi-pounded-yam.jpg";
import cateringImage from "@/assets/catering-table.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mama B's Kitchen | Authentic Nigerian Catering in Abuja" },
      { name: "description", content: "Fresh Nigerian meals for family orders, office lunches and special events in Abuja. Order ahead or request a catering quote." },
      { property: "og:title", content: "Mama B's Kitchen | Nigerian Food Made With Love" },
      { property: "og:description", content: "Authentic home-style Nigerian food for families, offices and celebrations in Abuja." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const menuItems = [
  { name: "Jollof Rice", description: "Smoky, richly seasoned party jollof cooked with our signature tomato base.", image: menuSpread, position: "object-[22%_18%]" },
  { name: "Fried Rice", description: "Fragrant rice tossed with crisp vegetables and savoury Nigerian spices.", image: menuSpread, position: "object-[78%_18%]" },
  { name: "Pounded Yam & Egusi", description: "Smooth pounded yam with hearty melon-seed soup, greens and tender meat.", image: egusiImage, position: "object-center" },
  { name: "Ofada Rice & Sauce", description: "Local Ofada rice served with bold, deeply flavoured pepper sauce.", image: menuSpread, position: "object-[18%_82%]" },
  { name: "Moi Moi", description: "Silky steamed bean pudding, delicately spiced and wrapped with care.", image: menuSpread, position: "object-[76%_82%]" },
  { name: "Chicken", description: "Juicy, seasoned chicken—grilled or fried to a beautiful finish.", image: heroImage, position: "object-[62%_55%]" },
  { name: "Beef", description: "Tender Nigerian-style beef, simmered in a rich, aromatic sauce.", image: cateringImage, position: "object-[60%_48%]" },
  { name: "Fish", description: "Perfectly seasoned fish prepared for a flavourful, satisfying plate.", image: cateringImage, position: "object-[84%_44%]" },
];

const navItems = [
  ["Home", "#home"], ["Menu", "#menu"], ["Catering", "#catering"], ["About", "#about"], ["Contact", "#contact"],
] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="flex shrink-0 items-center gap-3" aria-label="Mama B's Kitchen home">
      <span className={`grid h-10 w-10 place-items-center rounded-full border ${light ? "border-primary-foreground/30 bg-primary-foreground/10" : "border-primary/20 bg-primary text-primary-foreground"}`}>
        <ChefHat size={20} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <strong className={`block font-display text-xl ${light ? "text-primary-foreground" : "text-primary"}`}>Mama B’s</strong>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.25em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Kitchen · Abuja</span>
      </span>
    </a>
  );
}

function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Mama B's Kitchen, I'd like a catering quote.",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "Not provided"}`,
      `Event: ${data.get("eventType")}`,
      `Date: ${data.get("eventDate")}`,
      `Guests: ${data.get("guests")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <main id="home">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-xl">
        <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
          <Brand />
          <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-foreground/75 transition-colors hover:text-primary">{label}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#menu" className={`${buttonStyles({ variant: "primary", size: "sm" })} hidden sm:inline-flex`}>Order Now <ArrowRight size={15} /></a>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen}>
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileOpen && <nav className="border-t border-border bg-background px-4 py-5 lg:hidden" aria-label="Mobile navigation"><div className="section-shell grid gap-1">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-accent">{label}</a>)}<a href="#menu" onClick={() => setMobileOpen(false)} className={`${buttonStyles({ variant: "primary" })} mt-2 sm:hidden`}>Order Now</a></div></nav>}
      </header>

      <section className="relative flex min-h-[min(860px,92vh)] items-end overflow-hidden pt-20 text-primary-foreground md:items-center">
        <img src={heroImage} alt="A generous Nigerian food spread with jollof rice, chicken, plantain, moi moi and egusi soup" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--burgundy-deep)_0%,color-mix(in_oklab,var(--burgundy-deep)_88%,transparent)_38%,color-mix(in_oklab,var(--burgundy-deep)_25%,transparent)_72%,transparent_100%)]" />
        <div className="section-shell relative py-20 md:py-28">
          <div className="max-w-2xl animate-float-in">
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cream-deep"><Sparkles size={15} /> Freshly prepared in Abuja</p>
            <h1 className="text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">Authentic Nigerian Flavours, <em className="text-cream-deep">Made With Love</em></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/85 sm:text-lg">Traditional Nigerian meals prepared fresh for family orders, office lunches, and special events in Abuja.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#menu" className={buttonStyles({ variant: "cream", size: "lg" })}>Order Now <ArrowRight size={18} /></a>
              <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-full border border-primary-foreground/50 bg-primary-foreground/10 px-7 text-base font-bold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20">Request Catering Quote</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-primary-foreground/75"><span className="flex items-center gap-2"><Check size={16} className="text-cream-deep" /> Made fresh to order</span><span className="flex items-center gap-2"><Check size={16} className="text-cream-deep" /> Local Abuja service</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 py-20 sm:py-28">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative"><img src={menuSpread} alt="A colourful spread of Nigerian rice dishes and moi moi" width={1408} height={1056} loading="lazy" className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]" /><div className="absolute -bottom-5 right-4 rounded-lg bg-primary px-6 py-5 text-primary-foreground shadow-brand sm:right-8"><p className="font-display text-3xl font-bold">100%</p><p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground/75">Home-style goodness</p></div></div>
          <div><p className="eyebrow">Our kitchen, your table</p><h2 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-5xl">Food that feels like home.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Mama B’s Kitchen is an Abuja home catering service rooted in the flavours we grew up loving. Every pot is prepared with care, quality ingredients, and the generous spirit of a family kitchen.</p><p className="mt-4 leading-7 text-muted-foreground">From an easy weekend meal to lunch for the whole office or a celebration full of guests, we bring authentic Nigerian cooking to every table.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["Traditional Nigerian flavours", "Freshly prepared meals", "True home-style cooking", "Families, offices & events"].map(item => <div key={item} className="flex items-center gap-3 font-semibold"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-primary"><Check size={15} /></span>{item}</div>)}</div></div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-20 bg-secondary/55 py-20 sm:py-28">
        <div className="section-shell"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">From our kitchen</p><h2 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">A taste of the menu</h2><p className="mt-4 leading-7 text-muted-foreground">Customer favourites, prepared fresh. Contact us for current availability, portion options, and pricing.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{menuItems.map(item => <article key={item.name} className="group overflow-hidden rounded-lg border border-border/70 bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-brand"><div className="overflow-hidden"><img src={item.image} alt={item.name} width={700} height={520} loading="lazy" className={`aspect-[4/3] w-full object-cover ${item.position} transition duration-500 group-hover:scale-105`} /></div><div className="p-5"><h3 className="text-xl font-bold text-primary">{item.name}</h3><p className="mt-2 min-h-16 text-sm leading-6 text-muted-foreground">{item.description}</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">Order Now <ArrowRight size={15} /></a></div></article>)}</div><div className="mt-10 text-center"><a href="#contact" className={buttonStyles({ variant: "primary", size: "lg" })}>Ask About Today’s Menu <MessageCircle size={18} /></a></div></div>
      </section>

      <section id="catering" className="scroll-mt-20 py-20 sm:py-28"><div className="section-shell"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Made for gathering</p><h2 className="mt-3 max-w-2xl text-4xl font-bold text-primary sm:text-5xl">Good food for every kind of occasion.</h2></div><a href="#contact" className={buttonStyles({ variant: "secondary" })}>Request Catering Quote <ArrowRight size={16} /></a></div><div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-card shadow-soft lg:grid-cols-3">{[
        { icon: PartyPopper, title: "Event Catering", text: "Traditional Nigerian meals prepared for birthdays, weddings, celebrations, and special events." },
        { icon: Users, title: "Office Lunches", text: "Convenient meal options for offices, meetings, team lunches, and corporate gatherings." },
        { icon: Heart, title: "Family & Weekend Orders", text: "Fresh home-style meals that make family time and weekend occasions feel effortless." },
      ].map((service, index) => <article key={service.title} className={`p-8 sm:p-10 ${index < 2 ? "border-b border-border lg:border-b-0 lg:border-r" : ""}`}><service.icon className="text-gold" size={30} /><h3 className="mt-6 text-2xl font-bold text-primary">{service.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{service.text}</p></article>)}</div></div></section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24"><div className="section-shell"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.14em] text-cream-deep">The Mama B’s promise</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">Why our customers choose us</h2></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[
        { icon: UtensilsCrossed, title: "Authentic Nigerian Flavours", text: "Beloved recipes with the flavour and character you expect." },
        { icon: Sparkles, title: "Freshly Prepared", text: "Every order is made fresh with carefully selected ingredients." },
        { icon: ShieldCheck, title: "Reliable Service", text: "Clear communication and dependable preparation for your date." },
        { icon: CalendarDays, title: "Perfect for Every Occasion", text: "From an intimate family meal to a joyful celebration." },
      ].map(item => <article key={item.title} className="text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-foreground/10 text-cream-deep"><item.icon /></span><h3 className="mt-5 text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{item.text}</p></article>)}</div></div></section>

      <section className="py-20 sm:py-28"><div className="section-shell"><div className="mx-auto max-w-xl text-center"><p className="eyebrow">Simple from start to finish</p><h2 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">How it works</h2></div><div className="relative mt-14 grid gap-10 md:grid-cols-3"><div className="absolute left-[16.5%] right-[16.5%] top-7 hidden border-t border-dashed border-primary/30 md:block" />{[
        ["01", "Choose Your Meals", "Browse the menu and select what you want."], ["02", "Place Your Order", "Send your order details and preferred date."], ["03", "Enjoy Your Food", "We prepare everything fresh for collection or delivery arrangements."],
      ].map(([num, title, text]) => <article key={num} className="relative text-center"><span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-background bg-primary font-bold text-primary-foreground">{num}</span><h3 className="mt-5 text-2xl font-bold text-primary">{title}</h3><p className="mx-auto mt-2 max-w-xs leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="bg-burgundy-deep py-20 text-primary-foreground sm:py-28"><div className="section-shell"><div className="mb-10 max-w-xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-cream-deep">Made to delight</p><h2 className="mt-3 text-4xl font-bold sm:text-5xl">A feast for the eyes, too.</h2></div><div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-4"><img src={heroImage} alt="Jollof rice and Nigerian sides" width={1920} height={1200} loading="lazy" className="h-full w-full rounded-lg object-cover sm:row-span-2" /><img src={egusiImage} alt="Pounded yam and egusi soup" width={1200} height={1008} loading="lazy" className="h-full w-full rounded-lg object-cover" /><img src={cateringImage} alt="Nigerian event catering buffet" width={1408} height={1056} loading="lazy" className="h-full w-full rounded-lg object-cover sm:col-span-2" /><img src={menuSpread} alt="Selection of freshly prepared Nigerian dishes" width={1408} height={1056} loading="lazy" className="h-full w-full rounded-lg object-cover sm:col-span-2 lg:col-span-1" /></div></div></section>

      <section id="contact" className="scroll-mt-20 bg-secondary/55 py-20 sm:py-28"><div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"><div><p className="eyebrow">Let’s plan your order</p><h2 className="mt-3 text-4xl font-bold text-primary sm:text-5xl">Tell us what you’re celebrating.</h2><p className="mt-5 leading-7 text-muted-foreground">Planning ahead helps us prepare every dish at its best. Share a few details and continue your request on WhatsApp.</p><div className="mt-8 space-y-4"><div className="flex items-center gap-3"><MapPin className="text-primary" /><span><strong className="block">Serving Abuja</strong><span className="text-sm text-muted-foreground">Collection and delivery arrangements available</span></span></div><div className="flex items-center gap-3"><Clock3 className="text-primary" /><span><strong className="block">Advance orders welcome</strong><span className="text-sm text-muted-foreground">Book early for events and large orders</span></span></div></div><a href="https://wa.me/?text=Hello%20Mama%20B%27s%20Kitchen%2C%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer" className={`${buttonStyles({ variant: "primary" })} mt-8`}><MessageCircle size={18} /> Chat on WhatsApp</a></div>
      <form onSubmit={handleQuote} className="rounded-lg border border-border bg-card p-6 shadow-soft sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your full name" required /><Field label="Phone number" name="phone" type="tel" placeholder="Your phone number" required /><Field label="Email" name="email" type="email" placeholder="you@example.com" /><label className="grid gap-2 text-sm font-bold">Event type<select name="eventType" required defaultValue="" className="h-12 rounded-lg border border-input bg-background px-4 font-normal outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Select an event</option><option>Birthday</option><option>Wedding</option><option>Office lunch</option><option>Family order</option><option>Other</option></select></label><Field label="Event date" name="eventDate" type="date" required /><Field label="Number of guests" name="guests" type="number" min="1" placeholder="e.g. 50" required /></div><label className="mt-5 grid gap-2 text-sm font-bold">Message<textarea name="message" rows={4} required placeholder="Tell us about the meals or service you need" className="rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring" /></label><Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">Request Catering Quote <ArrowRight size={18} /></Button><p className="mt-3 text-xs text-muted-foreground">Submitting opens WhatsApp with your request ready to send.</p></form></div></section>

      <section className="relative overflow-hidden bg-primary py-20 text-center text-primary-foreground"><div className="section-shell relative"><ChefHat className="mx-auto text-cream-deep" size={42} /><h2 className="mt-5 text-4xl font-bold sm:text-5xl">Planning Your Next Meal or Event?</h2><p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/75">Let Mama B’s Kitchen bring authentic Nigerian flavours to your table.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#menu" className={buttonStyles({ variant: "cream", size: "lg" })}>Order Now</a><a href="#contact" className="inline-flex h-14 items-center justify-center rounded-full border border-primary-foreground/40 px-7 font-bold transition hover:bg-primary-foreground/10">Request Catering Quote</a></div></div></section>

      <footer className="bg-burgundy-deep py-14 text-primary-foreground"><div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_0.7fr]"><div><Brand light /><p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/65">Authentic Nigerian meals, lovingly prepared for families, offices, and special events across Abuja.</p></div><div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-cream-deep">Explore</h3><nav className="mt-4 grid gap-3 text-sm text-primary-foreground/70">{navItems.slice(1).map(([label, href]) => <a key={href} href={href} className="hover:text-primary-foreground">{label}</a>)}</nav></div><div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-cream-deep">Contact</h3><div className="mt-4 grid gap-3 text-sm text-primary-foreground/70"><span className="flex gap-2"><MapPin size={16} /> Abuja, Nigeria</span><a href="#contact" className="flex gap-2 hover:text-primary-foreground"><MessageCircle size={16} /> WhatsApp Mama B’s Kitchen</a></div></div><div><h3 className="font-sans text-sm font-bold uppercase tracking-[0.12em] text-cream-deep">Follow</h3><div className="mt-4 flex gap-3"><a href="#contact" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"><Instagram size={18} /></a><a href="#contact" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"><Facebook size={18} /></a></div></div></div><div className="section-shell mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50">© {new Date().getFullYear()} Mama B’s Kitchen. Made with love in Abuja.</div></footer>
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required, min }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; min?: string }) {
  return <label className="grid gap-2 text-sm font-bold">{label}<input name={name} type={type} placeholder={placeholder} required={required} min={min} className="h-12 rounded-lg border border-input bg-background px-4 font-normal outline-none placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-ring" /></label>;
}