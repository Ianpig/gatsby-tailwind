import React, { useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

import type { CategoriesType, TagsType } from "../pages/index";

const SideBar = ({
  categories,
  tags,
}: {
  categories: CategoriesType[];
  tags: TagsType[];
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { rootMargin: "0px 0px -100%" });
  const isVisible = entry?.isIntersecting;

  return (
    <div ref={ref} className="h-full">
      <div className={isVisible ? "sticky top-0" : ""}>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Sponsor Creator</p>
          <a
            href="https://store.line.me/stickershop/author/1019955/zh-Hant"
            className="link text-base leading-6 font-medium py-1 text-center"
            target="_blank"
          >
            <StaticImage
              src="../../content/images/hippostick.png"
              alt="line sticky hippo"
              width={150}
            />
            <p className="text-base text-center py-2">Line Sticky</p>
          </a>
        </div>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Category</p>
          <div>
            {categories.map(({ value }) => (
              <Link key={value} to={`/categories/${value}`}>
                <p className="text-sm pb-2">{value}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6">
          <p className="text-base py-2 font-medium">Tag</p>
          <div className="flex flex-wrap">
            {tags.map(({ value }, index) => (
              <div className="tag-item" key={value}>
                <Link to={`/tags/${value}`}>
                  <span className="text-sm pb-2">{value}</span>
                </Link>
                {index < tags.length - 1 && <span className="px-0.5">·</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
