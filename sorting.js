const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
    directions: "Take Highway 20 north to Island Park...",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to one of the largest volcanic tuff cones in the world.",
    directions: "Take Highway 33 West out of Rexburg...",
    trailhead: [43.78555, -111.98996]
  }
];

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Activity 1: Sorting strings
console.log("Activity 1: Simple Sort");
const simpleSort = [...simpleList].sort(); // Basic sort (case sensitive)
console.log("Default sort:", simpleSort);

// Case-insensitive ascending sort
const caseInsensitiveSort = [...simpleList].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("Case-insensitive sort:", caseInsensitiveSort);

// Descending sort
const descendingSort = [...simpleList].sort((a, b) =>
  b.toLowerCase().localeCompare(a.toLowerCase())
);
console.log("Descending sort:", descendingSort);

// Activity 2: Filtering strings
console.log("\nActivity 2: Filter List");

function searchList(list, query) {
  return list.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

console.log("Filtered with 'b':", searchList(simpleList, "b"));

// Activity 3: Filter and Sort objects
console.log("\nActivity 3: Search and Sort Hikes");

function searchHikes(hikes, query) {
  const q = query.toLowerCase();
  return hikes.filter(hike => {
    const nameMatch = hike.name.toLowerCase().includes(q);
    const descMatch = hike.description.toLowerCase().includes(q);
    const tagMatch = hike.tags.find(tag => tag.toLowerCase().includes(q));
    return nameMatch || descMatch || tagMatch;
  });
}

function getMiles(distanceStr) {
  return parseFloat(distanceStr);
}

function sortByDistance(a, b) {
  return getMiles(a.distance) - getMiles(b.distance);
}

const filteredHikes = searchHikes(hikes, "al");
const sortedHikes = filteredHikes.sort(sortByDistance);

console.log("Filtered and sorted hikes:", sortedHikes);
