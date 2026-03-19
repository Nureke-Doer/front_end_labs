import { useState, useCallback } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { Button } from "./Button";

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState({ id: 1, name: "John Doe", email: "john@example.com" });
  const [items] = useState(["item1", "item2", "item3"]);

  // useCallback сохраняет функцию между рендерами
  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Dashboard (count: {count})</h1>
      
      <Button onClick={handleIncrement} label="Increment" />
      <Button onClick={handleClick} label="Click me" />

      <UserCard user={user} />
      <AnalyticsChart items={items} />
      <ActivityFeed />
    </div>
  );
}