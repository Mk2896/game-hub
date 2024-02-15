export default function cropImages(url?: string) {
  if (!url) return "";
  const startIndex = url.indexOf("media/") + 6;

  return (
    url.substring(0, startIndex) + "crop/600/400/" + url.substring(startIndex)
  );
}
