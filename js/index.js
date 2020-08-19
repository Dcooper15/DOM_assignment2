//adding an h1 element
const bodyContainer = document.getElementById('container')
const headerText = "The Beattles Lyrics"
const newHeader = document.createElement("h1");

newHeader.innerHTML = headerText

bodyContainer.appendChild(newHeader)


//adding and h2 element
const newH2 = document.createElement("h2");
const h2Text = "Sgt Pepper's Lonely Hearts Club Band"
newH2.innerHTML = h2Text
bodyContainer.appendChild(newH2);


//adding 3 paragraphs

//paragraph 1
const newParagraph1 = document.createElement("p");
const p1Text = "Lucy in the sky with diamonds. Lucy in the sky with diamonds. Lucy in the sky with diamonds. Aaaaaaaaaahh..";
newParagraph1.innerHTML = p1Text;
bodyContainer.appendChild(newParagraph1);

//paragraph 2
const newParagraph2 = document.createElement("p");
const p2Text = "Oh I get by with a little help from my friends. Mm gonna try with a little help from my friends. Oh I get high with a little help from my friends. Yes I get by with a little help from my friends";
newParagraph2.innerHTML = p2Text;
bodyContainer.appendChild(newParagraph2);

//paragraph 3
const newParagraph3 = document.createElement("p");
const p3Text = "We're Sergeant Pepper's Lonely Hearts Club Band. We hope you will enjoy the show. We're Sergeant Pepper's Lonely Hearts Club Band. Sit back and let the evening go. Sergeant Pepper's lonely, Sgt. Pepper's lonely. Sergeant Pepper's Lonely Hearts Club Band."
newParagraph3.innerHTML = p3Text;
bodyContainer.appendChild(newParagraph3);


// ul

const newUnorderedList = document.createElement("ul");
const ulText = "Band Members:"
newUnorderedList.innerHTML = ulText
bodyContainer.appendChild(newUnorderedList);

//list items
const listItem1 = document.createElement("li");
const li1Text = "Ringo Starr";
listItem1.innerHTML = li1Text;
bodyContainer.appendChild(listItem1);

const listItem2 = document.createElement('li');
const li2Text = "Paul McCartney";
listItem2.innerHTML = li2Text;
bodyContainer.appendChild(listItem2);

const listItem3 = document.createElement('li');
const li3Text = "John Lennon";
listItem3.innerHTML = li3Text;
bodyContainer.appendChild(listItem3);

const listItem4 = document.createElement('li');
const li4Text = "George Harrison";
listItem4.innerHTML = li4Text;
bodyContainer.appendChild(listItem4);