import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments </h1>
      <Link href="http://localhost:3000/week-2"> Week 2</Link>
      <h1>CPRG 306: Web Development 3 - Assignments </h1>
      <Link href="http://localhost:3000/week-3"> Week 3</Link>
    </div>
  );
}