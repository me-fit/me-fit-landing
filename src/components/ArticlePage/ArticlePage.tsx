import { ReactNode } from "react";
import styles from "./ArticlePage.module.css";

interface ArticlePageProps {
  children: ReactNode
}

function ArticlePage({
  children
}: ArticlePageProps) {
  return (
    <main className={`${styles.main}`}>
        <article>
            {children}
        </article>
    </main>
  );
}

export default ArticlePage;
