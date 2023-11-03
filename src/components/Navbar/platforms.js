import {
  RiComputerFill,
  RiPlaystationLine,
  RiXboxFill,
  RiSteamFill,
  RiXboxLine,
} from "react-icons/ri";
import { SiEpicgames, SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { TbBrandXbox } from "react-icons/tb";

export const platForms = [
  {
    name: <RiComputerFill size={40} />,
    queryParam: "/?platform=pc",
    id: 1,
  },
  {
    name: <RiPlaystationLine size={40} />,
    queryParam: "/?platform=ps4.ps5",
    id: 2,
  },
  {
    name: <RiXboxFill size={40} />,
    queryParam: "/?platform=xbox-one.xbox-series-xs.xbox-360",
    id: 3,
  },
  {
    name: <SiEpicgames size={40} />,
    queryParam: "/?platform=epic-games-store",
    id: 4,
  },
  {
    name: <RiSteamFill size={40} />,
    queryParam: "/?platform=steam",
    id: 5,
  },
  {
    name: <SiPlaystation5 size={40} />,
    queryParam: "/?platform=ps5",
    id: 6,
  },
  {
    name: <SiPlaystation4 size={40} />,
    queryParam: "/?platform=ps4",
    id: 7,
  },
  {
    name: <RiXboxLine size={40} />,
    queryParam: "/?platform=xbox-series-xs",
    id: 8,
  },
  {
    name: <TbBrandXbox size={40} />,
    queryParam: "/?platform=xbox-one",
    id: 9,
  },
];

export const customCategoryText = {
  "": "All Games",
  pc: "PC Games",
  "ps4.ps5": "PlayStation Games",
  "xbox-one.xbox-series-xs.xbox-360": "Xbox Games",
  "epic-games-store": "Epic Games",
  steam: "Steam Games",
  ps5: "PlayStation 5 Games",
  ps4: "PlayStation 4 Games",
  "xbox-series-xs": "Xbox Series X/S Games",
  "xbox-one": "Xbox One Games",
};
