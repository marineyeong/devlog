import Link from 'next/link';

export default function PostItem({ className }) {
  return (
    <li className={`border-1 border-bluegray rounded-lg ${className} hover:shadow-md hover:transition-shadow`}>
      <Link href="../blog/PostList" className="px-4 py-3">
        <h4 className="text-2xl font-bold">제목 영역</h4>
        <p className="my-3 text-gray">
          소개글 영역소개글 영역소개글 영역소개글 영역소개글 영역소개글 영역소개글 영역소개글 영역
        </p>
        <p className="text-sm text-light-gray">작성일자.</p>
      </Link>
    </li>
  );
}
