import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import React from "react";
import { useTheme } from "@/context/theme/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex-1 flex items-center h-10 justify-end pr-10 gap-2">
      <Switch
        id="mode"
        defaultChecked={theme == "dark"}
        onCheckedChange={(value) => {
          value ? setTheme("dark") : setTheme("light");
        }}
      />
      <Label htmlFor="mode">Dark Mode</Label>
    </div>
  );
};

export default Navbar;
