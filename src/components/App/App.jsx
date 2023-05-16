import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { getData } from 'services/api';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { StyledApp } from './App.styled';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const [largeImageRef, setLargeImageRef] = useState('');

  const request = async () => {
    setLoading(true);
    const response = await getData(query, page);
    setLoading(false);
    setImages(prevState => [...prevState, ...response.hits]);
    if (total !== 0) return;
    setTotal(response.totalHits);
  };

  useEffect(() => {
    if (query === '') return;
    request(); // eslint-disable-next-line
  }, [query, page]);

  const onSearch = e => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    if (value === '' || value === query) return;
    setQuery(value.replaceAll(' ', '+'));
    setPage(1);
    setTotal(0);
    setImages([]);
  };

  const openModal = e => {
    const ref = images.find(
      image => image.id === Number(e.target.id)
    ).largeImageURL;
    setLargeImageRef(ref);
    setModal(true);
  };

  const learnMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <StyledApp>
      <Searchbar onSearch={onSearch} />
      {images.length !== 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {total > 0 && total > 12 && <Button learnMore={learnMore} />}
      {isModalOpen && <Modal largeImageRef={largeImageRef} onClose={onClose} />}
    </StyledApp>
  );
};
