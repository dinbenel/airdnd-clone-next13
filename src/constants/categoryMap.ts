import barn from "../assets/svg/barn-svgrepo-com.svg";
import fishingBoat from "../assets/svg/boat-fishing-svgrepo-com.svg";
import villa from "../assets/svg/house-with-garden-svgrepo-com.svg";
import pool from "../assets/svg/swimming-swim-svgrepo-com.svg";
import island from "../assets/svg/island-svgrepo-com.svg";
import sking from "../assets/svg/ski-svgrepo-com.svg";
import castle from "../assets/svg/castle-svgrepo-com.svg";
import caveEntrance from "../assets/svg/cave-entrance-svgrepo-com.svg";
import forestCamp from "../assets/svg/forest-camp-svgrepo-com.svg";
import snow from "../assets/svg/snow-crystal-1-svgrepo-com.svg";
import cactus from "../assets/svg/cactus-svgrepo-com.svg";
import diamond from "../assets/svg/diamond-svgrepo-com.svg";

import { GiWindmill } from "react-Icons/gi";
import {
  TbBeach,
  TbMountain,
  TbHeartFilled,
  TbMenu2,
  TbHeart,
  TbUserCircle,
  TbSearch,
} from "react-Icons/tb";
import { FaUndo, FaPhotoVideo, FaHotel } from "react-Icons/fa";
import { BsGoogle, BsGithub } from "react-Icons/bs";
import {
  IoDiamond,
  IoClose,
  IoAddOutline,
  IoRemove,
  IoCheckmarkSharp,
} from "react-Icons/io5";

export const icons = {
  TbHeartFilled,
  TbHeart,
  TbMenu2,
  TbUserCircle,
  TbSearch,
  BsGithub,
  BsGoogle,
  IoClose,
  IoAddOutline,
  IoRemove,
  IoCheckmarkSharp,
  FaUndo,
  FaPhotoVideo,
  FaHotel,
};

export const categoryMap: Record<string, any> = {
  TbBeach,
  TbMountain,
  GiWindmill,
  IoDiamond: diamond,
  GiBarn: barn,
  GiCactus: cactus,
  BsSnow: snow,
  GiForestCamp: forestCamp,
  GiCaveEntrance: caveEntrance,
  GiCastle: castle,
  FaSkiing: sking,
  GiBoatFishing: fishingBoat,
  GiIsland: island,
  TbPool: pool,
  MdOutlineVilla: villa,
};
