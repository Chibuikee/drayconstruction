"use client";
import { Gallery } from "next-gallery";

function GalleryComponent() {
  const images = [
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "/assets/blog/woodcontact.avif", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 32 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 48 / 32 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16 / 9 },
    { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 48 / 9 },
  ];
  const widths = [300, 768, 1024, 1600];
  const ratios = [16 / 9, 32 / 9, 48 / 9, 64 / 9, 64 / 9];
  return <Gallery {...{ images, widths, ratios }} />;
}

export default GalleryComponent;

{
  /* <Gallery {...{images, widths, ratios}} initState={false} overlay={(name, state, setState) => <MyOverlay selected={state} onClick={() => setState(s => !s)} />} /> */
}
