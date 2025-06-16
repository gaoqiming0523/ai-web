import { HomeIcon, Mic } from "lucide-react";
import Index from "./pages/Index";
import VoiceInteractionPage from "./pages/VoiceInteractionPage";

export const navItems = [
  {
    title: "首页",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "语音助手",
    to: "/voice-interaction",
    icon: <Mic className="h-4 w-4" />,
    page: <VoiceInteractionPage />,
  },
];
