import Link from 'next/link';
import PostLayout from './post/layout';
import ProjectLayout from './project/layout';

export default function Home() {
  return (
    <>
      <section>
        <div className="max-w-[1280px] px-5 py-9 mx-auto">
          <h2 className="my-2 text-6xl leading-[1.25] font-bold">안녕하세요, 마린입니다.</h2>
          <p className="text-3xl leading-[1.5] py-6">
            개발이라는 변화무쌍한 파도 위에서 <br /> 심해처럼 깊은 본질을 구조적으로 파고들어 <br /> 해답을 찾기 위해
            노력합니다.
          </p>
          <p className="inline-block mt-2 bg-secondary rounded-sm">
            <Link href="mailto:marineyeong@gmail.com" className="p-2 text-gray-200">
              연락하기
            </Link>
          </p>
        </div>
      </section>
      <section>
        <div className="max-w-[1280px] px-5 py-9 mx-auto">
          <h3 className="mb-5 text-2xl font-bold">최근 작성 글</h3>
          <PostLayout></PostLayout>
        </div>
      </section>
      <section>
        <div className="max-w-[1280px] px-5 py-9 mx-auto">
          <h3 className="mb-5 text-2xl font-bold">최근 프로젝트</h3>
          <ProjectLayout></ProjectLayout>
        </div>
      </section>
    </>
  );
}
