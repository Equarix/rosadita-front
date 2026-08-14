import { CardServicesProps } from "@/components/ui/card-services/CardServices";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import {
  LuChartColumnBig,
  LuChartNoAxesCombined,
  LuCodeXml,
} from "react-icons/lu";
import { MdOutlineCloud, MdPhonelink } from "react-icons/md";
import { RxStack } from "react-icons/rx";
import { ReactNode } from "react";

export interface CardItemMeta {
  key: "web" | "mobile" | "cloud" | "data";
  icon: ReactNode;
  mainColor: string;
  secondaryColor: string;
  cardFeaturesIcon: ReactNode;
  featureKeys: string[];
}

export const cardItemsMetadata: CardItemMeta[] = [
  {
    key: "web",
    icon: <LuCodeXml />,
    mainColor: "text-blue-700",
    secondaryColor: "bg-blue-100",
    cardFeaturesIcon: <RxStack />,
    featureKeys: ["headless", "seo", "frontend", "api"],
  },
  {
    key: "mobile",
    icon: <HiOutlineDevicePhoneMobile />,
    mainColor: "text-purple-700",
    secondaryColor: "bg-purple-100",
    cardFeaturesIcon: <MdPhonelink />,
    featureKeys: ["native", "crossPlatform", "design", "offline"],
  },
  {
    key: "cloud",
    icon: <MdOutlineCloud />,
    mainColor: "text-sky-700",
    secondaryColor: "bg-sky-100",
    cardFeaturesIcon: <MdOutlineCloud />,
    featureKeys: ["migration", "serverless", "cicd", "docker"],
  },
  {
    key: "data",
    icon: <LuChartColumnBig />,
    mainColor: "text-green-700",
    secondaryColor: "bg-green-100",
    cardFeaturesIcon: <LuChartNoAxesCombined />,
    featureKeys: ["bi", "ml", "bigData", "warehouse"],
  },
];
