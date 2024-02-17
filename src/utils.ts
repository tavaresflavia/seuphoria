export const starsArray= (rating:number)=>{
  const stars: string[] = Array(5);
  stars.fill("empty", 0, 5);
  if (rating) {
    stars.fill("full", 0, Math.floor(rating));
    if (Math.floor(rating) !== rating) {
      stars[Math.floor(rating)] = "half";
    }
  }
  return stars
}