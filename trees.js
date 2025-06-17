const categories = {
  city: "city",
  district: "district",
  street: "street",
  number: "number",
};

const slovakia = {
  children: [
    {
      title: "Bratislava",
      category: categories.city,
      children: [
        {
          title: "Petrzalka",
          category: categories.district,
          children: [
            {
              title: "Svoradova",
              category: categories.street,
              children: [],
            },
            {
              title: "Osvistova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
            {
              title: "Einsteinova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
          ],
        },
        {
          title: "Ruzinov",
          category: categories.district,
          children: [
            {
              title: "Svoradova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
            {
              title: "Osvistova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
                { title: 2, category: categories.number, children: [] },
              ],
            },
            {
              title: "Einsteinova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Kosice",
      category: categories.city,
      children: [
        {
          title: "Terasa",
          category: categories.district,
          children: [
            {
              title: "SNP",
              category: categories.street,
              children: [],
            },
            {
              title: "Nesporova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
            {
              title: "Humenska",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
          ],
        },
        {
          title: "Dzungla",
          category: categories.district,
          children: [
            {
              title: "Gotwaldova",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
            {
              title: "Dalsia",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
                { title: 2, category: categories.number, children: [] },
              ],
            },
            {
              title: "Nakupna",
              category: categories.street,
              children: [
                { title: 1, category: categories.number, children: [] },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function stackSearch(tree, target) {
  let result = [];
  for (const stack = [tree]; stack.length; ) {
    const curr = stack.pop();

    if (curr.title === target) {
      // return curr.label;
      result.push(curr);
    }
    console.log(curr);
    stack.push(...curr.children);
  }
  return result;
}

stackSearch(slovakia, "Einsteinova");
