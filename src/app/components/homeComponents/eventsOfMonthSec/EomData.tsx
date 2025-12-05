import { Suspense } from "react";
import CarouselOne from "../../utilityComponents/CarouselOne";
import CardRow from "./EomCardRows";

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
const toCard = (e: Event): Card => ({
  title: e.title,
  desc: e.description,
  date: e.date,
  time: "22:00", // TODO add correct field if available
  location: e.location,
  assetUrl: e.asset.url,
});

const EomData = async () => {
  const url = "http://localhost:4000/events";
  const response = await fetch(url, { cache: "no-store" });
  const events = (await response.json()) as Event[];

  // Convert all events
  const cards = events.map(toCard);

  // Pair in twos
  const cardPairs = [];
  for (let i = 0; i < cards.length; i += 2) {
    if (cards[i + 1]) {
      cardPairs.push({ card1: cards[i], card2: cards[i + 1] });
    }
  }

  // Ensure exactly 3 slides:
  const slide1 = cardPairs[0] ?? null;
  const slide2 = cardPairs[1] ?? null;
  const slide3 = cardPairs[2] ?? null;

  return (
    <Suspense>
      <CarouselOne
        slot1={
          slide1 ? (
            <CardRow card1={slide1.card1} card2={slide1.card2} />
          ) : (
            <div>No events</div>
          )
        }
        slot2={
          slide2 ? (
            <CardRow card1={slide2.card1} card2={slide2.card2} />
          ) : (
            <div>No events</div>
          )
        }
        slot3={
          slide3 ? (
            <CardRow card1={slide3.card1} card2={slide3.card2} />
          ) : (
            <div>No events</div>
          )
        }
      />
    </Suspense>
  );
};

export default EomData;
