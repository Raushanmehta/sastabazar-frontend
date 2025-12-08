import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { colors } from '../../../data/filter/colors'

import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { price } from '../../../data/filter/price'
import { discount } from '../../../data/filter/discount'

const FilterSection = () => {

  const [expandColor, setExpandColor] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();

  const handleExpandColor = () => {
    setExpandColor(!expandColor)
  };


  const updateFilterParams = (e) => {
    const { name, value } = e.target;

    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }

    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    searchParams.forEach((value, key) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };

  return (
    <div className='-z-50 space-y-6 bg-white'>
      <div className='flex items-center justify-between h-[40%] px-9 lg:border-r border-gray-300'>
        <p className='text-lg font-semibold text-gray-700'>Filter</p>
        <Button onClick={clearAllFilters} className='cursor-pointer font-semibold'>
          Clear All
        </Button>
      </div>

      <Divider />

      <div className='px-9 py-5 space-y-6 lg:border-r border-gray-300'>

        {/* COLOR FILTER */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: grey[700],
                pb: "14px"
              }}
              id='color'
            >
              COLOR
            </FormLabel>

            <RadioGroup
              aria-labelledby="color"
              defaultValue=""
              name="color"
              onChange={updateFilterParams}
            >
              {colors.slice(0, expandColor ? colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name}
                  control={<Radio size="small" />}
                  label={
                    <div className='flex items-center gap-3'>
                      <p>{item.name}</p>
                      <div
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full border ${item.name === "white" ? "border" : ""}`}
                      ></div>
                    </div>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <button
            onClick={handleExpandColor}
            className='text-cyan-500 cursor-pointer hover:text-cyan-700 flex items-center'
          >
            {expandColor ? "Hide" : `+${colors.length - 5} more`}
          </button>
        </section>

        {/* PRICE FILTER */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: grey[700],
                pb: "14px"
              }}
              id='price'
            >
              PRICE
            </FormLabel>

            <RadioGroup
              aria-labelledby="price"
              defaultValue=""
              name="price"
              onChange={updateFilterParams}
            >
              {price.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

        {/* DISCOUNT FILTER */}
        <section>
          <FormControl>
            <FormLabel
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: grey[700],
                pb: "14px"
              }}
              id='discount'
            >
              DISCOUNT
            </FormLabel>

            <RadioGroup
              aria-labelledby="discount"
              name="discount"
              onChange={updateFilterParams}
            >
              {discount.map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </section>

      </div>
    </div>
  )
}

export default FilterSection
