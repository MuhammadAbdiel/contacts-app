let contacts = [
  {
    id: 1,
    name: "Dimas Saputra",
    tag: "dimasmds",
    imageUrl: "/images/dimasmds.png",
  },
  {
    id: 2,
    name: "Arif Faizin",
    tag: "arifaizin",
    imageUrl: "/images/arifaizin.png",
  },
  {
    id: 3,
    name: "Rahmat Fajri",
    tag: "rfajri27",
    imageUrl: "/images/rfajri27.png",
  },
];

function getContacts() {
  return contacts;
}

function addContact(contact) {
  contacts = [
    ...contacts,
    { id: +new Date(), imageUrl: "/images/default.png", ...contact },
  ];
}

function deleteContact(id) {
  contacts = contacts.filter((contact) => contact.id !== id);
}

export { getContacts, addContact, deleteContact };
