export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  backgroundClass: string;
  productImage: string;
  badge: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Say Goodbye to Tooth Sensitivity",
    subtitle: "Enjoy your favorite hot and cold foods again with Medident Sensitive Care",
    description: "Clinically proven formula provides 24/7 protection from tooth sensitivity",
    primaryCTA: "Shop Sensitive Care",
    secondaryCTA: "Learn More",
    backgroundClass: "slide-sensitivity",
    productImage: "/assets/medident-sensetive-care.jpeg",
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "Healthy Gums, Confident Smile",
    subtitle: "Advanced gum protection with Medident-G Gum Care toothpaste",
    description: "Anti-bacterial formula prevents bleeding and strengthens gums naturally",
    primaryCTA: "Shop Gum Care",
    secondaryCTA: "Learn More",
    backgroundClass: "slide-gum-care",
    productImage: "/assets/medident-g.jpeg",
    badge: "New Formula"
  },
  {
    id: 3,
    title: "Complete Oral Care Solutions",
    subtitle: "From sensitivity relief to gum protection - Made in Bangladesh with pride",
    description: "Choose the perfect solution for your oral health needs",
    primaryCTA: "Shop All Products",
    secondaryCTA: "Take Product Quiz",
    backgroundClass: "slide-complete",
    productImage: "/assets/medident-sensetive-care.jpeg",
    badge: "Made in Bangladesh"
  }
];