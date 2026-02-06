/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Elegant Cream Pastel Palette
        "cream-light": "#FAF8F3",
        "cream-base": "#F5F1E8",
        "cream-warm": "#EDE7DC",
        "cream-dark": "#E5DCC9",
        "beige-soft": "#D9CDB8",
        "beige-medium": "#C9BDA5",
        "gold-muted": "#B8A888",
        "gold-accent": "#A89968",
        
        // Text colors
        "text-primary": "#2C2416",
        "text-secondary": "#5C5445",
        "text-light": "#8B8070",
        "text-muted": "#A39889",
        
        // Accent colors
        "accent-warm": "#D4B896",
        "accent-gold": "#C9A961",
        
        // Glassmorphism
        "glass-cream": "rgba(250, 248, 243, 0.8)",
        "glass-border": "rgba(217, 205, 184, 0.3)",
        
        // Legacy colors (keeping for compatibility)
        "deep-blue": "#2C2416",
        "dark-grey": "#5C5445",
        "opaque-black": "rgba(44, 36, 22, 0.35)",
        black: "#2C2416",
        grey: "#E5DCC9",
        brown: "#8B8070",
        "navbar-main": "rgba(250, 248, 243, 0.85)",
        "navbar-mobile": "rgba(250, 248, 243, 0.95)",
        
        "intense-yel": "#C9A961",
        whity: "#2C2416",
        button: "#C9A961",
        "color-button-font": "#FFFFFF",
        "bg-main": "#FAF8F3",
        "light-black": "#5C5445",
      },
      backgroundImage: {
        "gradient-cream":
          "linear-gradient(135deg, #FAF8F3 0%, #F5F1E8 50%, #EDE7DC 100%)",
        
        "gradient-warm":
          "linear-gradient(135deg, #F5F1E8 0%, #E5DCC9 50%, #D9CDB8 100%)",
        
        "gradient-elegant":
          "linear-gradient(to bottom, #FAF8F3 0%, #F5F1E8 100%)",
        
        "gradient-gold":
          "linear-gradient(90deg, #D4B896 0%, #C9A961 100%)",
        
        "gradient-soft":
          "linear-gradient(135deg, #FAF8F3 0%, #EDE7DC 100%)",
        
        "gradient-hero":
          "linear-gradient(135deg, #FAF8F3 0%, #F5F1E8 50%, #EDE7DC 100%)",
        
        // Legacy gradients
        "gradient-1":
          "linear-gradient(90deg, #E5DCC9 50%, #D9CDB8 86%, #C9BDA5 127%)",

        "gradient-2":
          "linear-gradient(90deg, #F5F1E8 50%, #E5DCC9 86%, #D9CDB8 127%)",

        "gradient-raingreen": "linear-gradient(to right, #D4B896, #C9A961)",

        "gradient-rainblue":
          "linear-gradient(90deg, #E5DCC9 15%, #D9CDB8 45%, #C9BDA5 75%, #B8A888 100%)",
          
        "gradient-lavender":
          "linear-gradient(90deg, #E5DCC9 0%, #D4B896 100%)",
        
        "gradient-mint":
          "linear-gradient(90deg, #D9CDB8 0%, #C9BDA5 100%)",
        
        "gradient-peach":
          "linear-gradient(90deg, #F5F1E8 0%, #E5DCC9 100%)",
          
        "gradient-pastel":
          "linear-gradient(135deg, #FAF8F3 0%, #F5F1E8 50%, #EDE7DC 100%)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(44, 36, 22, 0.08)',
        'soft': '0 4px 20px 0 rgba(44, 36, 22, 0.06)',
        'elegant': '0 2px 12px 0 rgba(44, 36, 22, 0.04)',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
