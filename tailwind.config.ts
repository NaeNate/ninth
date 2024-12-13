import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#170c13",
        background: "#fcfafc",
        primary: "#a85d8c",
        secondary: "#b6bc83",
      },
    },
  },
}

export default config
