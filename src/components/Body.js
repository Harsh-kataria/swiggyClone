import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let listOfRestaurants = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "84071",
            name: "Gurukripa Restaurant - Sarwate",
            cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
            locality: "Sarwate",
            areaName: "South Tukoganj",
            costForTwo: "₹250 for two",
            cuisines: [
              "North Indian",
              "Thalis",
              "Indian",
              "Fast Food",
              "Chinese",
              "Beverages",
              "Desserts",
              "Jain",
              "Punjabi",
            ],
            avgRating: 3.8,
            veg: true,
            feeDetails: {
              restaurantId: "84070",
              fees: [
                {
                  name: "BASE_DISTANCE",
                  fee: 2300,
                },
                {
                  name: "BASE_TIME",
                },
                {
                  name: "ANCILLARY_SURGE_FEE",
                },
              ],
              totalFee: 2300,
            },
            parentId: "92204",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 46,
              lastMileTravel: 2.2,
              serviceability: "SERVICEABLE",
              slaString: "46 mins",
              lastMileTravelString: "2.2 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-10-29 23:59:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    },
                  ],
                },
                textExtendedBadges: {},
                textBased: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "84070",
            name: "KFC",
            cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
            locality: "Sarwate",
            areaName: "South Tukoganj",
            costForTwo: "₹250 for two",
            cuisines: [
              "North Indian",
              "Thalis",
              "Indian",
              "Fast Food",
              "Chinese",
              "Beverages",
              "Desserts",
              "Jain",
              "Punjabi",
            ],
            avgRating: 4,
            veg: true,
            feeDetails: {
              restaurantId: "84070",
              fees: [
                {
                  name: "BASE_DISTANCE",
                  fee: 2300,
                },
                {
                  name: "BASE_TIME",
                },
                {
                  name: "ANCILLARY_SURGE_FEE",
                },
              ],
              totalFee: 2300,
            },
            parentId: "92204",
            avgRatingString: "4.0",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 46,
              lastMileTravel: 2.2,
              serviceability: "SERVICEABLE",
              slaString: "46 mins",
              lastMileTravelString: "2.2 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2023-10-29 23:59:00",
              opened: true,
            },
            badges: {
              imageBadges: [
                {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              ],
            },
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {
                  badgeObject: [
                    {
                      attributes: {
                        imageId: "v1695133679/badges/Pure_Veg111.png",
                        description: "pureveg",
                      },
                    },
                  ],
                },
                textExtendedBadges: {},
                textBased: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=84070&source=collection&query=North%20Indian",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
  ];
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant.card.card.info.id}
          />
        ))}
        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};

export default Body;
