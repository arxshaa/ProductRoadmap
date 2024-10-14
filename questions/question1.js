const clothing = ["shirt", "pants", "jacket"];
const color = ["black", "white"];
const size = ["S", "M", "L"];

const generateList = () => {
  const result = [];
  
  for (let c of clothing) {
    for (let cl of color) {
      for (let s of size) {
        result.push(`${c} ${cl} ${s}`);
      }
    }
  }
  
  return result;
};

const list = generateList();
console.log(list);