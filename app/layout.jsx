import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "MicroSaaS Prompts",
  description: "Descubra e compartilhe os melhores prompts",
};

const RootLayout = ({ children }) => (
  <html lang='pt-br'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
        <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;