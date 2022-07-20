import React from "react";
import { Transition } from "@tailwindui/react";
import { StaticImage } from "gatsby-plugin-image";

const HeaderSlide: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Transition
      show={isOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      className="fixed inset-x-0 p-2 origin-top-right md:hidden top-0 z-10"
    >
      <div className="rounded-lg shadow-lg">
        <div className="rounded-lg shadow-xs divide-y-2 divide-gray-50 bg-secondary">
          <div className="pt-5 pb-6 px-5 space-y-6">
            <div className="absolute right-7">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <nav>
                <a
                  href="#"
                  className="link -m-3 p-3 flex items-center space-x-3 rounded-md"
                >
                  <div className="text-base leading-6 font-medium">Home</div>
                </a>
                <a
                  href="#"
                  className="link -m-3 p-3 flex items-center space-x-3 rounded-md"
                >
                  <div className="text-base leading-6 font-medium">About</div>
                </a>
                <a
                  href="#"
                  className="link -m-3 p-3 flex items-center space-x-3 rounded-md"
                >
                  <div className="text-base leading-6 font-medium">
                    Facebook
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 row-gap-4 col-gap-8">
              <div className="flex flex-col">
                <h4 className="py-2 font-bold">Category</h4>
                <a
                  href="#"
                  className="link text-base leading-6 font-medium py-1"
                >
                  JavaScript
                </a>
                <a
                  href="#"
                  className="link text-base leading-6 font-medium py-1"
                >
                  Life
                </a>
                <a
                  href="#"
                  className="link text-base leading-6 font-medium py-1"
                >
                  Marketing
                </a>
              </div>
              <div className="flex flex-col">
                <h4 className="py-2 font-bold">Sponsor Creator</h4>
                <a
                  href="https://store.line.me/stickershop/author/1019955/zh-Hant"
                  className="link text-base leading-6 font-medium py-1"
                  target="_blank"
                >
                  <StaticImage
                    src="../../content/images/hippostick.png"
                    alt="line sticky hippo"
                    width={200}
                    height={200}
                  />
                  <p className="text-base">Line Sticky</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default HeaderSlide;
