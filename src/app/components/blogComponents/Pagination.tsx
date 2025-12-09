import Link from "next/link";

type pageProps = {
  page: number;
};

const Pagination = ({ page }: pageProps) => {
  return (
    <div className="flex">
      <div className="flex gap-3">
        {Number(page) <= 1 ? (
          ""
        ) : (
          <Link
            href={`/blogPost?page=${Number(page) - 1}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2>&lt; previous</h2>
          </Link>
        )}
        {Number(page) <= 2 ? (
          ""
        ) : (
          <Link
            href={`/blogPost?page=${Number(page) - 2}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2 className="">{Number(page) - 2}</h2>
          </Link>
        )}
        {Number(page) <= 1 ? (
          ""
        ) : (
          <Link
            href={`/blogPost?page=${Number(page) - 1}`}
            className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
          >
            <h2 className="">{Number(page) - 1}</h2>
          </Link>
        )}
        <Link href={`/blogPost?page=${page}`} className="w-fit">
          <h2 className="border-b-1 border-b-(--white) hover:border-b-(--red) hover:text-(--red) transition-all duration-200 ease-in">
            {Number(page)}
          </h2>
        </Link>
        <Link
          href={`/blogPost?page=${Number(page) + 1}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2 className="">{Number(page) + 1}</h2>
        </Link>
        <Link
          href={`/blogPost?page=${Number(page) + 2}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2 className="">{Number(page) + 2}</h2>
        </Link>
        <Link
          href={`/blogPost?page=${Number(page) + 1}`}
          className="w-fit hover:text-(--red) transition-all duration-200 ease-in"
        >
          <h2>next &gt;</h2>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
