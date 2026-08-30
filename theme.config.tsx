import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <>
    <div className="flex flex-row align-middle justify-center">
      <img className="h-12 w-auto rounded-md" src="/logo.png"></img>
      <h1 className="text-2xl ml-2 font-bold inline-block" style={{lineHeight: "3rem"}}>AnyLabeling</h1>
    </div>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/vietanhdev/anylabeling",
  },
  docsRepositoryBase: "https://github.com/nrl-ai/anylabeling-docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – AnyLabeling",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://anylabeling.nrl.ai/og.jpeg"
        : `https://anylabeling.nrl.ai/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Effortless AI-assisted data labeling with AI support from Segment Anything and YOLO!"
        />
        <meta
          property="og:description"
          content="Effortless AI-assisted data labeling with AI support from Segment Anything and YOLO!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="anylabeling.nrl.ai" />
        <meta name="twitter:url" content="https://anylabeling.nrl.ai" />
        <meta
          property="og:title"
          content={title ? title + " – AnyLabeling" : "AnyLabeling"}
        />
        <meta property="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="AnyLabeling" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
      </>
    );
  },
  banner: {
    key: "anylearning-oss",
    text: (
      <a
        href="https://github.com/nrl-ai/anylearning-oss"
        target="_blank"
        rel="noreferrer"
      >
        AnyLearning is now open source: label data and train models offline →
      </a>
    ),
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Neural Research Lab Website"
            href="https://www.nrl.ai"
          >
            <div className="pt-0 mt-0">
              Developed by{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-bold">
                Neural Research Lab
              </span>
              .
            </div>
          </a>
        </div>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} The AnyLabeling Project.
        </p>
      </div>
    ),
  },
};

export default config;
