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
        'corCard': '#EBF2FF',

        // Cores de Feedback
        'sucesso': '#10C621',
        'alerta': '#FFCD07',
        'error': '#E52207',

        'houverLink': '#718EF7', 

        'botao': '#3B82F6',
        'botaoHover': '#1D4ED8',

        // Escala de Cinza
        'cinzaEscuro': '#595959',
        'cinzaMedio': '#909090',
        'cinzaClaro': '#D0D0D0',
      },

    },
  },
  plugins: [],
}
