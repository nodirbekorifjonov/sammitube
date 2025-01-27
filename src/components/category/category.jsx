import { Stack } from "@mui/material";
import { category } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{ overflowX: "scroll", columnGap: "5px", px: "10px" }}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            border: "0",
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "#fff",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
