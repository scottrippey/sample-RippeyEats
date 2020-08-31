import React from 'react';
import { BlogEntryData } from '~/common/blogEntries';

const classes = {
  title: "text-orange underline text-34 "
};

const titleClass = "text-orange"

export const BlogEntry: React.FC<{ data: BlogEntryData }> = ({ data }) => {
  return <article className="article">
    <img src={data.imageUrl} alt="Blog Image" className="float-left mr-20" />
    <div className="text-gray text-14 pt-10">
      {data.published}
    </div>
    <h1>
      {data.title}
    </h1>
    <p>
      {data.blurb}
    </p>

    <a>
      Read More
    </a> <More />

  </article>
};


const More: React.FC = () => {
  return <span className="text-20 text-orange no-underline">&gt;</span>
}
