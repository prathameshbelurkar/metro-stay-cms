// Search for: 'jo', 'fa', 'mar', 'emm', 'ah'

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomName() {
  const firstNames = [
    "Prathamesh",
    "Rohan",
    "Aarav",
    "Vivaan",
    "Aditya",
    "Raj",
    "Aryan",
    "Krishna",
    "Sai",
    "Karan",
  ];
  const lastNames = [
    "Belurkar",
    "Sharma",
    "Patel",
    "Reddy",
    "Nair",
    "Singh",
    "Gupta",
    "Kumar",
    "Das",
    "Verma",
  ];
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  return `${firstName} ${lastName}`;
}

function generateRandomEmail(name) {
  const domains = ["example.com", "email.com", "test.com"];
  const nameParts = name.toLowerCase().split(" ");
  const email = `${nameParts[0]}${
    Math.floor(Math.random() * 100) + 1
  }@${getRandomElement(domains)}`;
  return email;
}

function generateRandomNationalID() {
  return Math.random().toString().slice(2, 12);
}

function generateRandomIndianEntries(numEntries) {
  const entries = [];
  for (let i = 0; i < numEntries; i++) {
    const fullName = generateRandomName();
    const email = generateRandomEmail(fullName);
    const entry = {
      fullName: fullName,
      email: email,
      nationality: "India",
      nationalID: generateRandomNationalID(),
      countryFlag: "https://flagcdn.com/in.svg", // Correct flag URL for India
    };
    entries.push(entry);
  }
  return entries;
}

export const guests = generateRandomIndianEntries(25);
