import React from "react";

export default function AdmAvisos(props) {
    return (
        <div class="bg-gray-100 font-sans">

            <header class="bg-blue-500 text-white p-4">
                <h1 class="text-2xl font-bold">Seu Cabeçalho</h1>
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="hover:text-gray-300">Página Inicial</a></li>
                        <li><a href="#" class="hover:text-gray-300">Sobre Nós</a></li>
                        <li><a href="#" class="hover:text-gray-300">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <main class="container mx-auto mt-4">
                <section class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">Seção Principal</h2>
                    <p>Conteúdo da seção principal.</p>
                </section>

                <section class="mb-8">
                    <h2 class="text-2xl font-bold mb-4">Outra Seção</h2>
                    <article class="mb-4">
                        <h3 class="text-xl font-bold mb-2">Artigo 1</h3>
                        <p>Conteúdo do artigo 1.</p>
                    </article>
                    <article class="mb-4">
                        <h3 class="text-xl font-bold mb-2">Artigo 2</h3>
                        <p>Conteúdo do artigo 2.</p>
                    </article>
                </section>

                <aside class="bg-gray-200 p-4">
                    <h2 class="text-xl font-bold mb-2">Barra Lateral</h2>
                    <p>Conteúdo da barra lateral.</p>
                </aside>
            </main>

            <footer class="bg-blue-500 text-white p-4 mt-8">
                <p>Rodapé da Página</p>
                <nav>
                    <ul class="flex space-x-4">
                        <li><a href="#" class="hover:text-gray-300">Termos de Serviço</a></li>
                        <li><a href="#" class="hover:text-gray-300">Política de Privacidade</a></li>
                    </ul>
                </nav>
            </footer>

        </div>
    );
}