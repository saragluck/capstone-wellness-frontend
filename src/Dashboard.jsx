import { Sleep } from "./Sleep";
import { Water } from "./Water";
import { Goals } from "./Goals";

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Goals />
      <Sleep />
      <Water />
    </div>
  );
}
