import Image from "next/image";

// Props type
type TablesProps = {
  day: string;
  reservations: any[];
};

function Tables({ day, reservations }: TablesProps) {
  console.log("Current reservations:", reservations);

  return (
    <div className="py-[90px] grid sm:grid-cols-5 gap-y-12">
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 1)
              ? "text-(--red)"
              : ""
          }`}
        >
          1
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 2)
              ? "text-(--red)"
              : ""
          }`}
        >
          2
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 3)
              ? "text-(--red)"
              : ""
          }`}
        >
          3
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 4)
              ? "text-(--red)"
              : ""
          }`}
        >
          4
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 5)
              ? "text-(--red)"
              : ""
          }`}
        >
          5
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 6)
              ? "text-(--red)"
              : ""
          }`}
        >
          6
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 7)
              ? "text-(--red)"
              : ""
          }`}
        >
          7
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 8)
              ? "text-(--red)"
              : ""
          }`}
        >
          8
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 9)
              ? "text-(--red)"
              : ""
          }`}
        >
          9
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 10)
              ? "text-(--red)"
              : ""
          }`}
        >
          10
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 11)
              ? "text-(--red)"
              : ""
          }`}
        >
          11
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 12)
              ? "text-(--red)"
              : ""
          }`}
        >
          12
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_2.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 13)
              ? "text-(--red)"
              : ""
          }`}
        >
          13
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_1.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 14)
              ? "text-(--red)"
              : ""
          }`}
        >
          14
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 [&>*]:col-[1/2] [&>*]:row-[1/2] items-center">
        <Image
          loading="eager"
          src={"/assets/table/table_3.png"}
          width={285}
          height={186}
          alt={"logo"}
          className="sm:mx-0 mx-auto"
        />
        <h1
          className={`w-fit h-fit mx-auto ${
            reservations.some((r) => Number(r.table) === 15)
              ? "text-(--red)"
              : ""
          }`}
        >
          15
        </h1>
      </div>
    </div>
  );
}

export default Tables;
