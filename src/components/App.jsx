import { Button } from "./Button/Button";
// import Modal from "./Modal/Modal";
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";


export const App = () => {
  return (
    <div>
      {/* <Modal /> */}
      <Searchbar />
      <ImageGallery />
      <Button />
    </div>
  );
};
