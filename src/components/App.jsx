import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

//making a function that creates a card and takes a documnet as a parameter
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://m.media-amazon.com/images/M/MV5BNGM5YmYwNjUtNzQyYS00OGY0LTljZDAtMDNiMjhiOTFiMzRiXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg" />
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />

      <Card
        name="Chuck Norris"
        imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />

      <Card
        name="Taylor Swift"
        imgURL="https://www.rollingstone.com/wp-content/uploads/2019/12/TaylorSwiftTimIngham.jpg"
        phone="+953 934 345"
        email="tswift@gmail.com"
      /> */}
    </div>
  );
}

export default App;
