/** Build a Pexels image URL from a photo id (the number at the end of a pexels.com/photo/... link). */
export const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
