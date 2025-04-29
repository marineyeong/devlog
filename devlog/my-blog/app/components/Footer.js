import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1280px] mx-auto py-4">
        <h5 className="mb-1 font-display-serif text-lg text-center font-bold">Marine</h5>
        <Link target="_blank" href="mailto:marineyeong@gmail.com" className="block text-gray text-sm text-center">
          marineyeong@gmail.com
        </Link>
      </div>
    </footer>
  );
}
