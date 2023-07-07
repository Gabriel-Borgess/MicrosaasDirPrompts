import Feed from "@components/Feed"


// `app/page.js` is the UI for the `/` URL
export default function Page() {
    return <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Descubra, Compartilhe e Explore  <br className="max-md:hidden" />
        <span className="bg-gradient-to-tr from-cyan-400 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Ideias de <br
        /> Prompts para Microsaas </span>
        </h1>
        <p className="desc text-center">A comunidade de prompts para IA, onde você pode inspirar-se, compartilhar suas criações e explorar as ideias mais recentes para impulsionar seu negócio de Microsaas.</p>
        <div>
        
        </div>
        
        <Feed />
    
    
    </section>
    
  }