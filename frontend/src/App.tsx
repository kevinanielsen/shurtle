import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("");

  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <Button variant="sm" color="secondary" label="This is a test!">
        Hello!
      </Button>
      <Input
        type="text"
        variant="sm"
        disabled={false}
        label="Test Input"
        placeholder="This is a test!"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>{value}</h2>
    </main>
  );
}

export default App;
