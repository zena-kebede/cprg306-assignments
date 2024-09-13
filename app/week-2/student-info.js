import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div> 
            <h1>Zena Kebede</h1>
            <p>My Github Repository:
                <Link href="https://github.com/zena-kebede/cprg306-assignments">
                Github Repo
                </Link>
            </p>
        </div>
    );
}