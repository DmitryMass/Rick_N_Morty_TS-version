import { useRef, useState } from 'react';

const useScroll = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [page, setPage] = useState<number>(1);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const paginationNextClick = () => {
    handleClick();
    setPage(page + 1);
  };
  const paginationPrevClick = () => {
    handleClick();
    setPage(page - 1);
  };

  return {
    ref,
    page,
    paginationNextClick,
    paginationPrevClick,
  };
};

export default useScroll;
