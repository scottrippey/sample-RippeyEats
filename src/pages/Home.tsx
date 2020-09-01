import React from 'react';
import { BLOG_ENTRIES } from "~/common/blogEntries";
import { BlogEntry } from "~/components/blog/BlogEntry";
import { Header } from '~/components/header/Header';

export const Home: React.FC = () => {
    return <>
      <Header />
      <Content>
        { BLOG_ENTRIES.map((data, index) =>
          <BlogEntry key={index} data={data} />
        )}
      </Content>
    </>;
};

/**
 * Just a wrapper that includes the content padding
 */
const Content: React.FC = ({ children }) => {
  return <section className="px-20 lg:px-40 py-20">
    {children}
  </section>
}
