// return
// export const initialItems = [
//   {
//     id: 1,
//     isSelected: false,
//   },
//   {
//     id: 2,
//     isSelected: false,
//   },

//   {
//     id: 20_000_000,
//     isSelected: true,
//   },
// ];

export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 999,
  };
});
