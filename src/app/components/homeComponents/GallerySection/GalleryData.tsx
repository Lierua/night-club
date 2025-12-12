import { Suspense } from "react";
import GalleryDisplay, { GalleryItem } from "./GalleryDisplay";

type Photo = {
  id: number;
  asset: { url: string };
  description: string;
};

// type GalleryItem = {
//   id: number;
//   url: string;
//   description: string;
// };

const GalleryData = async () => {
  const url = "http://localhost:4000/gallery?limit=7";
  const response = await fetch(url, { cache: "no-store" });
  const photos = (await response.json()) as Photo[];
  console.log("All photos:", photos);
  const gallery: GalleryItem[] = [];
  for (let i = 0; i < photos.length; i++) {
    gallery.push({
      id: photos[i].id,
      url: photos[i].asset.url,
      description: photos[i].description,
    });
  }

  return (
    <Suspense>
      <GalleryDisplay gallery={gallery} />
    </Suspense>
  );
};

export default GalleryData;
