/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/globals.css',
  ],
  theme: {
    extend: {
      colors: {
        // https://uicolors.app/create
        // Cores Principais
        'corPrimaria': '#FFFFFF',

        // Cores Destaque
        'azulPrincipal': '#071D41', 
        'azulIcones': '#0C326F',
        'azulLinks': '#0F3E8C',
        
        // Cores Alternativas
        'alternativa1': '#155BCB',
        'alternativa2': '#5992ED',
        'corCard': '#BBBDC9',

        // Cores de Feedback
        'sucesso': '#168821',
        'alerta': '#FFCD07',
        'error': '#E52207',
      },

    },
  },
  plugins: [],
}
