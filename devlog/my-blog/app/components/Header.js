'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="max-w-[1280px] mx-auto">
        <h1 className="my-3 font-display-serif text-2xl font-bold text-center">
          <Link href="/" className="py-2 font-display-serif">
            Marine.dev
          </Link>
        </h1>
        <ul className="flex justify-center">
          <li className="mx-2">
            <Link href="/post" className="p-2 text-gray">
              게시글
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/project" className="p-2 text-gray">
              프로젝트
            </Link>
          </li>
        </ul>
      </div>
      <p className="py-1 font-display-serif text-light-gray text-sm text-center border-solid border-y-1 border-border-gray">
        From Front-end Developer To Fullstack Developer
      </p>
    </header>
  );
}
