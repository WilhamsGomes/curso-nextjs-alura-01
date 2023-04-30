import Link from 'next/link'
import PageTitle from '../src/components/PageTitle';
import FAQScreen from '../src/screens/FAQScreen';

// SSG - Static Site Generation
// O ponto forte do SSG é a entrega rápida de conteúdos estáticos
// SSR - Server Side Rendering 
// ISG - Incremental Static Generation

// ⬇⬇ Renderiza apenas build time; Gera uma página estática; - SSG
// Essa função busca os dados durante o build. Ou seja, essa função é executada apenas uma vez.
// export async function getStaticProps() 

// ⬇⬇ Renderiza a cada acesso que você receber - SSR
// Essa função busca os dados do lado do servidor para cada requisição.
// export async function getServerSideProps()

//*Em DEV, ambas rodam a cada acesso

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response
        });

    return {
        props: {
            faq
        }, // will be passed to the page component as props
    }
}

export default FAQScreen;