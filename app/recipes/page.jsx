"use client";
import EmptyComponent from "@/components/EmptyComponent";
import FilterSection from "@/components/FilterSection";
import Loader from "@/components/Loader";
import UsersNav from "@/components/UsersNav";
import RecipeModal from "@/components/modals/RecipeModal";
import axiosFetch from "@/lib/axios";
import { selectModal, selectRecipe } from "@/redux/features/modals";
import { users } from "@/utils";
import { Box, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { recipe } = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    axiosFetch
      .get("/recipes")
      .then(({ data }) => setRecipes(data.recipes))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (loading) return <Loader />;

  if (!loading && users.length === 0) return <EmptyComponent title="Recipes" />;

  return (
    <div className="">
      <UsersNav title="Recipes" />
      {/* recipes table */}

      <div className="mx-4 hidden lg:block pb-[100px]">
        <table className="w-full overflow-x-scroll no-scrollbar">
          <thead>
            <tr className="w-full flex text-white rounded-md bg-[#706462] py-2">
              <th className="flex-1">ID</th>
              <th className="flex-1">Username</th>
              <th className="flex-1">Cuisine</th>
              <th className="flex-1">Dish</th>
              <th className="w-70">Image</th>
              <th className="flex-1">Click count</th>
              <th className="flex-1">Click income</th>
              <th className="flex-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-tp" : "bg-[#7a6f6c]"
                } w-full py-3 flex rounded-lg`}
              >
                <td className="flex-1 text-center text-sm">{recipe._id}</td>
                <td className="flex-1 text-center text-sm">
                  {recipe.owner.name}
                </td>
                <td className="flex-1 text-center text-sm">
                  {recipe?.cuisine?.name}
                </td>
                <td className="flex-1 text-center text-sm">
                  {recipe?.dishesType}
                </td>
                <td className="w-70">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
                    alt=""
                    className="contain h-[50px] w-[50px] contain rounded-md mx-auto"
                  />
                </td>
                <td className="flex-1 text-center text-sm">
                  {recipe?.counter?.numberOfClicks}
                </td>
                <td className="flex-1 text-center text-sm">$100</td>
                <td className="flex-1 text-center text-sm">
                  <button
                    onClick={() => dispatch(selectRecipe(recipe))}
                    className="bg-tp shadow-lg py-1 rounded-full px-3 m-2"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="lg:hidden pb-[100px]">
        {recipes.map((recipe, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? "bg-[#95837D]" : "bg-[#7a6f6c]"
            }  py-3 flex flex-col p-4 rounded-md mb-3 sm:mx-3 max-w-[600px] md:mx-auto`}
          >
            <p className="md:text-lg">{recipe._id}</p>
            <p className="md:text-lg">Username : {recipe.owner.name}</p>
            <p className="md:text-lg">Cuisine : {recipe?.cuisine?.name}</p>
            <p className="md:text-lg">Dish : {recipe?.dishesType}</p>
            <div className="">
              <span className="md:text-lg">Recipe image </span> :{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
                alt=""
                className="contain h-[50px] w-[50px] contain rounded-md"
              />
            </div>
            <p className="md:text-lg">
              Click count : {recipe?.counter?.numberOfClicks}
            </p>
            <p className="md:text-lg">Click Income : $100</p>
            <button
              onClick={() => dispatch(selectRecipe(recipe))}
              className="bg-tp shadow-lg py-1 rounded-full my-2 w-fit px-5"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* filter */}
      <FilterSection />

      <Modal open={recipe != null}>
        <Box>
          <RecipeModal />
        </Box>
      </Modal>
    </div>
  );
}

export default Recipes;
