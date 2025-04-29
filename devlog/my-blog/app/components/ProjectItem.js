import Link from 'next/link';

export default function ProjectItem({ className }) {
  return (
    <li className={`${className}`}>
      <Link href={'/'} className="px-2 py-3">
        <i className="block m-0 md:inline-block md:mr-3 md:align-middle">
          <img src={'/ico_project.png'} width={100} height={100} alt="프로젝트명" className="mx-auto"></img>
        </i>
        <dl className="block py-2 md:inline-block md:align-middle">
          <dt className="text-lg font-bold text-center md:text-left">프로젝트명</dt>
          <dd className="block mt-2 text-gray text-center md:text-left">프로젝트 설명</dd>
        </dl>
      </Link>
    </li>
  );
}
