import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(status());
  }, [dispatch]);

  return (
    <div className="categories">
      <h1>{categories}</h1>
    </div>
  );
};

export default Categories;
