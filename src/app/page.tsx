"use client";

import { useEffect, useState } from "react";
import { Button } from "@/src/app/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/src/app/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface Item {
  id: number;
  name: string;
}

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Dashboard Items</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" size="lg">
            View Items <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <h2 className="text-lg font-semibold mb-4">Available Items</h2>
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="rounded-md bg-primary/10 px-3 py-2 text-primary"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </main>
  );
}
