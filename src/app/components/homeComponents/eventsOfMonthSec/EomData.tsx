import { Suspense } from "react";
import CarouselOne from "../../utilityComponents/CarouselOne";
import CardRow from "./EomCardRows";
import EomCard from "./EomCards";

type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  asset: { url: string };
  location: string;
};

type Card = {
  title: string;
  desc: string;
  date: string;
  time: string;
  location: string;
  assetUrl: string;
};

// Convert Event → Card
const toCard = (e: Event): Card => {
  const [date, timeFull] = e.date.split("T");
  const time = timeFull.slice(0, 5);

  return {
    title: e.title,
    desc: e.description,
    date: date,
    time: time, //toDo
    location: e.location,
    assetUrl: e.asset.url,
  };
};

const EomData = async () => {
  const url = "http://localhost:4000/events";
  const response = await fetch(url, { cache: "no-store" });
  const events = (await response.json()) as Event[];

  // Convert all events
  const cards = events.map(toCard);

  // et for loop, hvor hvert card, plus den der kommer lige efter index, jeg gruppere og pusher dem i array'et slides
  const slides = [];
  for (let i = 0; i < cards.length; i += 2) {
    const card1 = cards[i];
    const card2 = cards[i + 1];

    slides.push({
      id: i / 2,
      element: (
        <div className="grid grid-cols-2 gap-4 w-full">
          <EomCard title={card1.title} desc={card1.desc} date={card1.date} time={card1.time} location={card1.location} url={card1.assetUrl} />
          {card2 && <EomCard title={card2.title} desc={card2.desc} date={card2.date} time={card2.time} location={card2.location} url={card2.assetUrl} />}
        </div>
      ),
    });
  }

  return (
    <Suspense>
      <CarouselOne slides={slides} />
    </Suspense>
  );
};

export default EomData;
