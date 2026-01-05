import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo';
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo';
import { electronicLevelTwo } from '../../../data/category/levelTwo/electronicsLevelTwo';
import { furnitureLevelTwo } from '../../../data/category/levelTwo/furnitureLevelTwo';
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree';
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree';
import { electronicsLevelThree } from '../../../data/category/levelThree/electronicsLevelThree';
import { furnitureLevelThree } from '../../../data/category/levelThree/furnitureLevelThree';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categoryTwo = {
  men: menLevelTwo,
  women: womenLevelTwo,
  electronics: electronicLevelTwo,
  home_furniture: furnitureLevelTwo,
};

const categoryThree = {
  men: menLevelThree,
  women: womenLevelThree,
  electronics: electronicsLevelThree,
  home_furniture: furnitureLevelThree,
};

const CategorySheet = ({ selectedCategory, setShowSheet }) => {

  const navigate = useNavigate();
  const childCategory = (category, parentCategoryId) => {
    return category.filter((child) => child.parentCategoryId === parentCategoryId);
  };

  return (
    <Box sx={{ zIndex: 2 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto scrollbar-hidden">
      <div className="flex text-sm flex-wrap">

        {categoryTwo[selectedCategory]?.map((item, index) => (
          <div key={item.categoryId} className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
            <p className="text-cyan-600 mb-5 font-semibold">{item.name}</p>

            <ul className="space-y-3">

              {childCategory(categoryThree[selectedCategory], item.categoryId).map((item) => (
                <div>
                  <li
                    onClick={() => {
                      navigate(`/products/${item.categoryId}`);
                    }}
                    className="hover:text-cyan-500 cursor-pointer">
                    {item.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
