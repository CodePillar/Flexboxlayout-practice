export default function Header() {
  return (
    <div className="h-screen w-auto flex-row mx-60 bg-slate-300 p-5 space-y-2">
      <header className="Header-top">
        <div className="E1">Header</div>
      </header>
      <Nav />
      <Aside />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="h-9 w-full bg-green-500 justify-center flex rounded-xl">
      <div className="bg-green-500 content-center">Nav-bar</div>
    </nav>
  );
}

function Aside() {
  return (
    <div className="container">
      <aside className="Aside">
        <div className="aside-box">Aside</div>
      </aside>
      <main className="Main">
        <article className="article">
          <div className="article-box">
            Article
            <figure className="figure">
              <div className="figure-box">Figure</div>
            </figure>
            <p className="Para">
              <div className="para-box">P</div>
            </p>
          </div>
        </article>
        <section className="section">
          <div className="section-box">Section</div>
        </section>
      </main>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">Footer</div>
    </footer>
  );
}
