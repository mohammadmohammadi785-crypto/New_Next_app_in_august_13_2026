import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  // const t = useTranslations("navbar");
  return (
    <div className="w-full py-4 px-6 flex justify-between items-center">
      <div>logo</div>
      <div className="flex gap-6">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}
