import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  title: "Promptify",
  description: "DIscover and share AI propmts",
  image: "/images/favicon.ico",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Provider>
          <div className="bg" />
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
