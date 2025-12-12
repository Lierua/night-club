import Link from "next/link";

type pageProps = {
  page: number;
};

const Pagination = ({ page }: pageProps) => {
  const currentPage = Number(page) || 1;

  return (
    <div className="flex">
      <div className="flex gap-3">
        {currentPage > 1 && (
          <Link
            href={`/blogPost?page=${currentPage - 1}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2>&lt; previous</h2>
          </Link>
        )}

        {currentPage > 2 && (
          <Link
            href={`/blogPost?page=${currentPage - 2}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2>{currentPage - 2}</h2>
          </Link>
        )}

        {currentPage > 1 && (
          <Link
            href={`/blogPost?page=${currentPage - 1}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2>{currentPage - 1}</h2>
          </Link>
        )}

        <Link href={`/blogPost?page=${currentPage}`} className="w-fit">
          <h2 className="border-b-1 border-b-(--white) hover:border-b-(--red) hover:text-(--red) transition-all duration-200 ease-in">
            {currentPage}
          </h2>
        </Link>

        <Link
          href={`/blogPost?page=${currentPage + 1}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2>{currentPage + 1}</h2>
        </Link>

        <Link
          href={`/blogPost?page=${currentPage + 2}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2>{currentPage + 2}</h2>
        </Link>

        <Link
          href={`/blogPost?page=${currentPage + 1}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2>next &gt;</h2>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
