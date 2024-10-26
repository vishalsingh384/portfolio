import { Button } from "./button";
 import { CoolMode } from "./cool-mode";

export function CoolModeCustom() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  );
}
