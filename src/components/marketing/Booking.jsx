import Illustre1 from "../../assets/images/Assiette-burger-frites.png";
import Illustre2 from "../../assets/images/Burger.png";
import Illustre3 from "../../assets/images/Sauce-pimente.png";
import { Container } from "../elements/Container";
import { Heading } from "../elements/displayTitles/Heading";

export const Booking = () => {
  return (
    <Container>
      <div className="relative mb-20">
        <img
          src={Illustre1}
          alt="image burger et frites en assiete"
          className="absolute -bottom-52 -right-80"
        />
        <img
          src={Illustre2}
          alt="image burger"
          className="absolute -top-20 -left-36 z-10"
        />
        <img
          src={Illustre3}
          alt="image sauce pimanté"
          className="absolute bottom-0 left-0"
        />
        <div className="max-w-3xl mx-auto px-10 py-20">
          <Heading varient="h3" className="justify-center">
            réservation
          </Heading>
          <Heading className="justify-center my-5" theme="secondary">
            réservez votre table
          </Heading>
          <form className="grid grid-cols-2 gap-x7 gap-6 mt-20">
            <div>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                htmlFor="name"
                placeholder="Jhon Doe"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="jhondoe@gmail.com"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="time">Heure</label>
              <input
                type="time"
                name="time"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="number">Nombre de personnes</label>
              <input
                type="text"
                name="number"
                className="focus:ring-myprimary focus:border-myprimary block w-full border-gray-400 rounded-md p-5"
              />
            </div>
            <div>
              <label htmlFor="btn" className="invisible">
                button
              </label>
              <input
                type="button"
                name="btn"
                className="bg-myred hover:bg-myredHover block tracking-widest uppercase font-secondary w-full border text-white text-center cursor-pointer rounded-md py-5 animate"
                value="Réservez votre repas"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
