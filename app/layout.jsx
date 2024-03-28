import "@styles/globals.css";
import { Children } from "react";
import Nav from "@components/navbar";
import Provider from "@components/Provider";
export const metadata = {
  title: "FarmStack",
  description: "Discover and Share Ideas about Farming",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient"></div>
          </div>  

          <main className="app">
              <Nav />
              {children}
          </main>
        </body>
      </Provider>
      
    </html>
  );
};

export default RootLayout;
