import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type PostItemType = {
  slug: string;
  title: string;
  description: string;
  postImage?: IGatsbyImageData;
  date: string;
};

const PostItem = ({
  slug,
  title,
  description,
  postImage,
  date,
}: PostItemType) => {
  return (
    <article
      key={slug}
      className="grid grid-cols-3 gap-4"
      itemScope
      itemType="http://schema.org/Article"
    >
      <div className="col-span-2 flex flex-col">
        <header className="pb-2">
          <h2>
            <Link to={slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
        </header>
        <section className="pb-2 grow">
          <Link to={slug} itemProp="url">
            <p
              className="line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              itemProp="description"
            />
          </Link>
        </section>
        <small>{date}</small>
      </div>
      <div>{postImage && <GatsbyImage image={postImage} alt={title} />}</div>
    </article>
  );
};

export default PostItem;
