"use client";
import axiosFetch from "@/lib/axios";
import { selectModal, selectRecipe } from "@/redux/features/modals";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

function RecipeModal() {
  const dispatch = useDispatch();
  const { recipe } = useSelector(selectModal);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      axiosFetch
        .get("/recipes/" + recipe.owner._id)
        .then(({ data }) => setRecipes(data.recipes))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    })();
  }, [recipe]);

  return (
    <div className="w-full flex justify-center r h-screen backdrop-blur-lg overflow-y-scroll no-scrollbar pt-10">
      <IoMdClose
        onClick={() => dispatch(selectRecipe(null))}
        className="absolute right-0 top-0 m-5 text-4xl cursor-pointer text-white"
      />
      <section className="bg-tp w-full max-w-[600px] p-5 rounded-md text-cener py-20 text-white overflow-y-scroll no-scrollbar">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
            alt=""
            className="w-full h-[250px] rounded-md"
          />
          <h2 className="italic font-bold text-4xl my-3">{recipe?.title}</h2>
          <p className="mb-3">Rating Count : 3495</p>
          <p className="mb-3">Rating : 3495</p>
          <p className="mb-3">User : {recipe?.owner?.name}</p>
          <p className="mb-3">User type : standard</p>
          <p className="mb-3">
            Click Count : {recipe?.counter?.numberOfClicks}
          </p>
          <p className="mb-3">Clicks Income : $283</p>
          <p className="mb-3">Watch Count : 3495</p>
          <p className="mb-3">
            Share Count : {recipe?.counter?.numberOfShares}
          </p>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, aspernatur maxime voluptatem officia at in? Nulla
            praesentium ipsam magni in quidem architecto rem voluptates iure
            rerum soluta, voluptatibus a? Ipsam!
          </p>

          <h2 className="mt-5 mb-2 font-bold lg:text-2xl">Ingredients :</h2>
          <ol className="ml-3">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="mb-3">
                {i + 1 + " : " + item.name}
              </li>
            ))}
          </ol>

          <h2 className="mt-5 mb-2 font-bold lg:text-2xl">Manual : </h2>
          <ol className="ml-3">
            {recipe.manual.map((item, i) => (
              <li key={i} className="mb-3">
                {i + 1 + " : " + item.description}
              </li>
            ))}
          </ol>

          <h2 className="mt-5 mb-2 font-bold lg:text-2xl">Tips : </h2>
          <p className="mb-3 ml-3">You can add this and that</p>

          <h2 className="mt-5 mb-2 text-center font-bold lg:text-2xl">
            Different recipes from this author
          </h2>
          <section className="flex overflow-x-scroll w-full no-scrollbar">
            <div className="flex gap-4">
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                recipes.map((item, i) => (
                  <div
                    key={i}
                    className="w-[300px] rounded-lg overflow-hidden bg-tp"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKPuLozRC2n4MnlyKlPdTQm6keMAOJnlTwQ&usqp=CAU"
                      alt=""
                      className="w-full h-[150px]"
                    />
                    <h2 className="font-bold text-lg md:text-2xl text-center my-2">
                      {item?.title}
                    </h2>
                    <p className="p-2 text-sm">{item?.description}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default RecipeModal;
